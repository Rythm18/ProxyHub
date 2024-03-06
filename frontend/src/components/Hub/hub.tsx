/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iwdb4E6AMht
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SVGProps } from "react"
import { JSX } from "react/jsx-runtime"

export default function Component() {
  return (
    <div key="1" className="bg-[#1a1a1a] min-h-screen">
      <nav className="flex justify-between items-center p-4 bg-[#333] text-white">
        <div className="flex items-center space-x-4">
          <FlagIcon className="text-white h-8 w-8" />
          <span className="font-bold text-lg">Brand</span>
        </div>
        <div className="flex items-center justify-center flex-1 space-x-6">
          <a className="hover:text-gray-300" href="#">
            Home
          </a>
          <a className="hover:text-gray-300" href="#">
            Services
          </a>
          <a className="hover:text-gray-300" href="#">
            About
          </a>
          <a className="hover:text-gray-300" href="#">
            Contact
          </a>
        </div>
        <div>
          <button className="bg-[#333] hover:bg-gray-700 text-white font-medium py-2 px-4 rounded">Logout</button>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        <Card className="bg-[#333] text-white">
          <CardContent className="pt-7">
            <CardTitle className="text-2xl font-bold">UI Design</CardTitle>
            <CardDescription className="flex gap-5 text-xl text-slate ">
                <p>Class:</p> <p>Branch:</p> <p>Semester:</p> <p>Date and Time: </p>
            </CardDescription>
            <Button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#333] text-white">
          <CardContent className="pt-7">
            <CardTitle>UX Design</CardTitle>
            <CardDescription>
                
            </CardDescription>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#333] text-white">
          <CardContent>
            <CardTitle>UX Research</CardTitle>
            <CardDescription>We continuously user test to ensure we are addressing user needs.</CardDescription>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#333] text-white">
          <CardContent>
            <CardTitle>Interaction & Motion</CardTitle>
            <CardDescription>Providing moments of delight</CardDescription>
            <Button className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#333] text-white">
          <CardContent>
            <CardTitle>UX Writing</CardTitle>
            <CardDescription>Wording things</CardDescription>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
        <Card className="bg-[#333] text-white">
          <CardContent>
            <CardTitle>Prototyping</CardTitle>
            <CardDescription>We love to progress our designs to a state that feels real</CardDescription>
            <Button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 rounded">
              Learn More
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function FlagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}
