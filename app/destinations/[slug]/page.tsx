import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Calendar, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import TourCard from "@/components/tour-card"

// This would normally come from a database or API
const getDestinationData = (slug: string) => {
  // Sample data for Ngaoundere
  if (slug === "Ngaoundere") {
    return {
      name: " Ngaoundéré",
      region: "Coastal Region",
      image: "/ngaoundere1.jpg",
      description:
        "Ngaoundéré is a city in the Adamawa Region of Cameroon, known for its rolling hills, Fulani culture, and gateway status to the northern savannahs. Nestled at the foot of the Adamawa Plateau, it's a peaceful blend of traditional heritage and natural scenery.",
      highlights: [
      "Lamido's Palace",
    "Vina Waterfalls",
    "Mount Ngaoundéré",
    "Traditional Fulani Architecture",
    "Local Markets"
      ],
      history:
        "Ngaoundéré has been a key center for the Fulani people for centuries, with the Lamido's Palace standing as a symbol of traditional authority. The city became more prominent during colonial times due to its strategic location and remains an important administrative and transport hub.",
      activities: [
  {
    name: "Visit the Lamido's Palace",
    description:
      "Explore the historical residence of the Lamido (traditional ruler) of Ngaoundéré, which showcases Fulani royal architecture and local customs.",
    image: "/ngaoundere2.jpg",
  },
  {
    name: "Hike Mount Ngaoundéré",
    description:
      "Climb this dormant volcanic hill for panoramic views of the surrounding savannah and grasslands. Ideal for light hiking and nature photography.",
    image: "/ngaoundere4.jpg",
  },
  {
    name: "Discover the Vina Waterfalls",
    description:
      "Located just outside the city, these falls are a refreshing natural attraction where locals often gather for picnics and relaxation.",
    image: "/ngaoundere1.jpg",
  },
  {
    name: "Stroll through Ngaoundéré Central Market",
    description:
      "Immerse yourself in local life and discover spices, fabrics, crafts, and fresh produce in this bustling and colorful market.",
    image: "/ngaoundere5.jpg",
  }
],
      tours: [
        {
          id: 2,
          title:  "Fulani Traditions & Nature Trail Experience",
          image: "/limbe6.jpg",
          price: 45000,
          duration: "1 day",
          rating: 4.7,
          reviews: 98,
          location: "Ngaoundéré",
          description:
            "Dive into the heart of Fulani traditions and explore the natural beauty surrounding Ngaoundéré. This immersive tour combines culture, food, and scenic exploration.",
          highlights: [
            "Visit a traditional Fulani settlement and interact with locals",
      "Enjoy a horseback ride through the grasslands",
      "Taste authentic Fulani dishes prepared by local chefs",
      "Walk through forest paths to hidden natural springs",
          ],
        },
        {
          id: 3,
          title: "Ngaoundéré Cultural Discovery Tour",
          image: "/ngaoundere2.jpg",
          price: 30000,
          duration: "3 day",
          rating: 4.7,
          reviews: 98,
          location: "Ngaoundéré",
          description:
            "Uncover the cultural treasures of Ngaoundéré, from royal palaces to scenic nature spots. Includes guided tours and traditional lunch.",
          highlights: [
            "Guided visit of the Lamido's Palace",
      "Scenic hike up Mount Ngaoundéré",
      "Discover Vina Waterfalls",
      "Experience Fulani hospitality and cuisine",
          ],
        },
        
      ],
      weather:
        "Ngaoundéré enjoys a tropical savannah climate with a rainy season from April to October and a dry season from November to March. Average temperatures range from 18°C to 30°C (64°F to 86°F), with cooler evenings due to elevation.",
      gettingThere:
        "Ngaoundéré is accessible by road, rail, and air. It’s about 820 km from Yaoundé and 1,020 km from Douala. The city is served by Ngaoundéré Airport and the Yaoundé-Ngaoundéré railway line, offering overnight trains and regional flights.",
    }
  }
    if (slug === "yaounde") {
    return {
      name: " Yaounde",
      region: "Center Region",
      image: "/yaounde2.jpg",
      description:
        "Yaoundé is the capital city of Cameroon, built across seven hills and rich with political, cultural, and historical significance. It offers a unique mix of colonial architecture, bustling markets, green parks, and vibrant city life.",
      highlights: [
      "National Museum of Cameroon",
  "Mvog-Betsi Zoo",
  "Reunification Monument",
  "Benedictine Monastery of Mont Fébé",
  "Marché Central"
      ],
      history:
        "Founded in the late 19th century by German explorers, Yaoundé became the capital of French-administered Cameroon in 1922. It played a key role during the independence movement and has since evolved into the country's administrative and diplomatic hub.",
      activities: [
  {
    name: "Explore the National Museum",
    description:
      "Housed in the former presidential palace, this museum showcases Cameroon's history, cultural artifacts, and traditional crafts from various ethnic groups.",
    image: "/yaounde1.jpg",
  },
  {
    name: "Relax at Mont Fébé",
    description:
      "A peaceful escape with scenic views, the Mont Fébé area includes a monastery, forested walking trails, and panoramic spots overlooking the city.",
    image: "/yaounde2.jpg",
  },
  {
    name: "Visit Mvog-Betsi Zoo",
    description:
      "Home to a variety of native species including lions, chimpanzees, and antelopes, the zoo also focuses on conservation education.",
    image: "/yaounde3.jpg",
  },
  {
    name: "Shop at Marché Central",
    description:
      "One of the largest and busiest markets in Yaoundé. Find everything from textiles and crafts to electronics and Cameroonian street food.",
    image: "/yaounde4.jpg",
  }
],
      tours: [
  {
    id: 5,
    title: "Yaoundé City Highlights & Cultural Tour",
    image: "/yaounde5.jpg",
    price: 40000,
    duration: "1 day",
    rating: 4.6,
    reviews: 81,
    location: "Yaoundé",
    description:
      "Discover Yaoundé's most iconic landmarks, learn about its history, and immerse yourself in local culture with guided visits and tastings.",
    highlights: [
      "Guided tour of the National Museum",
      "Photo stop at the Reunification Monument",
      "Cultural walk through Marché Central",
      "Scenic views from Mont Fébé"
    ],
  },
  {
    id: 6,
    title: "Nature Escape: Mont Fébé & Monastery Walk",
    image: "/yaounde7.jpg",
    price: 35000,
    duration: "Half-day",
    rating: 4.4,
    reviews: 59,
    location: "Yaoundé",
    description:
      "Take a relaxing walk through the peaceful Mont Fébé hills, visit the Benedictine Monastery, and enjoy stunning views over the capital city.",
    highlights: [
      "Walk shaded trails around Mont Fébé",
      "Visit the serene Benedictine Monastery",
      "Enjoy panoramic views of Yaoundé",
      "Optional tea break at a hilltop café"
    ],
  },
  {
    id: 7,
    title: "Market & Street Food Adventure",
    image: "/yaounde8.jpg",
    price: 30000,
    duration: "1 day",
    rating: 4.7,
    reviews: 92,
    location: "Yaoundé",
    description:
      "Join a local guide for an exciting culinary tour of Yaoundé. Visit markets, taste traditional dishes, and learn about Cameroonian cooking culture.",
    highlights: [
      "Explore Marché Central and local markets",
      "Taste popular street foods like soya, beignets, and puff-puff",
      "Visit a local spice stall",
      "Learn food customs and local etiquette"
    ],
  },
  {
    id: 8,
    title: "Family Fun at Mvog-Betsi Zoo & Botanical Garden",
    image: "/yaounde9.jpg",
    price: 32000,
    duration: "Half-day",
    rating: 4.3,
    reviews: 68,
    location: "Yaoundé",
    description:
      "A great experience for families or wildlife lovers—explore Yaoundé’s zoo and botanical gardens while learning about native species and conservation.",
    highlights: [
      "See lions, monkeys, reptiles, and birds",
      "Walk the botanical garden trails",
      "Interactive learning for children",
      "Optional picnic with local snacks"
    ],
  }
],
      weather:
        "Yaoundé has a tropical wet and dry climate, with two rainy seasons from March to June and September to November. Temperatures range from 19°C to 30°C (66°F to 86°F) with consistent humidity throughout the year.",
      gettingThere:
        "Yaoundé is accessible via Yaoundé Nsimalen International Airport, which receives both domestic and international flights. The city is also connected by major roads and railways to Douala, Ngaoundéré, and other parts of the country.",
    }
  }
if (slug === "yaounde") {
  return {
    name: "Yaoundé",
    region: "Center Region",
    image: "/yaounde2.jpg",
    description:
      "Yaoundé is the capital city of Cameroon, built across seven hills and rich with political, cultural, and historical significance. It offers a unique mix of colonial architecture, bustling markets, green parks, and vibrant city life.",
    highlights: [
      "National Museum of Cameroon",
      "Mvog-Betsi Zoo",
      "Reunification Monument",
      "Benedictine Monastery of Mont Fébé",
      "Marché Central"
    ],
    history:
      "Founded in the late 19th century by German explorers, Yaoundé became the capital of French-administered Cameroon in 1922. It played a key role during the independence movement and has since evolved into the country's administrative and diplomatic hub.",
    activities: [
      {
        name: "Explore the National Museum",
        description:
          "Housed in the former presidential palace, this museum showcases Cameroon's history, cultural artifacts, and traditional crafts from various ethnic groups.",
        image: "/yaounde1.jpg",
      },
      {
        name: "Relax at Mont Fébé",
        description:
          "A peaceful escape with scenic views, the Mont Fébé area includes a monastery, forested walking trails, and panoramic spots overlooking the city.",
        image: "/yaounde2.jpg",
      },
      {
        name: "Visit Mvog-Betsi Zoo",
        description:
          "Home to a variety of native species including lions, chimpanzees, and antelopes, the zoo also focuses on conservation education.",
        image: "/yaounde3.jpg",
      },
      {
        name: "Shop at Marché Central",
        description:
          "One of the largest and busiest markets in Yaoundé. Find everything from textiles and crafts to electronics and Cameroonian street food.",
        image: "/yaounde4.jpg",
      }
    ],
    tours: [
      {
        id: 5,
        title: "Yaoundé City Highlights & Cultural Tour",
        image: "/yaounde5.jpg",
        price: 40000,
        duration: "1 day",
        rating: 4.6,
        reviews: 81,
        location: "Yaoundé",
        description:
          "Discover Yaoundé's most iconic landmarks, learn about its history, and immerse yourself in local culture with guided visits and tastings.",
        highlights: [
          "Guided tour of the National Museum",
          "Photo stop at the Reunification Monument",
          "Cultural walk through Marché Central",
          "Scenic views from Mont Fébé"
        ],
      },
      {
        id: 6,
        title: "Nature Escape: Mont Fébé & Monastery Walk",
        image: "/yaounde7.jpg",
        price: 35000,
        duration: "Half-day",
        rating: 4.4,
        reviews: 59,
        location: "Yaoundé",
        description:
          "Take a relaxing walk through the peaceful Mont Fébé hills, visit the Benedictine Monastery, and enjoy stunning views over the capital city.",
        highlights: [
          "Walk shaded trails around Mont Fébé",
          "Visit the serene Benedictine Monastery",
          "Enjoy panoramic views of Yaoundé",
          "Optional tea break at a hilltop café"
        ],
      },
      {
        id: 7,
        title: "Market & Street Food Adventure",
        image: "/yaounde8.jpg",
        price: 30000,
        duration: "1 day",
        rating: 4.7,
        reviews: 92,
        location: "Yaoundé",
        description:
          "Join a local guide for an exciting culinary tour of Yaoundé. Visit markets, taste traditional dishes, and learn about Cameroonian cooking culture.",
        highlights: [
          "Explore Marché Central and local markets",
          "Taste popular street foods like soya, beignets, and puff-puff",
          "Visit a local spice stall",
          "Learn food customs and local etiquette"
        ],
      },
      {
        id: 8,
        title: "Family Fun at Mvog-Betsi Zoo & Botanical Garden",
        image: "/yaounde9.jpg",
        price: 32000,
        duration: "Half-day",
        rating: 4.3,
        reviews: 68,
        location: "Yaoundé",
        description:
          "A great experience for families or wildlife lovers—explore Yaoundé’s zoo and botanical gardens while learning about native species and conservation.",
        highlights: [
          "See lions, monkeys, reptiles, and birds",
          "Walk the botanical garden trails",
          "Interactive learning for children",
          "Optional picnic with local snacks"
        ],
      }
    ],
    weather:
      "Yaoundé has a tropical wet and dry climate, with two rainy seasons from March to June and September to November. Temperatures range from 19°C to 30°C (66°F to 86°F) with consistent humidity throughout the year.",
    gettingThere:
      "Yaoundé is accessible via Yaoundé Nsimalen International Airport, which receives both domestic and international flights. The city is also connected by major roads and railways to Douala, Ngaoundéré, and other parts of the country.",
  }
}
if (slug === "bertoua") {
  return {
    name: "Bertoua",
    region: "East Region",
    image: "/bertoua1.jpg",
    description:
      "Bertoua is the capital of the East Region of Cameroon, known for its tranquil ambiance, rich forest landscapes, and its proximity to the country's vast eastern rainforest reserves. It serves as a hub for eco-tourism and cultural encounters with indigenous communities.",
    highlights: [
      "Lobéké National Park (access point)",
      "Ethnographic Museum of Bertoua",
      "Sacred Heart Cathedral",
      "Local artisan markets",
      "Nearby pygmy communities"
    ],
    history:
      "Bertoua developed as a colonial administrative center during the German and later French periods. Its growth expanded due to forestry and regional governance, and it is now recognized as a key gateway to Cameroon's eastern wilderness and indigenous cultures.",
    activities: [
      {
        name: "Visit the Ethnographic Museum",
        description:
          "Discover the traditions, attire, tools, and customs of the various ethnic groups in the East Region, including the Baka and Kaka peoples.",
        image: "/bertoua2.jpg",
      },
      {
        name: "Explore Local Markets",
        description:
          "Wander through Bertoua’s artisan markets where you’ll find hand-carved crafts, local textiles, and traditional foods unique to the East.",
        image: "/bertoua3.jpg",
      },
      {
        name: "Take a Cultural Tour to a Pygmy Village",
        description:
          "Engage with Baka pygmy communities in the nearby forest areas. Learn about their music, hunting traditions, and forest knowledge.",
        image: "/bertoua4.jpg",
      },
      {
        name: "Relax at the Sacred Heart Cathedral",
        description:
          "A peaceful and historic Catholic cathedral at the heart of Bertoua, known for its architecture and role in local community life.",
        image: "/bertoua5.jpg",
      }
    ],
    tours: [
      {
        id: 9,
        title: "Bertoua Heritage & Culture Tour",
        image: "/bertoua6.jpg",
        price: 37000,
        duration: "1 day",
        rating: 4.5,
        reviews: 45,
        location: "Bertoua",
        description:
          "Explore Bertoua's local history, museum, and markets with a knowledgeable guide. Includes artisan visits and cultural storytelling.",
        highlights: [
          "Visit to the Ethnographic Museum",
          "Shopping at local craft markets",
          "Cultural dance demonstration",
          "Meet local artisans"
        ],
      },
      {
        id: 10,
        title: "Eco & Forest Discovery: Pygmy Community Tour",
        image: "/bertoua7.avif",
        price: 42000,
        duration: "Full day",
        rating: 4.7,
        reviews: 38,
        location: "Bertoua",
        description:
          "Experience life in a traditional pygmy village, guided by local interpreters. Learn forest survival techniques and traditional music.",
        highlights: [
          "Transport to Baka community forest zone",
          "Introduction to forest-based lifestyle",
          "Interactive music and storytelling session",
          "Optional nature hike"
        ],
      },
      {
        id: 11,
        title: "Spiritual & Historical Landmarks of Bertoua",
        image: "/bertoua8.avif",
        price: 28000,
        duration: "Half-day",
        rating: 4.3,
        reviews: 29,
        location: "Bertoua",
        description:
          "A guided walk through Bertoua’s religious and colonial landmarks, including the Sacred Heart Cathedral and old administrative buildings.",
        highlights: [
          "Visit Sacred Heart Cathedral",
          "Learn about colonial heritage sites",
          "Quiet time for reflection or photography",
          "Optional stop at a local café"
        ],
      }
    ],
    weather:
      "Bertoua has a humid tropical climate with significant rainfall, especially from March to November. Temperatures range between 20°C and 32°C (68°F to 90°F), with lush greenery throughout most of the year.",
    gettingThere:
      "Bertoua is accessible by road from Yaoundé (approx. 350 km) and Douala. The city has a regional airport mainly serving domestic flights and charter planes. Buses and private taxis also operate routes to Bertoua from major cities.",
  }
}
if (slug === "maroua") {
  return {
    name: "Maroua",
    region: "Far North Region",
    image: "/maroua1.webp",
    description:
      "Maroua is the capital of Cameroon's Far North Region, a vibrant Sahelian city known for its colorful markets, traditional architecture, and proximity to natural and cultural attractions like the Mandara Mountains and Waza National Park.",
    highlights: [
      "Maroua Grand Market",
      "Traditional lamido palace (palais du lamido)",
      "Mandara Mountains (nearby)",
      "Crafts and leather workshops",
      "Waza National Park (gateway)"
    ],
    history:
      "Historically a center of Fulani and Islamic influence, Maroua developed as a regional trade and cultural hub. The city maintains its traditional heritage through its architecture, royal structures, and artisan industries.",
    activities: [
      {
        name: "Stroll Through Maroua Grand Market",
        description:
          "A bustling center of trade, the market is famous for textiles, spices, leather goods, and locally made handicrafts. A must-visit for cultural immersion.",
        image: "/maroua2.jpg",
      },
      {
        name: "Visit the Lamido’s Palace",
        description:
          "Step into the traditional palace of the local ruler, where you can witness Sahelian architecture and learn about the Fulani leadership traditions.",
        image: "/maroua3.jpg",
      },
      {
        name: "Explore Craft Workshops",
        description:
          "Maroua is well known for its leatherwork, pottery, and weaving. Visit local workshops and see artisans at work.",
        image: "/maroua4.webp",
      },
      {
        name: "Day Trip to Waza National Park",
        description:
          "Take a guided trip to one of Cameroon’s most famous parks. Spot elephants, giraffes, antelopes, and more in this semi-arid savannah reserve.",
        image: "/maroua5.avif",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "Maroua has a semi-arid climate with a long dry season from October to May and a short rainy season from June to September. Temperatures often range from 22°C to 40°C (72°F to 104°F), with hot, dry winds common.",
    gettingThere:
      "Maroua is accessible via Maroua Salak Airport, offering limited domestic flights. The city can also be reached by bus or car from Garoua and Ngaoundéré. Local moto-taxis and minibuses are the main forms of transportation within the city.",
  }
}
if (slug === "douala") {
  return {
    name: "Douala",
    region: "Littoral Region",
    image: "/douala1.jpg",
    description:
      "Douala is the economic capital and largest city of Cameroon, bustling with energy, commerce, and cultural diversity. Located along the Atlantic coast, it is known for its lively ports, modern infrastructure, and vibrant nightlife.",
    highlights: [
      "Douala Maritime Museum",
      "La Nouvelle Liberté Monument",
      "Marché Central & Akwa District",
      "Ekom Nkam Waterfalls (nearby)",
      "Doual’art Contemporary Art Center"
    ],
    history:
      "Founded as a small fishing village by the Duala people, Douala grew rapidly during German and French colonial periods due to its strategic coastal location. It remains Cameroon’s main economic engine and hosts the country’s largest seaport and airport.",
    activities: [
      {
        name: "Visit the Maritime Museum",
        description:
          "A fascinating museum showcasing the maritime history of Cameroon, from colonial trade to modern shipping. Located near the port area.",
        image: "/douala2.webp",
      },
      {
        name: "Walk Through the Akwa District",
        description:
          "The heart of Douala's business and nightlife scene, Akwa is full of shops, restaurants, bars, and historic buildings from the colonial era.",
        image: "/douala3.jpg",
      },
      {
        name: "See the La Nouvelle Liberté Monument",
        description:
          "An iconic recycled metal sculpture symbolizing freedom and resilience, located at one of Douala’s busiest roundabouts.",
        image: "/douala4.webp",
      },
      {
        name: "Take a Day Trip to Ekom Nkam Falls",
        description:
          "One of Cameroon's most impressive waterfalls, located a few hours from Douala, surrounded by tropical forest and featured in Tarzan films.",
        image: "/douala5.webp",
      }
    ],
    tours: [
      {
        id: 15,
        title: "Douala City Discovery Tour",
        image: "/douala6.webp",
        price: 40000,
        duration: "1 day",
        rating: 4.4,
        reviews: 73,
        location: "Douala",
        description:
          "Explore the highlights of Douala including the historic districts, monuments, and markets. Includes local tastings and a guide.",
        highlights: [
          "Visit to La Nouvelle Liberté",
          "Explore Akwa and Bonanjo neighborhoods",
          "Stop at the Maritime Museum",
          "Sample local street food"
        ],
      },
      {
        id: 16,
        title: "Art & Culture Walk in Douala",
        image: "/douala7.jpg",
        price: 35000,
        duration: "Half-day",
        rating: 4.5,
        reviews: 56,
        location: "Douala",
        description:
          "A guided art walk through Doual’art, murals, and hidden galleries showcasing the city’s creative and cultural vibrance.",
        highlights: [
          "Tour Doual’art contemporary gallery",
          "Discover public art installations",
          "Visit local studios and creative spaces",
          "Optional coffee stop with artists"
        ],
      },
      {
        id: 17,
        title: "Nature Getaway: Ekom Nkam Waterfalls Tour",
        image: "/douala8.jpg",
        price: 48000,
        duration: "Full day",
        rating: 4.8,
        reviews: 61,
        location: "Ekom Nkam (from Douala)",
        description:
          "Escape the city and head into nature with a scenic trip to Ekom Nkam Falls. Enjoy hiking, photography, and rainforest air.",
        highlights: [
          "Transport to Ekom Nkam Falls",
          "Forest trail walk",
          "Viewpoint photography stops",
          "Optional picnic at the falls"
        ],
      }
    ],
    weather:
      "Douala has a tropical monsoon climate with heavy rainfall from June to October and drier months from December to February. Temperatures range from 24°C to 32°C (75°F to 90°F), with high humidity year-round.",
    gettingThere:
      "Douala is served by Douala International Airport with flights to major African and European cities. The city is well connected by road and sea, and serves as the starting point for many trips to western Cameroon and the coast.",
  }
}
if (slug === "garoua") {
  return {
    name: "Garoua",
    region: "North Region",
    image: "/maroua1.webp",
    description:
      "Garoua is the capital of Cameroon's North Region, a vibrant Sahelian city known for its colorful markets, traditional architecture, and proximity to natural and cultural attractions like the Mandara Mountains and Waza National Park.",
    highlights: [
      "Garoua Central market",
      "Lamido’s Palace (palais du lamido)",
      "Lagdo Dam",
      "Benoue National Park (gateway)"
    ],
    history:
      "Historically a center of Fulani and Islamic influence, Garoua developed as a regional trade and cultural hub. The city maintains its traditional heritage through its unique culture and artisan industries.",
    activities: [
      {
        name: "Stroll Through Garoua Central Market",
        description:
          "A bustling center of trade, the market is famous for textiles, spices, leather goods, and locally made handicrafts. A must-visit for cultural immersion.",
        image: "/maroua2.jpg",
      },
      {
        name: "Lamido’s Palace",
        description:
          "Step into the traditional palace of the local ruler, where you can witness Sahelian architecture and learn about the Fulani leadership traditions.",
        image: "/maroua3.jpg",
      },
      {
        name: "Boat rides at Lagdo Dam",
        description:
          "Garoua is known for it's dam which accomodates boat rides and fishing.",
        image: "/bigfall.jpeg",
      },
      {
        name: "Day Trip to Benoue National Park",
        description:
          "Take a guided trip to one of Cameroon’s most famous parks. Spot elephants, giraffes, antelopes, and more in this semi-arid savannah reserve.",
        image: "/maroua5.avif",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "There are isolated thunderstorms. Mostly cloudy, passing showers. Temperatures are about 107°F with humidity around 39%.",
    gettingThere:
      "Fly to an international airport in Yaounde or Douala, Cameroon. A bus or taxi can take you from there to Garoua, which will take about 12-15 hours by road. A domestic flight cn lso be taken to get here.",
  }
}
if (slug === "Bamenda") {
  return {
    name: "Bamenda",
    region: "NorthWest Region",
    image: "/maroua1.webp",
    description:
      "A city marked by colonial rule and involvement in the political landscape of Cameroon. It has a unique and popular culture.",
    highlights: [
      "Mount Oku",
      "Menchum Falls",
      "Kilum-Ijim Forest",
      "Mankon Museum"
    ],
    history:
      "The region is marked by it's early settlements in the 1700s and later joint british and french administration in the realy 1900s.",
    activities: [
      {
        name: "Mount Oku Hike",
        description:
          "Enjoy stunning views and diverse ecosystems.",
        image: "/mount1.jpg",
      },
      {
        name: "Menchum Falls",
        description:
          "Go sailing and sailing on the spectacular site.",
        image: "/bigfall.jpeg",
      },
      {
        name: "Kilum-Ijim Forest Exploration",
        description:
          "Enjoy site of mountain forest with a haven for diverse flora and fauna.",
        image: "/Korup1.jpg",
      },
      {
        name: "Mankon museum visit",
        description:
          "Take a guided trip to one of Cameroon’s most famous parks. Spot elephants, giraffes, antelopes, and more in this semi-arid savannah reserve.",
        image: "/Mankon Museum.jpeg",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "The Northwest region records high and low temperatures, isolated storms. Temperatures are around 82 degree F and the humidity is about 64%.",
    gettingThere:
      "You have to fly into Douala or Yaounde airports, then travel to Bamenda which is the region's capital.",
  }
}
if (slug === "Bafoussam") {
  return {
    name: "Bafoussam",
    region: "West Region",
    image: "/Ebolowa2.jpeg",
    description:
      "A fertile region in Cameroon characterized by diverse landscapes including mountains, lakes and waterfalls.",
    highlights: [
      "Bafoussam Grand Market",
      "Chutes de la Metche",
      "Bafoussam Museum"
    ],
    history:
      "It was initially made up of several ethnic groups including the bamileke and bamum. This region joined Cameroon in the 1960s.",
    activities: [
      {
        name: "Stroll Through Bafoussam Grand Market",
        description:
          "A bustling center of trade, the market is famous for textiles, spices, leather goods, and locally made handicrafts. A must-visit for cultural immersion.",
        image: "/market.jpg",
      },
      {
        name: "Chutes de la Metche adventure",
        description:
          "Go sailing and fishing in one of the most beatiful sites in the West.",
        image: "/bigfall.jpeg",
      },

      {
        name: "Bafoussam Museum visit",
        description:
          "Enjoy the beautiful work of art and culture in Bafoussam.",
        image: "/Mankon Museum.jpeg",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "This region records high and low temperatures, a few storms. Temperatures are around 80 degree F with Humidity of around 72%.",
    gettingThere:
      "Fly to Douala or Yaounde international airports in the country, then from there travel to the West region by road using train or bus.",
  }
}
if (slug === "Ebolowa") {
  return {
    name: "Ebolowa",
    region: "South Region",
    image: "/dja1.jpg",
    description:
      "A region surrounded by central African countries. It has Ethni groups like Bulu, Fang and Ewondo.",
    highlights: [
      "Ebolowa Grand Market",
      "Dja Faunal Reserve",
      "Kribi Waterfalls",
      "Londji village"
    ],
    history:
      "Known for it's early human populations like pygmies. It had some political development shifts and fully became a region in 2008.",
    activities: [
      {
        name: "Stroll Through Ebolowa Grand Market",
        description:
          "A bustling center of trade, the market is famous for textiles, spices, leather goods, and locally made handicrafts. A must-visit for cultural immersion.",
        image: "/market.jpg",
      },
      {
        name: "Dja Faunal Reserve adventure",
        description:
          "Go on adventure to see variety of wildlife including gorillas and elephants.",
        image: "/dja1.jpg",
      },
      {
        name: "Explore Kribi Waterfalls",
        description:
          "Go on boat tours and experience beautiful beaches near the atlantic ocean.",
        image: "/lobe1.jpg",
      },
      {
        name: "Londi village visit",
        description:
          "Take a trip to Londji to experience wonderful boat tours and fishing.",
        image: "/Londji village des pecheurs.jpeg",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "There are scattered storms during the evening, cloudy skies after midnight. There are heavy downpours and frequent lightning with storms. Weather is around 25 degree celsius.",
    gettingThere:
      "Fly to Yaounde or Douala airport. From there, you can hire private transport to get to the South region.",
  }
}
if (slug === "Buea") {
  return {
    name: "Buea",
    region: "Southwest Region",
    image: "/Buea2.jpeg",
    description:
      "This region is known fr it's rich green vegetation, hravy rainfall and abundant agriculture.",
    highlights: [
      "Korup National Park",
      "Mount Cameroon (nearby)",
      "City of Limbe",
      "Limbe Botanical Gardens",
    ],
    history:
      "It was colonized by the Germans and British in the 1880s and later became a region of Cameroon in the early 1970s.",
    activities: [
      {
        name: "Visit Korup National Park",
        description:
          "Have a wonderful experience visting Korup national park and seeing rich flora and fauna.",
        image: "/korup1.jpg",
      },
      {
        name: "Mount Cameroon Hike",
        description:
          "Go hiking and enjoy the beauty of nature on a rich and colorful mountain.",
        image: "/Mount Cameroon.jpeg",
      },
      {
        name: "City of Limbe",
        description:
          "Get to enjoy beautiful black sandy beaches in the Southwest Region.",
        image: "/Limbe11.jpg",
      },
      {
        name: "Limbe Botanical Garden visit",
        description:
          "Experience a colorful and beautiful adventure by visiting a garden with a wide variety of plant species.",
        image: "/Limbe Botanical Garden.jpeg",
      }
    ],
    tours: [
      {
        id: 12,
        title: "Maroua City & Culture Tour",
        image: "/maroua6.avif",
        price: 30000,
        duration: "1 day",
        rating: 4.5,
        reviews: 52,
        location: "Maroua",
        description:
          "Dive into the history and lifestyle of Maroua with visits to the lamido's palace, artisan centers, and the lively central market.",
        highlights: [
          "Guided tour of the lamido’s palace",
          "Explore the Grand Market",
          "Visit leather and textile workshops",
          "Try traditional Far North cuisine"
        ],
      },
      {
        id: 13,
        title: "Safari Adventure: Waza National Park",
        image: "/maroua7.webp",
        price: 45000,
        duration: "Full day",
        rating: 4.8,
        reviews: 64,
        location: "Waza (via Maroua)",
        description:
          "Set off early for a wildlife-packed day exploring Waza National Park with an expert guide. Includes transport and picnic lunch.",
        highlights: [
          "Safari drive through Waza",
          "Spot elephants, giraffes, lions, and birds",
          "Stop at park viewpoints",
          "Optional local lunch en route"
        ],
      },
      {
        id: 14,
        title: "Mandara Mountains Hiking Experience",
        image: "/maroua8.webp",
        price: 38000,
        duration: "Full day",
        rating: 4.6,
        reviews: 41,
        location: "Near Maroua",
        description:
          "Take a guided hike in the Mandara Mountains, visit Kapsiki villages, and enjoy breathtaking views of the volcanic landscapes.",
        highlights: [
          "Guided hike in Mandara Mountains",
          "Cultural visit to a local village",
          "Panoramic viewpoints",
          "Learn about ancient rock dwellings"
        ],
      }
    ],
    weather:
      "There is frequent rainfall in this region. Temperature is around 70 degree F and precipitation is about 24%.",
    gettingThere:
      "You need to fly to Douala, the main international airport. From there, you can take a land transport bus or hire  private vehicle to the Southwest region.",
  }
}


  // Default data for other destinations
  return {
    name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    region: "Cameroon",
    image: "/limbe7.png",
    description: `Detailed information about ${
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
    } coming soon.`,
    highlights: ["Natural Beauty", "Cultural Experiences", "Local Cuisine", "Friendly People"],
    history: "Historical information coming soon.",
    activities: [
      {
        name: "Explore Local Attractions",
        description: "Discover the unique attractions this destination has to offer.",
        image: "/limbe8.jpg",
      },
      {
        name: "Experience Local Culture",
        description: "Immerse yourself in the rich cultural heritage of the region.",
        image: "/limbe9.jpg",
      },
    ],
    tours: [],
    weather: "Weather information coming soon.",
    gettingThere: "Transportation information coming soon.",
  }
}



  // Default data for other destinations
  return {
    name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " "),
    region: "Cameroon",
    image: "/limbe7.png",
    description: `Detailed information about ${
      slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ")
    } coming soon.`,
    highlights: ["Natural Beauty", "Cultural Experiences", "Local Cuisine", "Friendly People"],
    history: "Historical information coming soon.",
    activities: [
      {
        name: "Explore Local Attractions",
        description: "Discover the unique attractions this destination has to offer.",
        image: "/limbe8.jpg",
      },
      {
        name: "Experience Local Culture",
        description: "Immerse yourself in the rich cultural heritage of the region.",
        image: "/limbe9.jpg",
      },
    ],
    tours: [],
    weather: "Weather information coming soon.",
    gettingThere: "Transportation information coming soon.",
  }
}


export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationData(params.slug)

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image src="/logo.png" alt="CamTour Logo" width={120} height={80} className="h-12 w-auto" />
            </Link>
          </div>
          <MainNav />
          <div className="flex items-center gap-4">
            
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-3">
          <div className="container">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-gray-500 hover:text-green-700">
                Home
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <Link href="/destinations" className="text-gray-500 hover:text-green-700">
                Destinations
              </Link>
              <ChevronRight className="mx-2 h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-900">{destination.name}</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <Image
            src={destination.image || "/limb10.jpg"}
            alt={destination.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">{destination.name}</h1>
            <p className="mb-8 max-w-2xl text-lg">{destination.region}</p>
            <div className="flex space-x-4">
              <Button className="bg-green-700 hover:bg-green-800">Explore Tours</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                View Map
              </Button>
            </div>
          </div>
        </section>

        <div className="container py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="mb-6 grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                  <TabsTrigger value="tours">Tours</TabsTrigger>
                  <TabsTrigger value="practical">Practical Info</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold">About {destination.name}</h2>
                    <p className="text-gray-700">{destination.description}</p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">Highlights</h3>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {destination.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center rounded-lg border p-3">
                          <div className="mr-3 rounded-full bg-green-100 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="h-5 w-5 text-green-700"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-semibold">History</h3>
                    <p className="text-gray-700">{destination.history}</p>
                  </div>

                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=800&width=1600"
                      alt={`${destination.name} landscape`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </TabsContent>

                <TabsContent value="activities" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Things to Do in {destination.name}</h2>

                  <div className="space-y-8">
                    {destination.activities.map((activity, index) => (
                      <div key={index} className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="relative h-[250px] overflow-hidden rounded-lg">
                          <Image
                            src={activity.image || "/limbemap.png"}
                            alt={activity.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="mb-2 text-xl font-semibold">{activity.name}</h3>
                          <p className="text-gray-700">{activity.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="tours" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Tours in {destination.name}</h2>

                  {destination.tours.length > 0 ? (
                    <div className="space-y-6">
                      {destination.tours.map((tour) => (
                        <TourCard
                          key={tour.id}
                          title={tour.title}
                          image={tour.image}
                          price={tour.price}
                          duration={tour.duration}
                          rating={tour.rating}
                          reviews={tour.reviews}
                          location={tour.location}
                          description={tour.description}
                          highlights={tour.highlights} id={""}                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed p-8 text-center">
                      <h3 className="mb-2 text-lg font-semibold">No Tours Available Yet</h3>
                      <p className="mb-4 text-gray-600">
                        We're currently developing new tours for this destination. Check back soon!
                      </p>
                      <Button className="bg-green-700 hover:bg-green-800">Browse All Tours</Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="practical" className="space-y-6">
                  <h2 className="mb-4 text-2xl font-semibold">Practical Information</h2>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <Calendar className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Weather & Climate</h3>
                        </div>
                        <p className="text-gray-700">{destination.weather}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <MapPin className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Getting There</h3>
                        </div>
                        <p className="text-gray-700">{destination.gettingThere}</p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <Info className="mr-2 h-5 w-5 text-green-700" />
                          <h3 className="text-lg font-semibold">Local Tips</h3>
                        </div>
                        <ul className="list-inside list-disc space-y-2 text-gray-700">
                          <li>Learn a few basic French phrases as it's widely spoken</li>
                          <li>Respect local customs and traditions</li>
                          <li>Bargaining is expected in markets, but do so respectfully</li>
                          <li>Carry cash as credit cards may not be widely accepted</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="mr-2 h-5 w-5 text-green-700"
                          >
                            <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                          </svg>
                          <h3 className="text-lg font-semibold">Best Time to Visit</h3>
                        </div>
                        <p className="text-gray-700">
                          The dry season (November to February) offers the best weather conditions for visiting{" "}
                          {destination.name}. This period provides clearer skies, less rainfall, and more comfortable
                          temperatures for outdoor activities.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Map Location</h3>
                    <div className="relative h-[200px] overflow-hidden rounded-lg">
                      <Image
                        src="/MapofCameroon.png"
                        alt={`Map of ${destination.name}`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="outline" className="bg-white/80">
                          View Larger Map
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Nearby Destinations</h3>
                    <div className="space-y-4">
                      {["Douala", "Buea", "Kribi"].map((nearby, index) => (
                        <Link
                          key={index}
                          href={`/destinations/${nearby.toLowerCase()}`}
                          className="flex items-center rounded-lg border p-3 transition-colors hover:bg-green-50"
                        >
                          <div className="mr-3 h-10 w-10 overflow-hidden rounded-md">
                            <Image
                              src="/dest1.jpg"
                              alt={nearby}
                              width={40}
                              height={40}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <span className="font-medium">{nearby}</span>
                          <ChevronRight className="ml-auto h-5 w-5 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="mb-4 text-lg font-semibold">Need Help Planning?</h3>
                    <p className="mb-4 text-gray-700">
                      Our travel experts can help you create the perfect itinerary for your visit to {destination.name}.
                    </p>
                    <Button className="w-full bg-green-700 hover:bg-green-800">Contact Us</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Related Destinations */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold">You Might Also Like</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {["Kribi", "Douala", "Mount Cameroon"].map((related, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src="/dest2.jpg"
                      alt={related}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 text-xl font-semibold">{related}</h3>
                    <p className="mb-4 text-gray-600 line-clamp-2">
                      Discover the beauty and attractions of {related}, another amazing destination in Cameroon.
                    </p>
                    <Link href={`/destinations/${related.toLowerCase().replace(/ /g, "-")}`}>
                      <Button className="w-full bg-green-700 hover:bg-green-800">Explore</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
