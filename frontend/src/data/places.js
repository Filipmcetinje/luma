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
    title: "Kotor Fortress",
    location: "Kotor",
    category: "Mountain",
    image: kotorFortressImage,
    description:
      "A dramatic viewpoint above Kotor with old stone paths, mountain views, and beautiful light over the bay.",
    bestTime: "Early morning or golden hour",
  },
  {
    id: 2,
    title: "Perast",
    location: "Bay of Kotor",
    category: "Coast",
    image: perastImage,
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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-3.jpg",
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
    ],
    description:
      "A historic coastal town with stone walls, narrow streets, beaches, and dramatic views across the Adriatic Sea.",
    bestTime: "Early morning or sunset",
  },
];

export default places;
