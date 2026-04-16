import { MaxWidthWrapper } from "./max-width-wrapper"
import Link from "next/link"
import { SignOutButton } from "@clerk/nextjs"

export const Navbar=()=>{
    const user=false;
    return (
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold text-xl">
                        Ping<span className="text-blue-600">Panda</span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <SignOutButton>
                                <button className="rounded-md border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100">
                                    Sign Out
                                </button>
                            </SignOutButton>
                        ) : null}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}