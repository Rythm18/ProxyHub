/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iwdb4E6AMht
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardContent, Card } from "@/components/ui/card"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SVGProps, useEffect, useState } from "react"
import { JSX } from "react/jsx-runtime"
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface UserData {
  user: string;
  class: string;
  branch: string;
  semester: string;
  time: string;
}

axios.defaults.withCredentials = true;

export default function Component() {
  const [userData, setUserData] = useState<UserData[]>([]);

  const requestData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/requestsUsers');
      console.log(response);
      if (response.status === 200) {
        console.log('Request successful');
        setUserData(response.data);
      } else if (response.status === 401) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Error during Request:', error);
    }
  };

  useEffect(() => {
    requestData();
  }, []);


  const navigate = useNavigate();
  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:3000/logout');
  
  //     if (response.status === 200) {
  //       navigate('/');
  //     } else {
  //       console.error('Logout failed');
  //     }
  //   } catch (error) {
  //     console.error('Error during logout:', error);
  //   }
  // };



  return (

    <div key="1" className="bg-[ rgb(2 6 23)] min-h-screen md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <a className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray px-4 py-2 text-2xl font-bold " href="#">
              ProxyHub
            </a>
            <div className="grid gap-2 py-6">
              <a className="flex w-full items-center py-4 text-lg font-bold" href="#">
                About
              </a>
              <a className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Pricing
              </a>
              <a className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                Contact
              </a>
            </div>
          </SheetContent>
        </Sheet>
      <nav className="flex justify-between items-center p-4 bg-[#333] text-white hidden lg:flex">
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
          <button  className="bg-[#333] hover:bg-gray-700 text-white font-medium py-2 px-4 rounded">Logout</button>
        </div>
      </nav>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {userData.map((data, index) => (
          <Card key={index} className="bg-[#333] text-white">
            <CardContent className="pt-7">
              <CardTitle className="text-xl font-bold mb-2">{data.user}</CardTitle>
              <CardDescription className="flex gap-5 text-xl text-slate">
                <div className="sm:flex sm:flex-wrap">
                  <div className="sm:w-1/2">
                    <p className="sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Class: {data.class}</p>
                    <p className="sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Branch: {data.branch}</p>
                  </div>
                  <div className="sm:w-1/2">
                    <p className="sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Semester: {data.semester}</p>
                    <p className="sm:text-lg md:text-lg lg:text-xl xl:text-2xl">Time: {data.time}</p>
                  </div>
                </div>
              </CardDescription>
              <Button className="mt-3 bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded">
                Request
              </Button>
            </CardContent>
          </Card>
        ))}
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
