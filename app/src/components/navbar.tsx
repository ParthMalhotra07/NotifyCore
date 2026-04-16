"use client"

import { MaxWidthWrapper } from "./max-width-wrapper"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const Navbar=()=>{
    const user = false

    return (
        <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-lg transition-all shadow-sm">
            <MaxWidthWrapper>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="font-bold text-xl">
                        Ping<span className="text-blue-600">Panda</span>
                    </Link>
                    <div className="flex items-center gap-3 sm:gap-4">
                        {user ? (
                            <>
                                <button
                                    type="button"
                                    className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                                >
                                    Sign Out
                                </button>
                                <Link
                                    href="/dashboard"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md"
                                >
                                    Dashboard
                                    <ArrowRight className="size-4 shrink-0" />
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="#pricing"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition-all hover:border-blue-200 hover:bg-blue-100 hover:text-blue-800"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/sign-in"
                                    className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md"
                                >
                                    Sign in
                                </Link>
                                <Link
                                    href="/sign-up"
                                    className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:from-blue-700 hover:to-indigo-700 hover:shadow-md"
                                >
                                    Sign up
                                    <ArrowRight className="size-4 shrink-0" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}