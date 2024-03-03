/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ytVKbC75sUX
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div>
      <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <a className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray px-4 py-2 text-2xl font-bold " href="#">
              <MountainIcon className="h-6 w-6" />
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
        <a className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-gray px-4 py-2 text-3xl font-bold mr-5" href="#">
        <MountainIcon className="h-9 w-9 mr-5" />
          ProxyHub
        </a>
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {/* <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                
              </a>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <a
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-xl font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                href="#"
              >
                
              </a>
            </NavigationMenuLink> */}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="ml-auto">
          <Button className="text-lg h-15 w-40"><a href="/login">Login</a></Button>
        </div>
      </header>
    </div>
  )
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}
