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
  drawingImages: DrawingImage[];
  featured: boolean;
  order: number;
};

export type DrawingImage = {
  src: string;
  label: string;
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
    heroImage: "/images/gita/02_modern_luxury_living_room_design.png",
    galleryImages: [
      "/images/gita/01_cozy_minimalist_living_room_design.png",
      "/images/gita/02_modern_luxury_living_room_design.png",
      "/images/gita/03_cozy_modern_living_room_ambiance.png",
      "/images/gita/06_modern_minimalist_living_room_with_chic_accents.png",
      "/images/gita/07_modern_minimalist_living_room_design.png",
      "/images/gita/08_modern_minimalist_living_room_design.png",
      "/images/gita/09_modern_minimalist_living_room_design_bright.png",
      "/images/gita/10_modern_luxurious_living_room_with_city_view.png",
      "/images/gita/modern_living_room_with_city_view.png",
      "/images/gita/modern_luxury_living_room_design.png",
      "/images/gita/modern_minimalist_lounge_with_abstract_accents.png",
      "/images/gita/03_serene_modern_temple_altar_design.png",
      "/images/gita/04_symmetrical_modern_temple_shrine_interior.png",
      "/images/gita/02_sleek_modern_home_bar_interior.png",
      "/images/gita/04_sleek_modern_home_bar_with_marble_accents.png",
      "/images/gita/05_modern_chic_home_bar_and_coffee_station.png",
      "/images/gita/elegant_modern_bar_with_glowing_accents.png",
      "/images/gita/luxurious_modern_dining_and_bar_area.png",
      "/images/gita/05_modern_luxury_dining_room_ambiance.png",
      "/images/gita/modern_luxury_dining_room_design.png",
      "/images/gita/06_modern_shelving_with_marble_and_art_pieces.png",
      "/images/gita/07_warm_minimalist_corner_with_pendant_light.png",
      "/images/gita/08_modern_marble_still_life_vignette.png",
      "/images/gita/09_modern_entryway_with_sculptural_details.png",
      "/images/gita/10_modern_decor_on_a_marble_backdrop.png",
      "/images/gita/modern_shelving_with_art_and_plants.png",
      "/images/gita/modern_minimalist_wooden_interior_vignette.png",
      "/images/gita/elegant_reading_nook_with_warm_lighting.png",
      "/images/gita/01_city_view_from_modern_balcony.png",
      "/images/gita/modern_balcony_with_city_skyline_view.png",
      "/images/gita/eba51249-1aef-42d1-8544-072ec3103e85.jpg",
      "/images/gita/f93c36f4-cfae-4071-a4ff-cf3c240b0420.jpg",
    ],
    drawingImages: [
      { src: "/images/gita/drawings/master-bedroom-layout.jpg", label: "Master Bedroom Layout" },
      { src: "/images/gita/drawings/daughters-bedroom-layout.jpg", label: "Daughter's Bedroom Layout" },
      { src: "/images/gita/drawings/sons-bedroom-layout.jpg", label: "Son's Bedroom Layout" },
      { src: "/images/gita/drawings/parents-bedroom-layout.jpg", label: "Parents' Bedroom Layout" },
      { src: "/images/gita/drawings/bar-unit-elevation.jpg", label: "Bar Unit Elevation" },
      { src: "/images/gita/drawings/bathroom-elevations-p1.jpg", label: "Bathroom Elevations — 1" },
      { src: "/images/gita/drawings/bathroom-elevations-p2.jpg", label: "Bathroom Elevations — 2" },
      { src: "/images/gita/drawings/bathroom-elevations-p3.jpg", label: "Bathroom Elevations — 3" },
      { src: "/images/gita/drawings/bathroom-elevations-p4.jpg", label: "Bathroom Elevations — 4" },
      { src: "/images/gita/drawings/bathroom-elevations-p5.jpg", label: "Bathroom Elevations — 5" },
      { src: "/images/gita/drawings/bathroom-elevations-p6.jpg", label: "Bathroom Elevations — 6" },
      { src: "/images/gita/drawings/bathroom-elevations-p7.jpg", label: "Bathroom Elevations — 7" },
      { src: "/images/gita/drawings/daughters-study-unit.jpg", label: "Daughter's Study Unit" },
      { src: "/images/gita/drawings/sons-study-unit.jpg", label: "Son's Study Unit" },
      { src: "/images/gita/drawings/mandir.jpg", label: "Mandir" },
      { src: "/images/gita/drawings/master-bathroom.jpg", label: "Master Bathroom" },
      { src: "/images/gita/drawings/daughters-bathroom.jpg", label: "Daughter's Bathroom" },
      { src: "/images/gita/drawings/sons-bathroom.jpg", label: "Son's Bathroom" },
      { src: "/images/gita/drawings/powder-room.jpg", label: "Powder Room" },
    ],
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
    heroImage: "/images/karwa/09_minimalist_luxury_bedroom_design.png",
    galleryImages: [
      "/images/karwa/09_minimalist_luxury_bedroom_design.png",
      "/images/karwa/01_elegant_modern_interior_with_vintage_accents.png",
      "/images/karwa/02_minimalist_spa_bathroom_with_warm_lighting.png",
      "/images/karwa/03_cozy_corner_with_built_in_shelving.png",
      "/images/karwa/04_modern_bathroom_with_city_skyline_view.png",
      "/images/karwa/05_elegant_modern_bathroom_with_terracotta_accents.png",
      "/images/karwa/06_modern_bathroom_with_cozy_lighting.png",
      "/images/karwa/07_warm_glow_and_rippling_reflections.png",
      "/images/karwa/08_modern_minimalist_shower_with_mosaic_tiles.png",
      "/images/karwa/10_elegant_minimalist_corner_with_wall_clock.png",
    ],
    drawingImages: [
      { src: "/images/karwa/drawings/final-renders-p1.jpg", label: "Final Renders — 1" },
      { src: "/images/karwa/drawings/final-renders-p2.jpg", label: "Final Renders — 2" },
      { src: "/images/karwa/drawings/final-renders-p3.jpg", label: "Final Renders — 3" },
      { src: "/images/karwa/drawings/final-renders-p4.jpg", label: "Final Renders — 4" },
      { src: "/images/karwa/drawings/final-renders-p5.jpg", label: "Final Renders — 5" },
      { src: "/images/karwa/drawings/final-renders-p6.jpg", label: "Final Renders — 6" },
      { src: "/images/karwa/drawings/final-renders-p7.jpg", label: "Final Renders — 7" },
      { src: "/images/karwa/drawings/final-renders-p8.jpg", label: "Final Renders — 8" },
      { src: "/images/karwa/drawings/final-renders-p9.jpg", label: "Final Renders — 9" },
      { src: "/images/karwa/drawings/final-renders-p10.jpg", label: "Final Renders — 10" },
      { src: "/images/karwa/drawings/final-renders-p11.jpg", label: "Final Renders — 11" },
      { src: "/images/karwa/drawings/final-renders-p12.jpg", label: "Final Renders — 12" },
      { src: "/images/karwa/drawings/final-renders-p13.jpg", label: "Final Renders — 13" },
      { src: "/images/karwa/drawings/final-renders-p14.jpg", label: "Final Renders — 14" },
      { src: "/images/karwa/drawings/final-renders-p15.jpg", label: "Final Renders — 15" },
      { src: "/images/karwa/drawings/final-renders-p16.jpg", label: "Final Renders — 16" },
      { src: "/images/karwa/drawings/final-renders-p17.jpg", label: "Final Renders — 17" },
      { src: "/images/karwa/drawings/final-renders-p18.jpg", label: "Final Renders — 18" },
      { src: "/images/karwa/drawings/final-renders-p19.jpg", label: "Final Renders — 19" },
      { src: "/images/karwa/drawings/final-renders-p20.jpg", label: "Final Renders — 20" },
      { src: "/images/karwa/drawings/final-renders-p21.jpg", label: "Final Renders — 21" },
      { src: "/images/karwa/drawings/final-renders-p22.jpg", label: "Final Renders — 22" },
      { src: "/images/karwa/drawings/final-renders-p23.jpg", label: "Final Renders — 23" },
      { src: "/images/karwa/drawings/final-renders-p24.jpg", label: "Final Renders — 24" },
      { src: "/images/karwa/drawings/final-renders-p25.jpg", label: "Final Renders — 25" },
      { src: "/images/karwa/drawings/final-renders-p26.jpg", label: "Final Renders — 26" },
      { src: "/images/karwa/drawings/final-renders-p27.jpg", label: "Final Renders — 27" },
      { src: "/images/karwa/drawings/final-renders-p28.jpg", label: "Final Renders — 28" },
      { src: "/images/karwa/drawings/bed-designs-p1.jpg", label: "Bed Designs — 1" },
      { src: "/images/karwa/drawings/bed-designs-p2.jpg", label: "Bed Designs — 2" },
      { src: "/images/karwa/drawings/bed-designs-p3.jpg", label: "Bed Designs — 3" },
      { src: "/images/karwa/drawings/bed-designs-p4.jpg", label: "Bed Designs — 4" },
      { src: "/images/karwa/drawings/bed-designs-p5.jpg", label: "Bed Designs — 5" },
      { src: "/images/karwa/drawings/bed-designs-p6.jpg", label: "Bed Designs — 6" },
      { src: "/images/karwa/drawings/fancy-lights-p1.jpg", label: "Fancy Lights — 1" },
      { src: "/images/karwa/drawings/fancy-lights-p2.jpg", label: "Fancy Lights — 2" },
      { src: "/images/karwa/drawings/fancy-lights-p3.jpg", label: "Fancy Lights — 3" },
      { src: "/images/karwa/drawings/fabric-selection.jpg", label: "Fabric Selection" },
    ],
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
      "The Dave Residence at Arkade Aura, Santacruz was managed end-to-end — from the first client meeting through final handover. The design brief called for a fresh, liveable home that felt elevated without being formal. The response: a white modular kitchen with warm brass hardware, a dining area framed by a classic panel-moulded wall and pendant lighting, and a living room that balances comfort with restraint. The daughter's room introduces a fresh green accent palette and natural wood flooring to reflect her personality, while the master bedroom and parent's suite prioritise calm and storage efficiency.",
    heroImage: "/images/dave/_DSC6777.JPG.jpeg",
    galleryImages: [
      "/images/dave/_DSC6777.JPG.jpeg",
      "/images/dave/_DSC6767.JPG.jpeg",
      "/images/dave/_DSC6768.JPG.jpeg",
      "/images/dave/DSC_6776.JPG.jpeg",
      "/images/dave/_DSC6778.JPG.jpeg",
      "/images/dave/_DSC6785.JPG.jpeg",
      "/images/dave/_DSC6786.JPG.jpeg",
      "/images/dave/_DSC6923.JPG.jpeg",
      "/images/dave/_DSC6924.JPG.jpeg",
      "/images/dave/_DSC6925.JPG.jpeg",
      "/images/dave/_DSC6926.JPG.jpeg",
      "/images/dave/_DSC6927.JPG.jpeg",
      "/images/dave/426dc132-789f-4d59-8444-4ff07f0f97d1.jpg",
    ],
    drawingImages: [
      { src: "/images/dave/drawings/final-floor-plan.jpg", label: "Floor Plan" },
      { src: "/images/dave/drawings/living-room.jpg", label: "Living Room" },
      { src: "/images/dave/drawings/master-bedroom.jpg", label: "Master Bedroom" },
      { src: "/images/dave/drawings/parents-bedroom.jpg", label: "Parents' Bedroom" },
      { src: "/images/dave/drawings/daughters-bedroom.jpg", label: "Daughter's Bedroom" },
      { src: "/images/dave/drawings/master-bathroom.jpg", label: "Master Bathroom" },
      { src: "/images/dave/drawings/mothers-bathroom.jpg", label: "Mother's Bathroom" },
      { src: "/images/dave/drawings/daughters-bathroom.jpg", label: "Daughter's Bathroom" },
      { src: "/images/dave/drawings/crockery-unit.jpg", label: "Crockery Unit" },
      { src: "/images/dave/drawings/fabric-selection.jpg", label: "Fabric Selection" },
    ],
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
      "The Dalamal Office at Marine Lines presented an inherent spatial challenge: creating an energising, professional work environment in a below-grade space with no access to natural daylight. The design response focused on perception rather than compensation. A skylight-inspired ceiling concept — using layered lighting and ceiling articulation — creates the illusion of height and openness. Black stone and brick cladding at the reception grounds the space with texture and materiality, while a carefully zoned plan separates the reception and waiting area from private cabins, conference room, and an open workstation grid serving over 30 desks.",
    heroImage: "/images/dalamal/drawings/reception-area.jpg",
    galleryImages: [],
    drawingImages: [
      { src: "/images/dalamal/drawings/master-plan.jpg", label: "Master Plan" },
      { src: "/images/dalamal/drawings/reception-area.jpg", label: "Reception Area" },
      { src: "/images/dalamal/drawings/conference-room.jpg", label: "Conference Room" },
      { src: "/images/dalamal/drawings/workstation.jpg", label: "Workstation" },
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
      "/images/thomas/2eb6699d-f4b9-4fea-a548-e23e46d4f13e.jpg",
      "/images/thomas/04bc5b37-fae0-438c-80c6-20b27daada1d.jpg",
      "/images/thomas/539e9617-0b43-4714-8528-82ccec10de6e.jpg",
      "/images/thomas/53a295d0-94db-4c72-958e-629d87e5a035.jpg",
      "/images/thomas/5c26ac08-605b-45fb-b2be-9574246aa236.jpg",
      "/images/thomas/738e070e-7b23-40c5-8a37-d3b496f82246.jpg",
      "/images/thomas/fbac55ba-635a-47e5-aa11-674fadbc3e45.jpg",
    ],
    drawingImages: [
      { src: "/images/thomas/drawings/master-bedroom-elevation.jpg", label: "Master Bedroom Elevation" },
      { src: "/images/thomas/drawings/master-wardrobe.jpg", label: "Master Wardrobe" },
      { src: "/images/thomas/drawings/master-bathroom.jpg", label: "Master Bathroom" },
      { src: "/images/thomas/drawings/bar-unit.jpg", label: "Bar Unit" },
      { src: "/images/thomas/drawings/his-wardrobe.jpg", label: "His Wardrobe" },
      { src: "/images/thomas/drawings/his-bathroom.jpg", label: "His Bathroom" },
      { src: "/images/thomas/drawings/his-library.jpg", label: "His Library" },
      { src: "/images/thomas/drawings/her-wardrobe-and-study.jpg", label: "Her Wardrobe & Study" },
      { src: "/images/thomas/drawings/her-bathroom.jpg", label: "Her Bathroom" },
    ],
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
      "The Sonia Agarwal Residence in Juhu was a targeted renovation focused on two spaces: the daughter's bedroom and the den area. The centrepiece of the project is a floor-to-ceiling wood-panelled feature wall in the living room — a classical composition of framed panels and hand-carved decorative mouldings in warm honey-toned wood, paired with a bespoke grey sectional sofa. The result is a room that reads as both grand and intimately personal.",
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
    heroImage: "/images/burzin/drawings/floor-plan.jpg",
    galleryImages: [],
    drawingImages: [
      { src: "/images/burzin/drawings/floor-plan.jpg", label: "Floor Plan" },
      { src: "/images/burzin/drawings/elevations.jpg", label: "Elevations" },
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
      "The Alyza Residence project at Raheja Towers, Lower Parel was a focused furniture design commission: take the client's curated visual references and translate them into a buildable, dimensioned set of custom living room furniture. The process involved detailed measurement, layout planning within the space, and the production of precise working drawings ready for fabrication.",
    heroImage: "/images/alyza/drawings/furniture-layout.jpg",
    galleryImages: [],
    drawingImages: [
      { src: "/images/alyza/drawings/furniture-layout.jpg", label: "Furniture Layout" },
    ],
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
