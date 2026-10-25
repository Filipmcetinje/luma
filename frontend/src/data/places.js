const kotorFortressImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/kotor-fortress.jpg";
const perastImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-1.png";
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
      {
        slug: "orahovac",
        title: "Orahovac",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/orahovac.png",
        description:
          "Orahovac is a small, quiet village on the Bay of Kotor—a place I recommend for resting and slowing down. Spend unhurried days by the water, enjoy the mountain views, and settle into the gentle pace of life beside the bay.",
      },
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
        transportAdvice:
          "Planning a day in Kotor or Tivat? Before leaving your accommodation in Prčanj, confirm the nearest bus stop, direction, and return service with your host or Blue Line. Check whether your journey requires a connection. For a taxi, agree on the fare before setting off. If you bring a car, ask your accommodation about parking before arrival.",
        transportLinks: [
          {
            label: "Bus timetables — Kotor Municipality",
            url: "https://www.kotor.me/opstinakotor/javni-prevoz/",
          },
        ],
        accommodationOptions: [
          {
            name: "Hotel Libertas",
            description:
              "A hotel in an 18th-century stone house, with an outdoor pool, private beach, and sea-view rooms.",
            url: "https://www.montenegro.travel/en/plan-your-stay-in-montenegro/where-to-stay/489-libertas",
          },
          {
            name: "Djurovic Apartments",
            description:
              "Apartments with equipped kitchens and dining areas—a self-catering option to compare with hotel stays.",
            url: "https://djurovicapartmani.com/",
          },
          {
            name: "Villa Old Mariner",
            description:
              "A traditional stone villa in Prčanj. Explore its rooms and contact the property to check availability and prices for your dates.",
            url: "https://villaoldmariner.com/home",
          },
          {
            name: "Art Galathea",
            description:
              "A hotel in an 18th-century stone building near the beach, combining traditional décor with modern amenities.",
            url: "https://www.montenegro.travel/en/plan-your-stay-in-montenegro/where-to-stay/531-art-galathea",
          },
        ],
      },

      {
        slug: "stoliv",
        title: "Stoliv",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/stoliv.png",
        description:
          "Stoliv brings together two different sides of the bay: Donji Stoliv along the waterfront and Gornji Stoliv above it on the slopes of Vrmac. Explore the stone buildings beside the sea, or follow the uphill walking route through chestnut woodland to the upper village for views across the Bay of Kotor.",
        accommodationOptions: [
          {
            name: "Hyatt Regency Kotor Bay Resort",
            description:
              "A waterfront resort in Donji Stoliv, home to VRMAC Health & Wellbeing Retreat de’MAR.",
            url: "https://www.hyatt.com/hyatt-regency/en-US/tivrk-hyatt-regency-kotor-bay-resort",
          },
        ],
      },
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
