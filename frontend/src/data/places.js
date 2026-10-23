const kotorFortressImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/kotor-fortress.jpg";
const perastImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast.jpg";
const lovcenImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/lovcen-national-park.jpg";
const cetinjeImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/cetinje.jpg";
const tivatImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/tivat.jpg";
const budvaImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/budva.png";

const places = [
  {
    id: 1,
    title: "Kotor",
    location: "Kotor",
    category: "Mountain",
    image: kotorFortressImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-fortress.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-4.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-5.png",
    ],
    description:
      "A dramatic viewpoint above Kotor with old stone paths, mountain views, and beautiful light over the bay.",
    bestTime: "Early morning or golden hour",
    nearbyPlaces: [
      {
        slug: "dobrota",
        title: "Dobrota",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/dobrota.png",
        description:
          "Dobrota stretches along the Bay of Kotor beside Kotor, with waterfront views and historic stone buildings. Explore the shoreline, enjoy photography, and use the map to check the exact location of places you want to visit.",
        stayAdvice:
          "Before choosing accommodation in Dobrota, check its exact location on the map. If you plan to visit Kotor’s Old Town often, compare the walking route from each property. If you are driving, confirm parking availability and any extra charges with your host.",
        transportAdvice:
          "Plan your journeys from your accommodation’s exact address. Check the walking route to Kotor’s Old Town before deciding to walk. For local buses, confirm the nearest stop, direction, and current timetable with your host or the operator. If you choose a taxi, confirm the fare before travelling.",
        transportLinks: [
          {
            label: "Bus timetables — Kotor Municipality",
            url: "https://www.kotor.me/sekretarijat-za-investicije---nadle%C4%B9%C4%BEnosti/javni-prevoz/",
          },
        ],
        accommodationOptions: [
          {
            name: "Casa del Mare – Pietra",
            description:
              "Hotel near the waterfront, about 3 km from Kotor’s Old Town according to Montenegro’s official tourism listing.",
            url: "https://www.montenegro.travel/en/plan-your-stay-in-montenegro/where-to-stay/461-casa-del-mare-pietra",
          },
          {
            name: "Forza Mare",
            description:
              "A five-star boutique hotel on the waterfront, listed by Montenegro’s official tourism website.",
            url: "https://www.montenegro.travel/en/plan-your-stay-in-montenegro/where-to-stay/349-forza-mare",
          },
          {
            name: "Point of View — One-Bedroom Apartment",
            description:
              "A one-bedroom apartment with a kitchen. The host states that parking must be reserved.",
            url: "https://www.airbnb.com/rooms/653404430312412716",
          },
        ],
      },
      { slug: "ljuta", title: "Ljuta" },
      { slug: "muo", title: "Muo" },
      {
        slug: "prcanj",
        title: "Prčanj",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/prcanj.png",
        gallery: [
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/prcanj.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/prcanj-2.png",
        ],

        description:
          "Discover Prčanj, a seaside village shaped by generations of sailors and sea captains. The Church of the Nativity of Mary rises above its waterfront, connecting the village’s maritime past with its striking architecture. Bring your camera or sketchbook to explore the buildings and views across the Bay of Kotor.",
        stayAdvice:
          "Prčanj is a place I recommend for a quieter stay by the bay, with waterfront walks, swimming, and mountains rising above the sea. I especially love the feeling of mountain air meeting the Mediterranean. For confident cyclists, exploring toward Kotor or Tivat by bike is another way to enjoy the bay. Check your route and traffic conditions before setting off.",
      },

      { slug: "stoliv", title: "Stoliv" },
    ],
  },
  {
    id: 2,
    title: "Perast",
    location: "Bay of Kotor",
    category: "Coast",
    image: perastImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-1.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/perast.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/perast-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-3.png",
    ],
    description:
      "A peaceful coastal town with baroque architecture, calm water, islands, and strong inspiration for painters and photographers.",
    bestTime: "Morning light",
  },
  {
    id: 3,
    title: "Lovćen National Park",
    location: "Cetinje",
    category: "Nature",
    image: lovcenImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-national-park.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/view.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-wood.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-5.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-cave.jpg",
    ],
    description:
      "A mountain landscape with wide views, winding roads, and a powerful connection to Montenegrin history and culture.",
    bestTime: "Late afternoon",
  },
  {
    id: 4,
    title: "Cetinje",
    location: "Cetinje",
    category: "Art",
    image: cetinjeImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-scadar-lake.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/nikac.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/landscape2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-4.png",
    ],
    description:
      "Montenegro’s historic royal capital, filled with museums, old embassies, quiet streets, and cultural inspiration for artists and photographers.",
    bestTime: "Morning or late afternoon",
  },
  {
    id: 5,
    title: "Tivat",
    location: "Bay of Kotor",
    category: "Coast",
    image: tivatImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/tivat.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/tivat-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/tivat-3.jpg",
    ],
    description:
      "A modern coastal town with marinas, palm-lined promenades, mountain views, and peaceful waterfront scenes for photography and sketching.",
    bestTime: "Late afternoon or sunset",
  },
  {
    id: 6,
    title: "Budva",
    location: "Budva Riviera",
    category: "Coast",
    image: budvaImage,
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/red-beach2.png",
    ],
    description:
      "A historic coastal town with stone walls, narrow streets, beaches, and dramatic views across the Adriatic Sea.",
    bestTime: "Early morning or sunset",
  },
  {
    id: 7,
    title: "Scadar Lake",
    location: "Scadar Lake",
    category: "Nature",
    image:
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/scadar-lake.jpg",
    gallery: [
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/scadar-lake.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/scadar-lake-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/scadar-lake-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/scadar-lake-4.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/landscape3.png",
    ],
    description:
      "A wide lake landscape with mountain views, green wetlands, and winding waterways that invite photography and quiet exploration.",
    bestTime: "Early morning or late afternoon",
  },
];

export default places;
