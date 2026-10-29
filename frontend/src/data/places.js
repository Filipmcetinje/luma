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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor_-panoramic.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-fortress.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-4.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor-5.png",
    ],
    description:
      "Inside Kotor’s medieval walls, narrow streets open into lively squares surrounded by churches and stone palaces. St. Tryphon’s Cathedral, consecrated in 1166, is a landmark of a town shaped by centuries of seafaring, trade, and artistic exchange. Explore its sacred art, maritime history, and varied architecture, then pause in a café or climb above the rooftops for views of the bay. Kotor brings history and everyday life together in a compact town full of contrasts.",
    accommodationOptions: [
      {
        name: "Hotel Monte Cristo",
        description:
          "A boutique hotel in a restored historic building on the Maritime Museum square, inside Kotor’s Old Town.",
        url: "https://www.hotelmontecristo.me/",
      },
      {
        name: "Hotel Vardar",
        description:
          "A hotel on the Old Town’s main square, with Kotor’s historic streets and monuments close by.",
        url: "https://hotelvardar.com/en/",
      },
      {
        name: "Apartments Wine House Old Town",
        description:
          "Apartments in an old stone building inside the town walls, with kitchenettes for preparing your own meals.",
        url: "https://wine-house.me/Home.html",
      },
    ],

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
      {
        slug: "ljuta",
        title: "Ljuta",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/ljuta.png",
        description:
          "Ljuta is a small, quiet place I recommend for resting beside the bay. Its river emerges at the foot of the mountains and flows roughly 200 metres directly into the sea. After heavy rain, this short river becomes a powerful, rushing torrent—a striking contrast to the village’s peaceful atmosphere.",
        accommodationOptions: [
          {
            name: "Villa Nikčević",
            description:
              "Seafront rooms and apartments with a swimming pool, private beach, restaurant, and free parking.",
            url: "https://vilanikcevic.com/en/about-us/",
          },
          {
            name: "Villa Ljuta",
            description:
              "A whole four-bedroom villa with three bathrooms, a swimming pool, and a large terrace—an option for families travelling together.",
            url: "https://villaljuta.com/",
          },
          {
            name: "Porta del Mare I – Sea View",
            description:
              "A seafront studio in Ljuta with a kitchen, air conditioning, and free parking, listed on Airbnb.",
            url: "https://www.airbnb.com/rooms/35767536",
          },
        ],
      },
      {
        slug: "orahovac",
        title: "Orahovac",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/orahovac.png",
        description:
          "Orahovac is a small, quiet village on the Bay of Kotor—a place I recommend for resting and slowing down. Spend unhurried days by the water, enjoy the mountain views, and settle into the gentle pace of life beside the bay.",
        accommodationOptions: [
          {
            name: "Casa del Mare – Amfora",
            description:
              "A seaside hotel with balcony suites overlooking the bay or mountains, a restaurant, and a beach directly in front.",
            url: "https://casadelmare.me/cdm-amfora.html",
          },
          {
            name: "Villa Popović",
            description:
              "Studios and larger apartments with access to a shared garden overlooking the bay. Options include two-bedroom apartments.",
            url: "https://villapopovic.com/",
          },
          {
            name: "Kompas Apartments",
            description:
              "Self-catering apartments with equipped kitchens and sea-view balconies. The property lists one parking space per apartment.",
            url: "https://www.kompasapartmani.com/index",
          },
        ],
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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-4.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-1.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/perast.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/perast-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-3.png",
    ],
    description:
      "Perast’s stone palaces and waterfront churches tell the story of a small town shaped by seafaring. Generations of captains and merchants brought wealth and artistic influences home, leaving a remarkable collection of Baroque buildings along the bay. Walk beneath the bell tower of St. Nicholas, explore the town’s maritime past at the museum in Bujović Palace, or take a boat to Our Lady of the Rocks. With the islands of St. George and Our Lady of the Rocks facing its waterfront, Perast brings architecture, history, and the mountain-framed bay into one memorable view.",
    accommodationOptions: [
      {
        name: "Hotel Conte",
        description:
          "Rooms and apartments in restored stone houses and palaces, with a waterfront restaurant in the heart of Perast.",
        url: "https://hotelconte.me/",
      },
      {
        name: "Heritage Grand Perast",
        description:
          "A luxury hotel in a restored 18th-century palace beside the Bay of Kotor.",
        url: "https://hotelheritagegrandperast.com/",
      },
      {
        name: "Hotel Leon Coronato",
        description:
          "A waterfront hotel in Perast, offering rooms beside the bay.",
        url: "https://leoncoronato.com/rooms/",
      },
    ],
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
      "Lovćen is more than a mountain—it is a symbol of Montenegro’s identity, freedom, and enduring spirit. Rising above the Adriatic, it connects the coastal world of Kotor, Tivat, and Budva with the historic heartland around Cetinje. From the sea, its rocky slopes form a dramatic mountain backdrop; from its heights, the landscape opens towards the bay, coast, and inland mountains. For many Montenegrins, Lovćen holds a place comparable to Olympus for the Greeks. On Jezerski Vrh, the mausoleum of the ruler and poet Petar II Petrović Njegoš brings that connection between mountain, history, and national identity into focus.",
    accommodationOptions: [
      {
        name: "Hotel Monte Rosa",
        description:
          "A hotel at Ivanova Korita inside Lovćen National Park, with views of the surrounding mountains.",
        url: "https://www.booking.com/hotel/me/monte-rosa.html",
      },
      {
        name: "Hotel Ivanov Konak",
        description:
          "Rooms and studio apartments at Ivanova Korita, surrounded by beech forest, with a restaurant and nearby walking trails.",
        url: "https://www.ivanovakorita.com/en/hotel-ivanov-konak/",
      },
    ],
    nearbyPlaces: [
      {
        slug: "kotor-cable-car",
        title: "Kotor–Lovćen Cable Car",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/lovcen-cable-car.png",
        description:
          "Travel between the Adriatic coast and Lovćen’s mountain landscape, with wide views over the Bay of Kotor. The cable car connects Dub, near Kotor, with Kuk on Lovćen, and the ride takes around 11 minutes. You can start from either station, making it possible to experience the journey from the coast or the mountain. Check the official website for operating times, weather updates, and ticket options before setting out.",
        websiteUrl: "https://www.kotorcablecar.me/",
        websiteLabel: "Check operating times and tickets",
        stayUrl: "/places/1",
        stayLabel: "Stay in Kotor",
      },
    ],
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
      "Cetinje’s story is rooted in the struggle to preserve freedom. In 1482, as Ottoman expansion threatened his lands, Ivan Crnojević established his seat beneath Mount Lovćen, founding a monastery here in 1484. Cetinje became a centre of Montenegrin spiritual, political, and cultural life, shaped by mountain traditions and the defence of autonomy. Today, its monasteries, royal palaces, former embassies, and art museums reveal how this small city helped shape a country.",
    accommodationOptions: [
      {
        name: "Hotel Gradska Cetinje",
        description:
          "A hotel in the historic centre, convenient for exploring Cetinje’s museums, palaces, and cafés.",
        url: "https://www.gradska.me/",
      },
      {
        name: "Hotel Dapčević",
        description:
          "A hotel in Cetinje for visitors looking for a town base while exploring the surrounding area.",
        url: "https://www.booking.com/hotel/me/dapcevic.en-gb.html",
      },
      {
        name: "La Vecchia Casa",
        description:
          "A guesthouse in a historic building in Cetinje, with a garden and terrace.",
        url: "https://www.lavecchiacasa.com/",
      },
    ],
    nearbyPlaces: [
      {
        slug: "rijeka-crnojevica",
        title: "Rijeka Crnojevića",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/rijeka-crnojevica.png",
        description:
          "Rijeka Crnojevića opens onto one of Montenegro’s most beautiful river landscapes, where winding water meets Lake Skadar among green hills. Explore by boat or kayak to experience the scenery from the water, or pause beside the town’s old stone bridge. Once an important trading port, this small riverside town brings together history, nature, and a slower pace of life.",
        accommodationOptions: [
          {
            name: "Hotel S Family Jovićević",
            description:
              "A hotel with a restaurant, garden, and private parking.",
            url: "https://www.booking.com/hotel/me/pansion-5.html",
          },
          {
            name: "Apartment Jovićević",
            description:
              "A three-bedroom apartment with a fully equipped kitchen and a terrace overlooking the river.",
            url: "https://www.booking.com/hotel/me/apartments-jovicevic.html",
          },
          {
            name: "Apartment Vujović",
            description:
              "A one-bedroom apartment with a living room, terrace, garden, and private parking.",
            url: "https://www.booking.com/hotel/me/rijeka-crnojevica-apartment-vujovic.html",
          },
        ],
      },
      {
        slug: "njegusi",
        title: "Njeguši",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/njegusi.jpg",
        description:
          "Surrounded by the rocky slopes of Lovćen, Njeguši brings together mountain scenery, village traditions, and Montenegro’s history. This is the birthplace of Petar II Petrović Njegoš, the ruler and poet whose family home is now a museum. The village is also known for Njeguški pršut and local cheese. Stop for a traditional meal, explore the stone houses, and discover the landscape that shaped generations of Montenegrin life.",
        accommodationOptions: [
          {
            name: "Ethno Village St George",
            description:
              "A village-style accommodation complex offering standard apartments and deluxe suites in Njeguši.",
            url: "https://www.eng.etnoselosvetigeorgije.com/apartments/",
          },
          {
            name: "Njeguši Oasis",
            description:
              "A one-bedroom apartment with a kitchen, terrace, mountain views, and private parking.",
            url: "https://www.booking.com/hotel/me/njegusi-oasis-a-place-to-charge-your-batteries.en-gb.html",
          },
          {
            name: "Kutak prirode",
            description:
              "An apartment in Njeguši with a terrace, private parking, and Wi-Fi.",
            url: "https://www.booking.com/hotel/me/kutak-prirode.html",
          },
        ],
      },
      {
        slug: "lipa-cave",
        title: "Lipa Cave",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/lipa-cave.png",
        description:
          "Beneath the countryside near Cetinje, Lipa Cave reveals a different side of Montenegro: underground halls, stone columns, and formations shaped by water over millions of years. A guided visit takes you along a designated path through this hidden landscape, with a small tourist train connecting the parking area to the entrance. Bring a light jacket and closed shoes—the cave stays cool even in summer. Check the official website for tour times before travelling.",
        websiteUrl: "https://lipa-cave.me/",
        websiteLabel: "Check tour times and tickets",
        stayUrl: "/places/4",
        stayLabel: "Stay in Cetinje",
      },
    ],
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
      "Budva and its Riviera offer some of the Mediterranean’s most beautiful coastal scenery, with clear water, sheltered coves, and beaches backed by mountains. Enjoy it your own way: spend a quiet day swimming, explore the coastline by boat, or experience lively waterfront restaurants and nightlife. At its heart, the walled Old Town holds more than 2,500 years of history, with origins linked in Greek legend to Cadmus and Harmonia. Wander its stone streets and small squares, discover churches and art, or simply settle beside the sea.",
    nearbyPlaces: [
      {
        slug: "becici",
        title: "Bečići",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/becici.png",
        description:
          "With mountains rising behind a long sweep of sand and small pebbles, Bečići is a place to enjoy the Adriatic at your own pace. Its beach received recognition as Europe’s most beautiful at a competition in Paris in 1935. Spend the day swimming and relaxing beside the sea, or follow the coastal promenade past cafés and waterfront restaurants. In one direction, Budva’s Old Town is around a 30–50 minute walk, depending on where you start. In the other, the path leads through Rafailovići and a pedestrian tunnel to Kamenovo Beach, inviting you to explore more of the coast.",
        accommodationOptions: [
          {
            name: "Splendid Conference & Spa Resort",
            description:
              "A beachfront resort with direct beach access, a spa, and restaurants.",
            url: "https://www.montenegrostars.com/en/splendid-home",
          },
          {
            name: "Iberostar Waves Bellevue",
            description:
              "A beachfront hotel surrounded by spacious gardens on Bečići Bay.",
            url: "https://www.iberostar.com/en/hotels/budva/iberostar-waves-bellevue/",
          },
          {
            name: "Montenegro Beach Resort",
            description:
              "A seaside resort with a dedicated beach area and all-inclusive stay options.",
            url: "https://www.montenegrostars.com/en/faq-hotel-montenegro",
          },
        ],
      },
      {
        slug: "przno",
        title: "Pržno",
      },
      {
        slug: "sveti-stefan",
        title: "Sveti Stefan",
      },
      {
        slug: "petrovac",
        title: "Petrovac",
      },
      {
        slug: "jaz",
        title: "Jaz Beach",
      },
    ],
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
