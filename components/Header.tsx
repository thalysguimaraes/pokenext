import Link from "next/link"
import Container from "./ui/container"
import * as React from "react"
import { ModeToggle } from "./mode-toggle"


const Header = () => {
  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                <div className="flex items-center">
                    <Link href="/" className="ml-4 lg:ml-0">
                        <h1 className="text-xl font-medium">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 inline-block mr-2"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="none"
                            >
                                <circle cx="12" cy="12" r="10" />
                            </svg>
                            pokenext
                        </h1>
                    </Link>
                </div>
                <ModeToggle />
            </div>
        </Container>

    </header>
  )
}

export default Header