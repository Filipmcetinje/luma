import kotorFortressImage from "../assets/places/kotor-fortress.jpg";
import perastImage from "../assets/places/perast.jpg";
import lovcenImage from "../assets/places/lovcen-national-park.jpg";

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
];

export default places;
