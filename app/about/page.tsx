import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function AboutPage() {
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
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden">
          <Image
            src="/fako.jpg"
            alt="About CamTour"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">About CamTour</h1>
            <p className="mb-8 max-w-2xl text-lg">
              Your trusted partner for authentic and unforgettable experiences in Cameroon
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container py-12">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  CamTour was founded in 2020 by a group of passionate Cameroonian travel enthusiasts who saw the need
                  for authentic, responsible tourism experiences in their beautiful country. What began as a small
                  operation offering guided hikes up Mount Cameroon has grown into Cameroon&apos;s premier tour operator.
                </p>
                <p>
                  Our mission is to showcase the incredible diversity of Cameroon - often called &quot;Africa in Miniature&quot; -
                  while supporting local communities and preserving the natural environment. We believe that tourism,
                  when done right, can be a powerful force for positive change.
                </p>
                <p>
                  Today, CamTour offers a wide range of experiences across Cameroon, from wildlife safaris to cultural
                  immersions, beach getaways to mountain adventures. What hasn&apos;t changed is our commitment to
                  authenticity, sustainability, and creating unforgettable memories for our guests.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=800&width=800" alt="CamTour team" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">Our Values</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Authenticity",
                  description:
                    "We provide genuine experiences that showcase the real Cameroon, beyond tourist clichés. Our tours are designed to connect travelers with local communities and traditions.",
                  icon: (
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
                      className="h-8 w-8 text-green-700"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  ),
                },
                {
                  title: "Sustainability",
                  description:
                    "We are committed to environmentally responsible tourism that preserves Cameroon's natural beauty for future generations. We minimize our ecological footprint and support conservation efforts.",
                  icon: (
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
                      className="h-8 w-8 text-green-700"
                    >
                      <path d="M2 22a8 8 0 0 1 8-8" />
                      <path d="M2 22a8 8 0 0 0 8-8" />
                      <path d="M9 16V8a3 3 0 0 0-6 0v8" />
                      <path d="M14 16V8a3 3 0 0 1 6 0v8" />
                      <path d="M14 16a8 8 0 0 1 8 8" />
                      <path d="M14 16a8 8 0 0 0 8 8" />
                    </svg>
                  ),
                },
                {
                  title: "Community Impact",
                  description:
                    "We believe tourism should benefit local communities. We employ local guides, partner with local businesses, and invest in community development projects across Cameroon.",
                  icon: (
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
                      className="h-8 w-8 text-green-700"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
              ].map((value, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex flex-col items-center p-0 text-center">
                    <div className="mb-4 rounded-full bg-green-100 p-4">{value.icon}</div>
                    <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              {
                name: "John Paul",
                role: "Founder & CEO",
                bio: "Current student at the ICT university bachelor in SEN with years of experience in Cameroon's tourism industry. Took care of the modeling part of the project(Uml daigrams), made this about page and signup and login pages for both client and admin sites",
                image: "/jp.jpg",
              },
              {
                name: "Gnowa Kevin",
                role: "Operations Director",
                bio: "Current student at the ICT university bachelor in Cybersecurity ensuring smooth experiences for all our guests. Coordinated work . gave lauout of all pages from wich team members made the other pages. Took care of the Tours page and made sure proper linking to backend.",
                image: "/kai.jpg",
              },
               {
                name: "Asobo Khan",
                role: "Cultural Experience Manager",
                bio: "Current student at the ICT university bachelor in SEN wuth experience in respectable accomodation. Designed destination page and added amazing tours to the tours. Took care of the management of sports activities in several chat groups",
                image: "/ak.jpg",
              },
             
              {
                name: "Ayuk Etang",
                role: "Cultural Experience Manager",
                bio: "Current student at the ICT university bachelor in SEN dedicated to authentic cultural exchange and community partnerships. Designed destination page and added amazing tours to the tours",
                image: "/feev.jpg",
              },
               {
                name: "Fakam Fankam",
                role: "Head Guide",
                bio: "Current student at the ICT university bachelor in SEN with extensive knowledge of Cameroon's landscapes. Helped in the development of the various pages.",
                image: "/placeholder.svg?height=400&width=400",
              },
             
            ].map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm font-medium text-green-700">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-green-50 py-12">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold">What Our Clients Say</h2>
            <div className="mx-auto max-w-4xl">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-6 flex justify-center">
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
                    className="h-12 w-12 text-green-700 opacity-20"
                  >
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
                <blockquote className="mb-6 text-center text-lg font-medium italic text-gray-700">
                  &quot;Our experience with CamTour was nothing short of amazing. From the moment we arrived in Cameroon
                  until our departure, everything was perfectly organized. Our guide was knowledgeable, friendly, and
                  went above and beyond to make our trip special. We saw incredible wildlife, met wonderful people, and
                  created memories that will last a lifetime.&quot;
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold">Michael & Sarah Thompson</p>
                  <p className="text-sm text-gray-500">Wildlife Safari Tour, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="container py-12">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Partners</h2>
          <p className="mx-auto mb-8 max-w-2xl text-center text-gray-700">
            We collaborate with these organizations to promote sustainable tourism and conservation in Cameroon.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((partner) => (
              <div key={partner} className="flex items-center justify-center">
                <div className="h-20 w-40 rounded-lg bg-gray-100 p-4">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-gray-400">Partner Logo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-green-700 via-red-700 to-yellow-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Explore Cameroon?</h2>
            <p className="mb-8 mx-auto max-w-2xl">
              Let us help you plan the perfect Cameroonian adventure tailored to your interests and preferences.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button className="bg-white text-green-700 hover:bg-gray-100">Browse Tours</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/20">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
















/*
The provided code defines a React component for an "About" page in a Next.js application, which is structured to present information about a travel company called CamTour. The code begins with several import statements that bring in necessary components and libraries. The `Image` component from Next.js is used for optimized image loading, while the `Link` component facilitates client-side navigation. The `Button`, `Card`, and `CardContent` components are imported from a UI library, likely for consistent styling across the application. Additionally, `MainNav` and `Footer` components are imported to provide navigation and footer functionality on the page.

The `AboutPage` function is defined as the default export of the module. Inside this function, the return statement contains JSX that structures the layout of the page. The outermost `div` uses flexbox to create a column layout that spans the full height of the screen. The header section is sticky, ensuring it remains at the top during scrolling, and includes a logo linked to the home page, navigation links, and a placeholder for additional elements.

The main content area is divided into several sections. The first section is a hero section featuring a background image with a dark overlay, a title, and a brief description of CamTour. Following this, the "Our Story" section provides a narrative about the company's founding, mission, and growth, accompanied by an image representing the team. The "Our Values" section highlights the company's core principles, such as authenticity, sustainability, and community impact, using cards to present each value with an associated icon.

The "Meet Our Team" section introduces key team members, showcasing their roles and bios, along with their images. The "Testimonials" section features a client review, emphasizing the positive experiences of past customers. The "Our Partners" section lists organizations that collaborate with CamTour to promote sustainable tourism. Finally, a call-to-action (CTA) section encourages visitors to explore Cameroon, offering buttons for browsing tours and contacting the company.

The layout is responsive, utilizing CSS utility classes for styling, ensuring a visually appealing and user-friendly experience across different devices. The page concludes with a footer component that likely contains additional links or information. Overall, this code effectively creates an engaging and informative About page for the CamTour website, highlighting the company's mission, values, team, and offerings.*/
