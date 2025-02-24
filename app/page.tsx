import { Wallet2, GraduationCap, Facebook, Twitter, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <nav className="flex items-center justify-between p-6">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            ScholarChain
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            About Us
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <Facebook className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Facebook</span>
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <Twitter className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Twitter</span>
          </Button>
          <Button variant="ghost" className="text-gray-300 hover:text-white">
            <Instagram className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Instagram</span>
          </Button>
          <Button variant="outline" className="hidden sm:flex">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
            <Wallet2 className="h-5 w-5 mr-2" />
            Connect Wallet
          </Button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Empowering
              </span>
              <br />
              <span className="text-white">education through</span>
              <br />
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
                blockchain.
              </span>
            </h1>
            <p className="text-gray-300 text-xl">
              Sign in to open the gateway of Scholarships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 h-12 px-8 text-lg">
              <Link href="/find-scholarship">Find Scholarship</Link>
              </Button>
              <Button variant="outline" className="h-12 px-8 text-lg">
              <Link href="/give-scholarship">Give Scholarship</Link>
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="w-full aspect-square rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 backdrop-blur-3xl">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Scholarship Platform Interface"
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

