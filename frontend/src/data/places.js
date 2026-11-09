const kotorFortressImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/kotor_-panoramic.png";
const perastImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/perast-1.png";
const lovcenImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/lovcen-national-park.jpg";
const cetinjeImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/cetinje.jpg";
const tivatImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/tivat.jpg";
const budvaImage =
  "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-oldtown.png";

const places = [
  {
    id: 1,
    title: "Kotor",
    location: "Kotor",
    category: "Coast",
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
    transportAdvice:
      "For local bus journeys around the bay, use Kotor Municipality’s public transport page to find published Blue Line timetables. Check the document’s date and confirm your nearest stop, direction, and return service with the operator or your accommodation before travelling. For taxis, agree on the fare before departure. If driving, confirm parking arrangements with your accommodation before arrival.",

    transportLinks: [
      {
        label: "Local bus timetables — Kotor Municipality",
        url: "https://www.kotor.me/me/javni-prevoz/",
      },
    ],
    accommodationGuide: {
      title: "Choose your base around Kotor",
      intro:
        "Start with how you want to spend your days: exploring historic streets, relaxing beside the water, or travelling around the bay.",
      areas: [
        {
          name: "Old Town",
          description:
            "Stay among Kotor’s historic streets and squares. The properties below are inside the town walls.",
        },
        {
          name: "Dobrota",
          description:
            "Explore waterfront accommodation beside Kotor. Check each property’s walking route to the Old Town, as locations vary.",
        },
        {
          name: "Ljuta and Orahovac",
          description:
            "Consider these villages for a quieter stay beside the bay.",
        },
        {
          name: "Prčanj",
          description:
            "Explore maritime architecture and waterfront walks across the bay from Dobrota.",
        },
        {
          name: "Stoliv",
          description:
            "Choose between time beside the water in Donji Stoliv and exploring the uphill route to Gornji Stoliv.",
        },
      ],
      advice:
        "Open the Around Kotor tab for each village’s guide and accommodation options. Before booking, confirm the exact address, transport connections, and parking if you’re driving. If travelling without a car, check the return journey as well as the outward route.",
    },
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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/bay-from-lovcen.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/view.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-wood.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-5.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/lovcen-cave.jpg",
    ],
    description:
      "Lovćen is more than a mountain—it is a symbol of Montenegro’s identity, freedom, and enduring spirit. Rising above the Adriatic, it connects the coastal world of Kotor, Tivat, and Budva with the historic heartland around Cetinje. From the sea, its rocky slopes form a dramatic mountain backdrop; from its heights, the landscape opens towards the bay, coast, and inland mountains. For many Montenegrins, Lovćen holds a place comparable to Olympus for the Greeks. On Jezerski Vrh, the mausoleum of the ruler and poet Petar II Petrović Njegoš brings that connection between mountain, history, and national identity into focus.",
    accommodationGuide: {
      title: "Stay in the mountains or in Cetinje",
      intro:
        "Choose your base around how you want to experience Lovćen: spending more time outdoors or combining a mountain visit with Cetinje’s museums, palaces, and cafés.",
      areas: [
        {
          name: "Ivanova Korita",
          description:
            "Stay inside Lovćen National Park, close to woods, meadows, and walking trails. The properties below are in this area. Ask your accommodation about suitable walks and how to reach the Njegoš Mausoleum.",
        },
        {
          name: "Cetinje",
          description:
            "Stay in town and visit Lovćen as a day trip. This gives you time to explore Cetinje’s cultural sights alongside the mountain landscape.",
        },
      ],
      advice:
        "Staying in the park gives you more time for walking, but reaching the mausoleum still requires planning your route and the final climb of 461 steps. If travelling without a car, confirm transport with your accommodation and arrange the return journey before setting off.",
    },
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
    transportAdvice:
      "Plan how you will travel between your accommodation and the places you want to visit in Lovćen. If taking a taxi, agree on the fare, any waiting time, and the return pickup before departure. If driving, check road and weather conditions before setting off. For walking routes, ask locally about the terrain and current trail conditions. Check the separate mausoleum and cable car guides below for visitor information specific to each attraction.",
    nearbyPlaces: [
      {
        slug: "njegos-mausoleum",
        title: "Njegoš Mausoleum",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/mausoleum.png",
        gallery: [
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/mausoleum.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/mausoleum-caryatid.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/njegos-sculpture.jpg",
        ],
        description:
          "Atop Jezerski Vrh on Mount Lovćen stands the mausoleum of Petar II Petrović Njegoš, Montenegro’s prince-bishop and one of the best-known poets in South Slavic literature. Designed by the renowned sculptor Ivan Meštrović, the monument honors the author of The Mountain Wreath (Gorski vijenac). Two stone caryatids depicting women in traditional Montenegrin dress frame the entrance, and inside, Njegoš sits beneath an eagle with outspread wings. After climbing the 461 steps, take time to enjoy the spectacular panorama. On a clear day, Montenegro seems to unfold beneath you, from the Adriatic coast to the mountains of the interior, with Štirovnik, Lovćen’s highest peak, rising nearby.",
        stayAdvice:
          "For a stay in the mountains, base yourself in Ivanova Korita inside Lovćen National Park. Spend time walking through the surrounding woods and meadows, then head to Jezerski Vrh and climb the 461 steps to the Njegoš Mausoleum. If you prefer to stay in town, base yourself in Cetinje and visit Lovćen as a day trip. If you’re travelling without a car, ask your accommodation about transport to the mausoleum and arrange your return ride in advance.",
        accommodationOptions: [
          {
            name: "Ivanova Korita accommodation",
            description:
              "Explore lodging at the Ivanova Korita recreation complex inside Lovćen National Park.",
            url: "https://www.ivanovakorita.com/en/",
          },
        ],
        transportAdvice:
          "You can reach the mausoleum by car or taxi from Cetinje or Kotor. A narrow mountain road leads to the foot of Jezerski Vrh, where the final climb is 461 steps. If you take a taxi, arrange your return ride in advance. The mausoleum closes seasonally, so check the museum’s opening hours and ticket prices before you go.",

        transportLinks: [
          {
            label:
              "Mausoleum opening hours and tickets — National Museum of Montenegro",
            url: "https://en.narodnimuzej.me/posjeta-njegosev-mauzolej/",
          },
        ],
      },
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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/rijeka-crnijevica-3.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/landscape2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-4.png",
    ],
    description:
      "Cetinje’s story is rooted in the struggle to preserve freedom. In 1482, as Ottoman expansion threatened his lands, Ivan Crnojević established his seat beneath Mount Lovćen, founding a monastery here in 1484. Cetinje became a centre of Montenegrin spiritual, political, and cultural life, shaped by mountain traditions and the defence of autonomy. Today, its monasteries, royal palaces, former embassies, and art museums reveal how this small city helped shape a country.",
    accommodationGuide: {
      title: "Choose your base around Cetinje",
      intro:
        "Stay in Cetinje for museums and historic streets, or compare accommodation in Rijeka Crnojevića and Njeguši for a riverside or mountain-village setting.",
      areas: [
        {
          name: "Cetinje",
          description:
            "Choose a town base for exploring museums, royal palaces, cafés, and former embassies. The properties below are in Cetinje. Check each address against the sights you want to reach on foot.",
        },
        {
          name: "Rijeka Crnojevića",
          description:
            "Consider a riverside stay for scenery, photography, and time on the water. Arrange transport separately if you plan to visit Cetinje or Lovćen.",
        },
        {
          name: "Njeguši",
          description:
            "Choose a village setting among the slopes of Lovćen, with traditional food and Njegoš’s birthplace nearby. Check transport arrangements before booking.",
        },
      ],
      advice:
        "Open the Around Cetinje tab for individual guides and accommodation options. Lipa Cave can be visited from a base in Cetinje; check its tour times before planning your day. If travelling without a car, confirm transport to nearby sights and your return journey. If driving, ask your accommodation about parking.",
    },
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
    transportAdvice:
      "Arriving by bus? Check departures for your travel date through Cetinje’s bus-station information page, and confirm your return journey before setting off. For visits to Njeguši, Lipa Cave, or Rijeka Crnojevića, arrange transport separately and confirm both the pickup and return. If you use a taxi, agree on the fare and any waiting time in advance. If you’re driving, ask your accommodation about parking.",
    transportLinks: [
      {
        label: "Cetinje bus station — information and departures",
        url: "https://komunalnocetinje.me/en/information-about-services/bus-station/",
      },
      {
        label: "Local visitor information — Cetinje Tourism Organisation",
        url: "https://www.cetinje.travel/contactus",
      },
    ],
    nearbyPlaces: [
      {
        slug: "rijeka-crnojevica",
        title: "Rijeka Crnojevića",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/rijeka-crnojevica.png",
        gallery: [
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/rijeka-crnojevica.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/rijeka-crnijevica-3.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/cetinje-rijeka.jpg",
        ],
        description:
          "Rijeka Crnojevića opens onto one of Montenegro’s most beautiful river landscapes, where winding water meets Lake Skadar among green hills. Explore by boat or kayak to experience the scenery from the water, or pause beside the town’s old stone bridge. Once an important trading port, this small riverside town brings together history, nature, and a slower pace of life.",
        transportAdvice:
          "Visit Rijeka Crnojevića by rental car or taxi, arranging your return journey in advance. For fit, experienced walkers, the old trail from Cetinje offers a different way to experience the landscape and the historic paths that connected local communities. Expect uneven, rocky ground and demanding climbs and descents. Go with a local guide who knows the route and its current condition. Cycling is another option for experienced riders on suitable roads, but the walking trail should not be assumed suitable for bicycles.",
        transportLinks: [
          {
            label: "Local visitor information — Cetinje Tourism Organisation",
            url: "https://www.cetinje.travel/contactus",
          },
        ],
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
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-oldtown.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva.png",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-2.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/budva-3.jpg",
      "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/red-beach2.png",
    ],
    description:
      "Budva and its Riviera offer some of the Mediterranean’s most beautiful coastal scenery, with clear water, sheltered coves, and beaches backed by mountains. Enjoy it your own way: spend a quiet day swimming, explore the coastline by boat, or experience lively waterfront restaurants and nightlife. At its heart, the walled Old Town holds more than 2,500 years of history, with origins linked in Greek legend to Cadmus and Harmonia. Wander its stone streets and small squares, discover churches and art, or simply settle beside the sea.",
    accommodationGuide: {
      title: "Choose your base on the Budva Riviera",
      intro:
        "Think about what you want within walking distance: historic streets, a long beach, or a smaller seaside village. Then compare the property’s exact location and transport options.",
      areas: [
        {
          name: "Budva Old Town and surroundings",
          description:
            "Stay close to historic streets, restaurants, and the waterfront. The properties below are in or near the Old Town.",
        },
        {
          name: "Bečići",
          description:
            "Consider Bečići for beach days and waterfront hotels. Check the walking route to Budva if you plan to visit the Old Town regularly.",
        },
        {
          name: "Pržno",
          description:
            "Choose a small bay setting with waterfront restaurants and access to the coastal scenery around Miločer.",
        },
        {
          name: "Sveti Stefan",
          description:
            "Look at mainland accommodation for views of the island and time beside the sea. Check the route from each property to the beach, including steps and uphill sections.",
        },
        {
          name: "Petrovac",
          description:
            "Consider Petrovac for a seaside town with its own beach and promenade. Plan transport separately if you want to visit Budva.",
        },
        {
          name: "Jaz Beach",
          description:
            "Compare accommodation near the beach if swimming is your priority. Check how you will reach Budva and return to your property.",
        },
      ],
      advice:
        "Open the Around Budva tab for individual guides and accommodation options. Before booking, confirm the exact address, parking, and any extra charges. If travelling without a car, check nearby bus stops and return services for your dates.",
    },
    accommodationOptions: [
      {
        name: "Avala Resort & Villas",
        description:
          "A seaside resort beside Budva’s Old Town walls, overlooking Ricardova Glava Beach.",
        url: "https://avalaresort.com/",
      },
      {
        name: "Hotel Astoria Budva",
        description:
          "Rooms and suites inside the Old Town, with its historic streets, restaurants, and cultural sights close by.",
        url: "https://astoriamontenegro.com/astoria-budva/",
      },
      {
        name: "Hotel Majestic",
        description:
          "A hotel near the Old Town and beaches, with rooms, suites, and the Hemingway Bar & Restaurant.",
        url: "https://www.majestichotel.me/en/",
      },
    ],
    transportAdvice:
      "To explore the Riviera, check local bus services towards Sveti Stefan and Petrovac, or towards Jaz, Trsteno, and Ploče. Budva’s tourist organisation lists the central departure point on Mediteranska Street, opposite Perla café. Confirm the current timetable, your nearest stop, and the return service before travelling. For taxis, ask for the fare before departure. If you’re driving, check parking arrangements with your accommodation.",
    transportLinks: [
      {
        label: "Local bus routes and timetables — Budva Tourism",
        url: "https://budva.travel/transport",
      },
    ],
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
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/przno.png",
        description:
          "Pržno is the beginning of a remarkable stretch of coast, where a small fishing village, wooded headlands, and sheltered beaches lead towards Miločer and Sveti Stefan. Stone houses and seafood terraces gather around its bay, while nearby Miločer reveals a different landscape: former royal gardens, old olive trees, tall cedars, and coves framed by greenery. Explore the coastal paths towards King’s Beach and the views of Sveti Stefan, or stay in Pržno for a swim and a meal beside the fishing boats. Here, the pleasure is in taking your time and discovering each bay along the way.",
        accommodationOptions: [
          {
            name: "Maestral Resort & Casino",
            description:
              "A beachfront resort in Pržno with rooms and suites, restaurants, and a spa.",
            url: "https://www.maestral.me/en/luxury-resort-montenegro",
          },
          {
            name: "Villa Katarina",
            description:
              "Rooms, studios, and apartments around 120 metres from Pržno Beach, with a seasonal outdoor pool and private parking.",
            url: "https://villakatarina.me/",
          },
          {
            name: "Springs Apartments & Rooms",
            description:
              "Family-run apartments and rooms near the entrance to Miločer Park, around 70 metres from Pržno Beach.",
            url: "https://simo-przno.com/",
          },
        ],
      },
      {
        slug: "sveti-stefan",
        title: "Sveti Stefan",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/sveti-stefan.png",
        description:
          "Sveti Stefan brings together pink-toned pebble beaches, turquoise water, and a fortified village of stone houses and red roofs, joined to the mainland by a narrow causeway. Its history reaches back to the 15th century, long before it became a celebrated hotel retreat. Take in the island from the shore, enjoy the surrounding beaches, or explore the wooded coastline towards Miločer and Pržno. Here, historic architecture and Mediterranean scenery create one of Montenegro’s most recognisable coastal views.",
        accommodationOptions: [
          {
            name: "Aman Sveti Stefan",
            description:
              "Stay within the historic island village, where restored stone houses, cobbled lanes, and courtyards overlook the Adriatic. Check the official website for seasonal availability.",
            url: "https://www.aman.com/resorts/aman-sveti-stefan",
          },
          {
            name: "Hotel California",
            description:
              "A beachfront hotel facing Sveti Stefan, with a dedicated beach area for guests. Welcomes adults and children over 12.",
            url: "https://hotelcalifornia.me/en/",
          },
          {
            name: "Hotel Azimut",
            description:
              "A hotel overlooking Sveti Stefan, with an indoor swimming pool, spa, and restaurant.",
            url: "https://hotel-azimut.com/en/",
          },
        ],
      },
      {
        slug: "petrovac",
        title: "Petrovac",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/petrovac.png",
        description:
          "Petrovac sits between green hills and the open Adriatic, with a curved beach and a promenade made for unhurried walks beside the sea. Offshore, Katič and Sveta Neđelja—with its tiny church perched on rock—give the bay its distinctive silhouette. Once known as Lastva, the town preserves traces of Roman life in its mosaics and Venetian history around the 16th-century Kastio fortress above the harbour. Spend a morning swimming, explore the waterfront, or walk to nearby Lučice, a sheltered cove framed by pine and cypress trees. Petrovac invites you to enjoy beach days, coastal scenery, and history within one small seaside town.",
        accommodationOptions: [
          {
            name: "Hotel Riva by Aycon",
            description:
              "A beachfront hotel on Petrovac’s promenade, with a restaurant terrace overlooking the beach.",
            url: "https://ayconhotels.com/hotel-riva/",
          },
          {
            name: "Hotel Palas",
            description:
              "A seafront hotel beside Petrovac’s town beach, convenient for walks along the promenade.",
            url: "https://www.booking.com/hotel/me/palas.html",
          },
          {
            name: "Vile Oliva Hotel & Resort",
            description:
              "A resort around 80 metres from Petrovac Beach, offering rooms, suites, and swimming pools.",
            url: "https://www.vileoliva.com/en/",
          },
        ],
      },
      {
        slug: "jaz",
        title: "Jaz Beach",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1200/jaz-beach.png",
        description:
          "Jaz opens onto a broad Adriatic bay, where a long shore of pebbles and sand meets green hills and rocky headlands. The beach has two distinct sections, offering different settings along the same coastline. Spend the day swimming, walking beside the water, or stopping at a beach café for a leisurely meal. Just outside Budva, Jaz gives you room to enjoy the coastal landscape beyond the town’s waterfront. In 2015, Lonely Planet named it Europe’s best beach.",
        accommodationOptions: [
          {
            name: "Hotel Poseidon",
            description:
              "A beachfront hotel at the eastern end of Jaz, with rooms, apartments, and a shaded restaurant terrace beside the sea.",
            url: "https://poseidon-jaz.com/en/home",
          },
          {
            name: "Galija Jaz Apartments",
            description:
              "Studio apartments directly on Jaz Beach, with kitchenettes, terraces, and parking.",
            url: "https://www.galijajaz.com/",
          },
          {
            name: "Palma Jaz",
            description:
              "Studios and apartments close to Jaz Beach, with a restaurant and beach bar.",
            url: "https://palmajaz.com/?lang=en",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Skadar Lake",
    location: "Skadar Lake",
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
      "Skadar Lake opens onto a landscape of mountains, reed beds, water lilies, and winding waterways. Shared by Montenegro and Albania, it is the largest lake in the Balkans and an important home for birdlife, including Dalmatian pelicans. Explore by boat or kayak, photograph the changing light, or discover the villages and viewpoints around its shores. Virpazar offers a starting point for exploring the lake, while Rijeka Crnojevića brings together river scenery and an old stone bridge. Fishing villages such as Karuč reveal another side of life beside the water. Island monasteries, historic fortresses, local fish dishes, and the vineyards of the surrounding countryside connect the landscape with centuries of culture. Come for the views, but leave time to explore beyond a single viewpoint.",
    bestTime: "Early morning or late afternoon",
    transportAdvice:
      "Choose which part of Skadar Lake you want to explore before arranging transport. Confirm the exact departure point for any boat or kayaking outing, as different operators use different locations. If taking a taxi, agree on the fare and return pickup in advance. If driving, ask your accommodation or activity provider about access and parking. Before booking a boat trip, confirm its duration, route, and whether the national park entrance fee is included.",
    nearbyPlaces: [
      {
        slug: "virpazar",
        title: "Virpazar",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/Virpazar_Bridge_Between_Village_and_Hotel.png",
        gallery: [
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/Virpazar_Bridge_Between_Village_and_Hotel.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/virpazar-monument.png",
        ],
        description:
          "Virpazar is a small settlement and a starting point for exploring Skadar Lake, where bridges, waterside houses, and fishing boats give the village its character. In the centre, a striking bronze monument rises above a rocky outcrop, commemorating the 13 July 1941 uprising against Italian occupation and the people of Crmnica who died during the Second World War. This distinctive landmark connects the village’s peaceful setting with Montenegro’s history of resistance. From Virpazar, boat trips lead into a landscape of waterways, water lilies, and mountain views, while kayaking and birdwatching offer other ways to experience the lake. Leave time to explore the village and discover the surrounding countryside and its wine traditions.",
        accommodationOptions: [
          {
            name: "Hotel De’Andros",
            description:
              "A hotel in Virpazar offering rooms and apartments, including options with lake views.",
            url: "https://hoteldeandros.me/",
          },
          {
            name: "Hotel Pelikan",
            description:
              "A family hotel in Virpazar with traditionally styled accommodation and a restaurant serving local dishes.",
            url: "https://pelikan-zec.com/hotel/",
          },
        ],
        transportAdvice:
          "If you have booked a boat or kayaking outing, confirm the exact meeting point in Virpazar before travelling. Ask about parking if driving, or arrange your return pickup if arriving by taxi. Before booking, check the route, duration, weather arrangements, and whether the national park entrance fee is included.",
      },
      {
        slug: "karuc",
        title: "Karuč",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/karuc.png",
        description:
          "Karuč is a small fishing village on Skadar Lake, where stone houses and surrounding hills frame views across the water. Its setting invites a slower visit: spend time beside the shore, photograph the landscape, or arrange a boat outing to explore beyond the village. Karuč offers another perspective on the lake, shaped by fishing traditions and everyday life beside the water.",
        accommodationOptions: [
          {
            name: "Karuc Apartments",
            description:
              "Apartments in Karuč with kitchen facilities and terrace or balcony options.",
            url: "https://www.booking.com/hotel/me/karuc-apartment.html",
          },
          {
            name: "Feel the Karuch",
            description:
              "A one-bedroom holiday home in Karuč with a living room, kitchenette, and terrace.",
            url: "https://www.booking.com/hotel/me/feel-the-karuch.html",
          },
        ],
        transportAdvice:
          "Confirm your arrival point and access arrangements before travelling to Karuč. If driving, check parking with your host or boat operator. If arriving by taxi, arrange the return pickup in advance. For a boat outing, confirm the departure point, route, duration, and whether the national park entrance fee is included.",
      },
      {
        slug: "dodosi",
        title: "Dodoši",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/dodosi.png",
        description:
          "Dodoši is an old fishing village in the Skadar Lake landscape, where houses gather beside the water beneath the surrounding hills. Explore the village, photograph fishing boats and reflections, or spend time discovering the nearby waterways. A walk towards Žabljak Crnojevića connects this lakeside setting with Montenegro’s medieval history. The ruined fortified town was once a seat of the Crnojević dynasty, which ruled Zeta before Ottoman expansion forced its rulers to move their centre elsewhere. Its elevated position offers another perspective on the surrounding lake landscape.",
        accommodationOptions: [
          {
            name: "Apartments Pristan",
            description:
              "Apartments in Dodoši with kitchen facilities, a terrace, and parking.",
            url: "https://booking-montenegro.me/en/accommodation/apartmani-pristan/",
          },
          {
            name: "Stone House Kana–Skadar Lake",
            description:
              "A one-bedroom holiday home in Dodoši with a kitchen, terrace, and private parking.",
            url: "https://www.booking.com/hotel/me/stone-house-kana-skadar-lake.html",
          },
          {
            name: "Lake View Apartment Dodosi",
            description:
              "A two-bedroom apartment in Dodoši with a kitchen, terrace, lake views, and private parking.",
            url: "https://www.booking.com/hotel/me/vila-studenac.en-gb.html",
          },
        ],
        transportAdvice:
          "Before travelling to Dodoši, confirm your arrival point with your accommodation or activity provider. If driving, ask about access and parking. If taking a taxi, agree on the fare and return pickup in advance. For boat or kayaking outings, confirm the meeting point, route, duration, and weather arrangements before setting off. For a walk towards Žabljak Crnojevića, ask locally about the route and current access, as the surrounding wetlands and water levels can affect conditions.",
      },
      {
        slug: "murici",
        title: "Murići",
        image:
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/murici.png",
        gallery: [
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/murici.png",
          "https://res.cloudinary.com/kneu7ajr/image/upload/f_auto,q_auto,w_1600/murici-beach.png",
        ],

        description:
          "Murići offers a different perspective on Skadar Lake: a pebble beach on its southwestern shore, with broad views across the water towards islands and mountains. Spend time beside the lake, photograph the shoreline, or arrange a boat outing to explore the nearby island monasteries. Beška is among the historic monasteries in this part of the lake, connecting the landscape with centuries of religious and cultural life. Confirm visiting arrangements with your boat operator before setting off.",
        transportAdvice:
          "Plan your journey to Donji Murići in advance. The approach includes narrow, winding roads and a steep descent towards the beach, so allow time and check access with your host or activity provider. If taking a taxi, agree on the fare and return pickup before departure. For boat outings, confirm the departure point, route, weather arrangements, and whether monastery visits and national park entrance fees are included.",
        stayAdvice:
          "For an overnight stay in Murići, check directly with local hosts about camping or bungalow accommodation, opening dates, and available facilities. Confirm meals, drinking water, parking, and arrival arrangements before travelling.",
        accommodationOptions: [
          {
            name: "Konoba Murići — bungalows and camping",
            description:
              "A lakeside property listed with wooden bungalows and camping. Contact the host to confirm opening dates, availability, and facilities.",
            url: "https://www.moja-djelatnost.me/najbolje-izletiste-bar-crna-gora/konoba-murici/MM19MIB0",
          },
        ],
      },
    ],
  },
];

export default places;
