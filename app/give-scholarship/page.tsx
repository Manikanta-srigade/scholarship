import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function GiveScholarship() {
  return (
    <div className="min-h-screen bg-[#1a1f2e] px-4 py-8 text-white">
      <div className="container mx-auto max-w-2xl">
        <Card className="bg-[#252b3d] text-white">
          <CardHeader>
            <CardTitle>Create a Scholarship</CardTitle>
            <CardDescription className="text-gray-400">
              Fill out the form below to create a new scholarship opportunity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Scholarship Name</Label>
                <Input id="name" placeholder="Enter scholarship name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="institution">Institution Name</Label>
                <Input id="institution" placeholder="Enter your institution name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the scholarship opportunity" required rows={4} />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (ETH)</Label>
                  <Input id="amount" min="0" placeholder="0.00" step="0.01" type="number" required />
                </div>

                <div className="space-y-2">
                  <Label>Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 days</SelectItem>
                      <SelectItem value="30">30 days</SelectItem>
                      <SelectItem value="45">45 days</SelectItem>
                      <SelectItem value="60">60 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea id="requirements" placeholder="List the eligibility requirements" required rows={4} />
              </div>

              <Button className="w-full bg-violet-500 hover:bg-violet-600" type="submit">
                Create Scholarship
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

