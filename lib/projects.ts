export type Project = {
  slug: string;
  name: string;
  client: string;
  category: "Residential" | "Commercial" | "Renovation" | "Furniture Design";
  type: string;
  location: string;
  building: string;
  year: string;
  status: "Completed" | "In Progress" | "Design Phase";
  scope: string[];
  concept: string;
  story: string;
  heroImage: string;
  galleryImages: string[];
  drawingImages: string[];
  featured: boolean;
  order: number;
};

const projects: Project[] = [
  {
    slug: "gita-residence",
    name: "Gita Residence",
    client: "Gita Residence",
    category: "Residential",
    type: "4BHK Residence",
    location: "Bandra",
    building: "Evergreen Raheja",
    year: "Needs Clarification",
    status: "Completed",
    scope: [
      "Complete Interior Design & Execution",
      "Space Planning",
      "Material Selection",
      "Site Coordination",
      "Vendor Coordination",
      "Site Supervision",
      "Final Execution",
    ],
    concept:
      "A modern family home designed with contemporary textures, clean detailing, and deeply personalised spaces. The design language was tailored to reflect the client's preferences while maintaining functionality and comfort across all four bedrooms.",
    story:
      "The Gita Residence in Bandra is a study in layered contemporary living. A curved bouclé sofa anchors the living room against a dramatic bookmatched marble bookcase, while the mandir — backlit in glowing onyx with a hand-painted chinoiserie ceiling panel — becomes the spiritual heart of the home. A curated terracotta tile art installation adds cultural warmth to the formal spaces. Each bedroom was individually tailored: the master suite features bespoke joinery and a dressing area, while the children's rooms balance personality with practicality. The project was delivered end-to-end, from concept development through contractor coordination and final handover.",
    heroImage: "/images/gita/57dc177d-3eb0-4b87-8148-33b3380aaa2a.jpg",
    galleryImages: [
      "/images/gita/4bd4102e-851d-48a7-8f6d-ce92df999c1e.jpg",
      "/images/gita/0f7093f1-6081-472c-828c-ebc458b0c2e7.jpg",
      "/images/gita/3cbc7b9e-fbc0-47c6-ac72-d3ee8cceb2c5.jpg",
      "/images/gita/4db604ec-c1aa-4839-bb99-e30d93fe11dc.jpg",
      "/images/gita/54a71aa1-7938-4a9e-a049-6b200c30356b.jpg",
      "/images/gita/55471595-be1f-450d-8a4a-e797cbd03451.jpg",
      "/images/gita/61200854-3ba4-43ba-bacf-efbd8c7cadb8.jpg",
      "/images/gita/67a3ad5d-1899-44ec-8764-9cdc808ba5bf.jpg",
      "/images/gita/78f22306-9b0f-46c2-a123-621b37ea9d78.jpg",
      "/images/gita/8bfc6a1a-581e-41a0-9406-425d1da221fe.jpg",
      "/images/gita/9854f0e9-37c8-464d-8928-2726d64c16dc.jpg",
      "/images/gita/a84c2e4a-595a-4024-9879-e95ff2d46c61.jpg",
      "/images/gita/ad2ff423-3f70-43b5-b041-c0f2d5eb25ab.jpg",
      "/images/gita/b7282c09-803f-4928-89ed-0067ed32024a.jpg",
      "/images/gita/bfa68d29-df60-471e-8a5c-ee724fd41a41.jpg",
      "/images/gita/c77ba17f-46ca-4d08-ba2a-82295fd64ba4.jpg",
      "/images/gita/dfb2f41b-303a-47bf-b2da-241aa03aeae2.jpg",
      "/images/gita/e3e4e37d-848d-4d78-975f-b4f96a613bcd.jpg",
      "/images/gita/eba51249-1aef-42d1-8544-072ec3103e85.jpg",
      "/images/gita/f93c36f4-cfae-4071-a4ff-cf3c240b0420.jpg",
    ],
    drawingImages: [],
    featured: true,
    order: 1,
  },
  {
    slug: "karwa-residence",
    name: "Karwa Residence",
    client: "Karwa Residence",
    category: "Residential",
    type: "10BHK Luxury Duplex",
    location: "Prabhadevi",
    building: "Rustomjee Crown",
    year: "Needs Clarification",
    status: "Completed",
    scope: [
      "Space Planning Support",
      "Elevation Design",
      "Fabric Selection",
      "Hardware Selection",
      "Lighting Selection",
      "Design Development",
    ],
    concept:
      "A luxury duplex residence designed to balance contemporary living with classical detailing — where modern modular functionality meets timeless mouldings, bespoke lighting, and curated material choices across ten bedrooms spanning two floors.",
    story:
      "The Karwa Residence at Rustomjee Crown, Prabhadevi presented a singular design challenge: create a cohesive identity across two floors of a 10BHK duplex, ensuring equal design value for the client's two sons while preserving the grandeur expected of the address. The design response weaves classical European detailing — elaborate crown mouldings, carved decorative appliqués, ornate chandeliers — with the efficiency of contemporary modular systems. The master bedroom takes centre stage with a show-stopping window view of the Mumbai skyline. Bespoke bathroom vanities in warm stone and sculptured tile walls elevate the private spaces, while the double-height foyer and living areas on both floors maintain visual consistency throughout.",
    heroImage: "/images/karwa/26247b2f-3562-4571-b08b-bfeb55e2fb38.jpg",
    galleryImages: [
      "/images/karwa/6680d803-c931-442b-879a-d529931c2de6.jpg",
      "/images/karwa/000145d8-6123-4140-bac7-bf7f22c47f91.jpg",
      "/images/karwa/08432ad5-051c-41ea-93aa-512e803a0442.jpg",
      "/images/karwa/0928f110-d73e-46e6-a21f-f031e0387364.jpg",
      "/images/karwa/26452e0b-5136-4ce2-90ae-e4e9ee2d4b10.jpg",
      "/images/karwa/2e69ff60-637e-4ff7-af78-ac7f95e376f3.jpg",
      "/images/karwa/2fe3859c-a689-497e-97ca-57233b366488.jpg",
      "/images/karwa/325958f7-e78a-47ed-85c0-bfa2d8398c07.jpg",
      "/images/karwa/37e6bc1f-9d60-44be-a086-3fb0b4bdd18b.jpg",
      "/images/karwa/502fd813-c718-4a61-a2cb-3abcacbdd57c.jpg",
      "/images/karwa/525157e1-b9d4-4fd1-b313-3c335f59fbc9.jpg",
      "/images/karwa/527b91fb-799c-4a9a-b972-492e3771a3b5.jpg",
      "/images/karwa/54b40eb3-ed90-4df4-b4d6-e95fcaa91752.jpg",
      "/images/karwa/591cdd41-16b9-489e-a645-695d678b6c02.jpg",
      "/images/karwa/59650c19-80b2-4a01-9f66-6eea8537f02d.jpg",
      "/images/karwa/renders-1.jpg",
    ],
    drawingImages: ["/images/karwa/renders-1.jpg"],
    featured: true,
    order: 2,
  },
  {
    slug: "dave-residence",
    name: "Dave Residence",
    client: "Dave Residence",
    category: "Residential",
    type: "3BHK Residence",
    location: "Santacruz",
    building: "Arkade Aura",
    year: "2025",
    status: "Completed",
    scope: [
      "Client Meetings & Design Planning",
      "Material Selection",
      "Vendor & Contractor Coordination",
      "Site Supervision",
      "Procurement Assistance",
      "Budget & Billing Coordination",
      "Final Styling & Handover",
    ],
    concept:
      "A clean, warm residential interior where white and natural wood create a bright, lifestyle-oriented home — brass accents and moulded panelling lending a quiet elegance throughout.",
    story:
      "The Dave Residence at Arkade Aura, Santacruz was managed end-to-end — from the first client meeting through final handover. The design brief called for a fresh, liveable home that felt elevated without being formal. The response: a white modular kitchen with warm brass hardware, a dining area framed by a classic panel-moulded wall and pendant lighting, and a living room that balances comfort with restraint. The daughter's room introduces a fresh green accent palette and natural wood flooring to reflect her personality, while the master bedroom and parent's suite prioritise calm and storage efficiency. Continuous coordination between clients, contractors, and vendors ensured design intent was maintained throughout execution.",
    heroImage: "/images/dave/_DSC6777.JPG.jpeg",
    galleryImages: [
      "/images/dave/_DSC6767.JPG.jpeg",
      "/images/dave/_DSC6768.JPG.jpeg",
      "/images/dave/_DSC6776.JPG.jpeg",
      "/images/dave/_DSC6777.JPG.jpeg",
      "/images/dave/_DSC6778.JPG.jpeg",
      "/images/dave/_DSC6785.JPG.jpeg",
      "/images/dave/_DSC6786.JPG.jpeg",
      "/images/dave/_DSC6923.JPG.jpeg",
      "/images/dave/_DSC6924.JPG.jpeg",
      "/images/dave/_DSC6925.JPG.jpeg",
      "/images/dave/_DSC6926.JPG.jpeg",
      "/images/dave/_DSC6927.JPG.jpeg",
    ],
    drawingImages: [],
    featured: true,
    order: 3,
  },
  {
    slug: "dalamal-office",
    name: "Dalamal Office",
    client: "Dalamal Office",
    category: "Commercial",
    type: "Commercial Office Interior",
    location: "Marine Lines",
    building: "Dalamal Tower",
    year: "Needs Clarification",
    status: "Completed",
    scope: [
      "Space Planning",
      "Reception Design",
      "Workstation Layout",
      "Cabin & Conference Design",
      "Ceiling & Lighting Design",
      "Material Selection",
    ],
    concept:
      "A professional workspace designed to feel open and contemporary despite its underground setting — strategic ceiling treatments, material choices, and lighting shift the perception from basement to modern office.",
    story:
      "The Dalamal Office at Marine Lines presented an inherent spatial challenge: creating an energising, professional work environment in a below-grade space with no access to natural daylight. The design response focused on perception rather than compensation. A skylight-inspired ceiling concept — using layered lighting and ceiling articulation — creates the illusion of height and openness. Black stone and brick cladding at the reception grounds the space with texture and materiality, while a carefully zoned plan separates the reception and waiting area from private cabins, conference room, and an open workstation grid serving over 30 desks. The director's suite and bathrooms were given considered detailing to match the overall quality standard.",
    heroImage: "/images/dalamal/reception.jpg",
    galleryImages: [
      "/images/dalamal/reception.jpg",
      "/images/dalamal/master-plan.jpg",
      "/images/dalamal/conference.jpg",
    ],
    drawingImages: [
      "/images/dalamal/master-plan.jpg",
      "/images/dalamal/reception.jpg",
      "/images/dalamal/conference.jpg",
    ],
    featured: false,
    order: 4,
  },
  {
    slug: "thomas-residence",
    name: "Thomas Residence",
    client: "Thomas Residence",
    category: "Residential",
    type: "3BHK Residence",
    location: "Mahalakshmi",
    building: "Prestige Jasdan",
    year: "Needs Clarification",
    status: "In Progress",
    scope: [
      "Space Planning",
      "Master Bedroom Design",
      "His & Her Study Rooms",
      "Wardrobe Detailing",
      "Kitchen Planning",
      "Bar Unit Design",
      "Furniture Detailing",
    ],
    concept:
      "A semi-furnished residence designed for a couple — each space individually tailored to their lifestyles, with dedicated study rooms, a bespoke bar unit, and customised wardrobe solutions throughout.",
    story:
      "The Thomas Residence at Prestige Jasdan, Mahalakshmi is a considered home for two — where shared spaces open into deeply personal retreats. The design prioritised equal attention for both clients: her wardrobe and study were developed as a cohesive suite, while his library and wardrobe were designed with different character and detail. The master bedroom ties the two sensibilities together. A custom bar unit introduces warmth and social living into the home, while the kitchen planning maximises storage within the compact configuration. The project is currently in execution.",
    heroImage: "/images/thomas/2eb6699d-f4b9-4fea-a548-e23e46d4f13e.jpg",
    galleryImages: [
      "/images/thomas/539e9617-0b43-4714-8528-82ccec10de6e.jpg",
      "/images/thomas/53a295d0-94db-4c72-958e-629d87e5a035.jpg",
      "/images/thomas/5c26ac08-605b-45fb-b2be-9574246aa236.jpg",
      "/images/thomas/738e070e-7b23-40c5-8a37-d3b496f82246.jpg",
    ],
    drawingImages: [],
    featured: false,
    order: 5,
  },
  {
    slug: "sonia-residence",
    name: "Sonia Agarwal Residence",
    client: "Sonia Agarwal Residence",
    category: "Renovation",
    type: "Residential Renovation",
    location: "Juhu",
    building: "",
    year: "Needs Clarification",
    status: "Completed",
    scope: [
      "Custom Furniture Design",
      "Wall Detailing",
      "Daughter's Bedroom Design",
      "Den Area Renovation",
    ],
    concept:
      "A renovation centred on custom craftsmanship — a richly panelled feature wall with hand-carved decorative appliqués transforms the den into a statement living space.",
    story:
      "The Sonia Agarwal Residence in Juhu was a targeted renovation focused on two spaces: the daughter's bedroom and the den area. The centrepiece of the project is a floor-to-ceiling wood-panelled feature wall in the living room — a classical composition of framed panels and hand-carved decorative mouldings in warm honey-toned wood, paired with a bespoke grey sectional sofa. The result is a room that reads as both grand and intimately personal, drawing from European classical references while remaining comfortably residential.",
    heroImage: "/images/sonia/25d126ff-b219-4e30-892d-4d4e5f163772.jpg",
    galleryImages: [
      "/images/sonia/25d126ff-b219-4e30-892d-4d4e5f163772.jpg",
      "/images/sonia/7d8a1b8b-ee10-4f21-ab4c-d40fef1d1dce.jpg",
    ],
    drawingImages: [],
    featured: false,
    order: 6,
  },
  {
    slug: "burzin-duplex",
    name: "Burzin Duplex",
    client: "Burzin Duplex",
    category: "Residential",
    type: "Duplex Residence",
    location: "Colaba",
    building: "Cusrow Baug",
    year: "Needs Clarification",
    status: "Design Phase",
    scope: [
      "Space Planning",
      "Mezzanine Floor Design",
      "Elevation Design",
      "Material & Wallpaper Selection",
      "Furniture Layout Planning",
      "Bar Counter Design",
    ],
    concept:
      "A vintage-inspired duplex that embraces texture and character — 'Faux Caning' wallpaper, mezzanine living, and curated furnishings create a home with the warmth of a collector's residence.",
    story:
      "The Burzin Duplex at Cusrow Baug, Colaba — one of Mumbai's most storied heritage enclaves — inspired a design approach rooted in vintage character and crafted detail. The mezzanine floor configuration was embraced as a design asset, creating distinct spatial zones across levels while maintaining visual connectivity. 'Faux Caning' wallpaper in Umber tones establishes the material language, complemented by a carefully planned bar counter and furnishings that reference mid-century and artisanal aesthetics. The project is currently in design development.",
    heroImage: "/images/burzin/floor-plan.jpg",
    galleryImages: [
      "/images/burzin/floor-plan.jpg",
      "/images/burzin/elevations.jpg",
    ],
    drawingImages: [
      "/images/burzin/floor-plan.jpg",
      "/images/burzin/elevations.jpg",
    ],
    featured: false,
    order: 7,
  },
  {
    slug: "alyza-residence",
    name: "Alyza Residence",
    client: "Alyza Residence",
    category: "Furniture Design",
    type: "Custom Furniture Design",
    location: "Lower Parel",
    building: "Raheja Towers",
    year: "Needs Clarification",
    status: "Completed",
    scope: [
      "Custom Furniture Design",
      "Production Drawing",
      "Living Room Furniture Layout",
    ],
    concept:
      "A Pinterest-inspired custom furniture brief translated into precise production drawings — demonstrating the full journey from client vision to manufacturable design.",
    story:
      "The Alyza Residence project at Raheja Towers, Lower Parel was a focused furniture design commission: take the client's curated visual references and translate them into a buildable, dimensioned set of custom living room furniture. The process involved detailed measurement, layout planning within the space, and the production of precise working drawings ready for fabrication. The result demonstrates the discipline of furniture design as its own craft — where every dimension, proportion, and joint detail carries consequence.",
    heroImage: "/images/alyza/furniture.jpg",
    galleryImages: ["/images/alyza/furniture.jpg"],
    drawingImages: ["/images/alyza/furniture.jpg"],
    featured: false,
    order: 8,
  },
];

export default projects;

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return projects.sort((a, b) => a.order - b.order);
}
