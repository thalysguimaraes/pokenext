import Link from "next/link"
import Container from "./ui/container"
import * as React from "react"
import Image from "next/image"


const Footer = () => {
  return (
    <footer className="sm:flex sm:justify-between py-3 px-4 border-t">
        <Container>
            <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
                <div className="flex items-center">
                        <p className="text-xs text-slate-400">
                            made in 2023 for studying purposes using nextjs and tailwindcss
                        </p>
                </div>
                <div className="flex items-center gap-2">
                <Link href="https://thalys.design">
                <p className="text-xs">thalys.design</p>
                </Link>
                <Image src="/thalys.jpeg" alt="Image description" width={30} height={30} style={{ borderRadius: '50%' }} />
                </div>
            </div>
        </Container>

    </footer>
  )
}

export default Footer