import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import MainNav from "@/components/main-nav"
import FeaturedTours from "@/components/featured-tours"
import PopularDestinations from "@/components/popular-destinations"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.png" alt="CamTour Logo" width={120} height={80} className="h-12 w-auto" />
          </div>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Button className="bg-green-700 hover:bg-green-800">Sign Up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Tours */}
        <section className="container py-16">
          <h2 className="mb-8 text-3xl font-bold">Featured Tours</h2>
          <FeaturedTours />
        </section>

        {/* Popular Destinations */}
        <section className="bg-green-50 py-16">
          <div className="container">
            <h2 className="mb-8 text-3xl font-bold">Popular Destinations</h2>
            <PopularDestinations />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="container py-16">
          <h2 className="mb-12 text-center text-3xl font-bold">Why Choose CamTour</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-2 border-green-100">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-green-100 p-3">
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
                    className="h-6 w-6 text-green-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Local Expertise</h3>
                <p className="text-gray-600">Tours designed by locals who know Cameroon's hidden gems</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-red-100">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-red-100 p-3">
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
                    className="h-6 w-6 text-red-700"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Authentic Experiences</h3>
                <p className="text-gray-600">Immerse yourself in genuine Cameroonian culture and traditions</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-yellow-100">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-yellow-100 p-3">
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
                    className="h-6 w-6 text-yellow-600"
                  >
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z" />
                    <path d="m3 3 18 18" />
                    <path d="M10.5 13.5 3 21" />
                    <path d="m14 10-3.5 3.5" />
                    <path d="M10.5 13.5 14 17" />
                    <path d="M14 10 21 3" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Best Price Guarantee</h3>
                <p className="text-gray-600">We promise the best experiences at competitive prices</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="bg-gradient-to-r from-green-700 via-red-700 to-yellow-600 py-16 text-white">
          <div className="container text-center">
            <h2 className="mb-4 text-3xl font-bold">Join Our Newsletter</h2>
            <p className="mb-8 mx-auto max-w-2xl">
              Subscribe to receive special offers, travel tips, and insider information about Cameroon's best
              destinations
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Your email address" className="bg-white text-black" />
              <Button className="bg-yellow-600 hover:bg-yellow-700">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
