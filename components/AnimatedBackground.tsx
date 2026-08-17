"use client";

import { useEffect, useRef } from "react";

interface Pt { x: number; y: number; }
interface Seg { from: Pt; to: Pt; len: number; cum: number; }
interface Track { pts: Pt[]; segs: Seg[]; totalLen: number; loop: boolean; }
interface Particle { pos: number; speed: number; tail: number; }

function buildTrack(pts: Pt[], loop = false): Track {
  let cum = 0;
  const segs: Seg[] = [];
  const all = loop ? [...pts, pts[0]] : pts;
  for (let i = 1; i < all.length; i++) {
    const len = Math.hypot(all[i].x - all[i - 1].x, all[i].y - all[i - 1].y);
    segs.push({ from: all[i - 1], to: all[i], len, cum });
    cum += len;
  }
  return { pts, segs, totalLen: cum, loop };
}

function posAt(segs: Seg[], total: number, d: number): Pt {
  const dd = Math.max(0, Math.min(total, d));
  for (const s of segs) {
    if (dd >= s.cum && dd <= s.cum + s.len) {
      const f = s.len === 0 ? 0 : (dd - s.cum) / s.len;
      return { x: s.from.x + (s.to.x - s.from.x) * f, y: s.from.y + (s.to.y - s.from.y) * f };
    }
  }
  return segs[segs.length - 1].to;
}

interface Plan {
  tracks: { track: Track; particles: Particle[]; alpha: number }[];
  junctions: Pt[];
}

function buildPlan(W: number, H: number): Plan {
  /* Ceiling channel layout — viewed from below, like a fall ceiling plan */
  const ox = W * 0.07,  oy = H * 0.10;
  const ow = W * 0.86,  oh = H * 0.80;
  const ix = W * 0.22,  iy = H * 0.25;
  const iw = W * 0.56,  ih = H * 0.50;

  const outer: Pt[] = [
    { x: ox,      y: oy      },
    { x: ox + ow, y: oy      },
    { x: ox + ow, y: oy + oh },
    { x: ox,      y: oy + oh },
  ];

  const inner: Pt[] = [
    { x: ix,      y: iy      },
    { x: ix + iw, y: iy      },
    { x: ix + iw, y: iy + ih },
    { x: ix,      y: iy + ih },
  ];

  /* Cross-channels: outer cove ↔ inner panel  */
  const cross: Pt[][] = [
    [{ x: W * 0.50, y: oy      }, { x: W * 0.50, y: iy      }], // top centre ↓
    [{ x: W * 0.50, y: iy + ih }, { x: W * 0.50, y: oy + oh }], // bottom centre ↓
    [{ x: ox,       y: H * 0.40 }, { x: ix,      y: H * 0.40 }], // left upper →
    [{ x: ox,       y: H * 0.62 }, { x: ix,      y: H * 0.62 }], // left lower →
    [{ x: ix + iw,  y: H * 0.38 }, { x: ox + ow, y: H * 0.38 }], // right upper →
    [{ x: ix + iw,  y: H * 0.62 }, { x: ox + ow, y: H * 0.62 }], // right lower →
  ];

  const outerTrack = buildTrack(outer, true);
  const innerTrack = buildTrack(inner, true);

  /* Stagger particles around each loop so they're never bunched */
  const outerLen = outerTrack.totalLen;
  const innerLen = innerTrack.totalLen;

  const tracks = [
    {
      track: outerTrack,
      alpha: 0.045,
      particles: [
        { pos: 0,             speed: 24, tail: 110 },
        { pos: outerLen / 2,  speed: 24, tail: 110 },
      ],
    },
    {
      track: innerTrack,
      alpha: 0.055,
      particles: [
        { pos: 0,             speed: 18, tail: 90 },
        { pos: innerLen / 2,  speed: 18, tail: 90 },
      ],
    },
    ...cross.map((pts, i) => ({
      track: buildTrack(pts, false),
      alpha: 0.038,
      particles: [{ pos: -(i * 45 + 20), speed: 20 + (i % 3) * 4, tail: 55 }],
    })),
  ];

  /* Junction dots at every T / corner intersection */
  const junctions: Pt[] = [
    ...inner,
    ...cross.map(pts => [pts[0], pts[pts.length - 1]]).flat(),
    { x: W * 0.50, y: oy }, { x: W * 0.50, y: oy + oh },
  ];

  return { tracks, junctions };
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let plan = buildPlan(W, H);

    const onResize = () => {
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = W; canvas.height = H;
      plan = buildPlan(W, H);
    };
    window.addEventListener("resize", onResize, { passive: true });

    function drawTrack(track: Track, alpha: number) {
      ctx.beginPath();
      ctx.strokeStyle = `rgba(201,169,110,${alpha})`;
      ctx.lineWidth = 0.65;
      ctx.lineCap = "square";
      ctx.lineJoin = "miter";
      ctx.moveTo(track.pts[0].x, track.pts[0].y);
      for (const s of track.segs) ctx.lineTo(s.to.x, s.to.y);
      ctx.stroke();
    }

    function drawParticle(track: Track, pk: Particle) {
      const d = pk.pos;
      if (d + pk.tail < 0) return;

      const clamped = Math.max(0, Math.min(track.totalLen, d));

      /* Tail — quadratic opacity fade */
      const STEPS = 48;
      for (let i = 0; i <= STEPS; i++) {
        const t = i / STEPS;
        const dd = d - (1 - t) * pk.tail;
        const dClamped = track.loop
          ? ((dd % track.totalLen) + track.totalLen) % track.totalLen
          : dd;
        if (!track.loop && (dClamped < 0 || dClamped > track.totalLen)) continue;
        const p = posAt(track.segs, track.totalLen, dClamped);
        ctx.beginPath();
        ctx.fillStyle = `rgba(201,169,110,${t * t * 0.48})`;
        ctx.arc(p.x, p.y, 0.85, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Head halo */
      const head = posAt(track.segs, track.totalLen, clamped);
      const g = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 10);
      g.addColorStop(0, "rgba(255,242,205,0.88)");
      g.addColorStop(0.4, "rgba(201,169,110,0.32)");
      g.addColorStop(1, "rgba(201,169,110,0)");
      ctx.beginPath();
      ctx.fillStyle = g;
      ctx.arc(head.x, head.y, 10, 0, Math.PI * 2);
      ctx.fill();

      /* Head core */
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,248,225,0.96)";
      ctx.arc(head.x, head.y, 2, 0, Math.PI * 2);
      ctx.fill();
    }

    let lastT = 0;
    let raf: number;

    function draw(now: number) {
      const dt = Math.min((now - lastT) / 1000, 0.05);
      lastT = now;
      ctx.clearRect(0, 0, W, H);

      /* Tracks */
      for (const { track, alpha } of plan.tracks) drawTrack(track, alpha);

      /* Junction solder-pad dots */
      for (const j of plan.junctions) {
        ctx.beginPath();
        ctx.fillStyle = "rgba(201,169,110,0.11)";
        ctx.arc(j.x, j.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }

      /* Particles */
      for (const { track, particles } of plan.tracks) {
        for (const pk of particles) {
          if (track.loop) {
            pk.pos = (pk.pos + dt * pk.speed + track.totalLen) % track.totalLen;
          } else {
            pk.pos += dt * pk.speed;
            if (pk.pos > track.totalLen + pk.tail) pk.pos = -(pk.tail + 10);
          }
          drawParticle(track, pk);
        }
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame((t) => { lastT = t; draw(t); });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 2, mixBlendMode: "screen" }}
    />
  );
}
