// Sample tours data for populating the Appwrite database
// This data can be used to create documents in your tours collection

export const sampleTours = [
  {
    title: "Mount Cameroon Hiking Adventure",
    image: "/placeholder.svg?height=300&width=400",
    price: 85000,
    duration: "2 days",
    rating: 4.8,
    reviews: 124,
    location: "Buea",
    tag: "adventure",
    description: "Climb West Africa's highest peak with expert guides. Experience breathtaking views and diverse ecosystems.",
    highlights: [
      "Summit West Africa's highest mountain",
      "Experience diverse ecological zones",
      "Professional mountain guides",
      "Camping equipment included"
    ]
  },
  {
    title: "Limbe Wildlife Centre & Black Sand Beaches",
    image: "/placeholder.svg?height=300&width=400",
    price: 45000,
    duration: "1 day",
    rating: 4.7,
    reviews: 98,
    location: "Limbe",
    tag: "wildlife",
    description: "Discover Limbe's famous wildlife center and relax on unique black sand beaches. Includes hotel pickup and lunch.",
    highlights: [
      "Visit the Limbe Wildlife Centre and see rescued primates",
      "Relax on the volcanic black sand beaches",
      "Enjoy a traditional Cameroonian lunch",
      "Learn about local conservation efforts"
    ]
  },
  {
    title: "Kribi Waterfall & Beach Excursion",
    image: "/placeholder.svg?height=300&width=400",
    price: 55000,
    duration: "1 day",
    rating: 4.9,
    reviews: 156,
    location: "Kribi",
    tag: "beach",
    description: "Visit the spectacular Lobe Falls where the river meets the ocean and enjoy time on Kribi's pristine beaches.",
    highlights: [
      "See the unique Lobe Falls where water cascades directly into the ocean",
      "Relax on Kribi's beautiful white sand beaches",
      "Optional boat ride to get closer to the falls",
      "Fresh seafood lunch at a local restaurant"
    ]
  },
  {
    title: "Yaoundé Cultural Heritage Tour",
    image: "/placeholder.svg?height=300&width=400",
    price: 35000,
    duration: "1 day",
    rating: 4.6,
    reviews: 87,
    location: "Yaoundé",
    tag: "cultural",
    description: "Explore Cameroon's capital city, including government buildings, museums, and cultural landmarks.",
    highlights: [
      "Visit the National Museum of Yaoundé",
      "See the Unity Palace and government district",
      "Explore the Central Market",
      "Panoramic views from Mont Fébé"
    ]
  },
  {
    title: "Waza National Park Safari",
    image: "/placeholder.svg?height=300&width=400",
    price: 95000,
    duration: "3 days",
    rating: 4.9,
    reviews: 112,
    location: "Far North",
    tag: "wildlife",
    description: "Experience the incredible wildlife of Waza National Park, home to elephants, lions, giraffes, and numerous bird species.",
    highlights: [
      "Game drives in open safari vehicles",
      "Professional wildlife guides",
      "Comfortable accommodation in safari lodges",
      "All meals and refreshments included"
    ]
  },
  {
    title: "Foumban Royal Palace & Artisan Tour",
    image: "/placeholder.svg?height=300&width=400",
    price: 50000,
    duration: "1 day",
    rating: 4.8,
    reviews: 64,
    location: "Foumban",
    tag: "cultural",
    description: "Explore the historic Foumban Royal Palace and meet local artisans known for their exceptional craftsmanship.",
    highlights: [
      "Tour the Foumban Royal Palace and Museum",
      "Meet local artisans and see traditional crafts being made",
      "Shop for authentic Cameroonian art and crafts",
      "Learn about the history of the Bamoun Kingdom"
    ]
  },
  {
    title: "Korup National Park Expedition",
    image: "/placeholder.svg?height=300&width=400",
    price: 100000,
    duration: "4 days",
    rating: 4.7,
    reviews: 42,
    location: "Southwest",
    tag: "adventure",
    description: "Explore one of Africa's oldest and most diverse rainforests with expert guides. Spot rare primates and birds.",
    highlights: [
      "Guided hikes through pristine rainforest",
      "Wildlife spotting including rare primates",
      "Camping in the heart of the forest",
      "Learn about conservation efforts"
    ]
  },
  {
    title: "Bamenda Highlands Cultural Experience",
    image: "/placeholder.svg?height=300&width=400",
    price: 75000,
    duration: "2 days",
    rating: 4.6,
    reviews: 53,
    location: "Northwest",
    tag: "cultural",
    description: "Immerse yourself in the rich culture of the Bamenda Highlands. Visit traditional villages and witness cultural performances.",
    highlights: [
      "Visit traditional Bafut and Bali-Nyonga palaces",
      "Experience authentic cultural performances",
      "Meet local craftspeople and artisans",
      "Stunning mountain scenery and landscapes"
    ]
  }
]

// Instructions for using this data:
// 1. Create a database in your Appwrite console named 'camtour-db'
// 2. Create a collection named 'tours' with the following attributes:
//    - title (string, required)
//    - image (string, optional)
//    - price (number, required)
//    - duration (string, required)
//    - rating (number, optional)
//    - reviews (number, optional)
//    - location (string, required)
//    - tag (string, required)
//    - description (string, required)
//    - highlights (array of strings, optional)
// 3. Use the Appwrite console or SDK to create documents using this sample data
