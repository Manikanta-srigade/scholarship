import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function FindScholarship() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] px-4 py-8 text-white">
      <div className="container mx-auto max-w-6xl">
        <h1 className="mb-8 text-3xl font-bold">Available Scholarships</h1>

        <div className="mb-8 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="pl-10" placeholder="Search scholarships..." type="search" />
          </div>
          <Button variant="secondary">Filter</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {scholarships.map((scholarship) => (
            <Card key={scholarship.id} className="bg-[#252b3d] text-white">
              <CardHeader>
                <CardTitle>{scholarship.name}</CardTitle>
                <CardDescription className="text-gray-400">{scholarship.institution}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">{scholarship.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm text-violet-300">
                    {scholarship.amount} ETH
                  </span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">
                    {scholarship.deadline}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-violet-500 hover:bg-violet-600">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

const scholarships = [
  {
    id: 1,
    name: "Blockchain Development Scholarship",
    institution: "Web3 University",
    description: "Full scholarship for students interested in blockchain development and smart contracts.",
    amount: "2.5",
    deadline: "30 days left",
  },
  {
    id: 2,
    name: "DeFi Innovation Grant",
    institution: "DeFi Academy",
    description: "Supporting students who want to build the future of decentralized finance.",
    amount: "1.8",
    deadline: "15 days left",
  },
  {
    id: 3,
    name: "Crypto Economics Scholarship",
    institution: "Blockchain Institute",
    description: "For students pursuing research in cryptocurrency economics and market dynamics.",
    amount: "3.0",
    deadline: "45 days left",
  },
]

