"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Home, Info, FlaskConical, Image as ImageIcon, Map as MapIcon, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Marquee } from "@/components/ui/Marquee"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
            {/* Marquee Section */}
            <div className="w-full bg-teal-500/80 text-white border-b border-white/10">
                <Marquee text="Welcome to Science Park Dhamtari! Explore the wonders of science and nature. | Opening Hours: 10:00 AM - 6:00 PM | Special Exhibits on Weekends!" speed={3} className="py-2 font-medium text-sm  tracking-wide" />
            </div>

            {/* Main Navbar */}
            <div className="w-full px-4 pt-4 flex justify-center">
                <div
                    className={cn(
                        "w-full max-w-7xl rounded-full border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 px-6 py-2 flex items-center justify-between",
                        isScrolled ? "bg-teal-500/90 shadow-xl border-white/30" : "bg-teal-500/90 "
                    )}
                >
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white/50 group-hover:border-white transition-colors bg-white/20 p-1">
                            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col leading-none justify-center">
                            <span className="text-m font-bold text-white tracking-tight drop-shadow-sm">Science</span>
                            <span className="text-sm font-semibold text-teal-50 tracking-wide -mt-0.5">Park</span>
                            <span className="text-[10px] text-teal-100 uppercase tracking-widest -mt-0.5">Dhamtari</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white">
                        <Link href="#about" className="flex items-center gap-2 transition-colors hover:text-teal-100 hover:scale-105">
                            <Info className="h-4 w-4" /> About
                        </Link>
                        <Link href="#exhibits" className="flex items-center gap-2 transition-colors hover:text-teal-100 hover:scale-105">
                            <FlaskConical className="h-4 w-4" /> Exhibits
                        </Link>
                        <Link href="#gallery" className="flex items-center gap-2 transition-colors hover:text-teal-100 hover:scale-105">
                            <ImageIcon className="h-4 w-4" /> Gallery
                        </Link>
                        <Link href="#how-to-reach" className="flex items-center gap-2 transition-colors hover:text-teal-100 hover:scale-105">
                            <MapIcon className="h-4 w-4" /> How to Reach
                        </Link>
                        <Link href="#contact" className="flex items-center gap-2 transition-colors hover:text-teal-100 hover:scale-105">
                            <Phone className="h-4 w-4" /> Contact
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Button asChild variant="default" size="sm" className="rounded-full px-6 bg-white text-teal-600 hover:bg-teal-50 shadow-lg transition-all hover:scale-105 border-none font-semibold">
                            <Link href="#contact" className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" /> Plan Visit
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-full text-white hover:bg-white/10 hover:text-teal-400">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="h-screen w-full border-none bg-teal-950/95 backdrop-blur-xl flex flex-col items-center justify-center text-white">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-8 items-center text-center">
                                <Link href="#about" className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <Info className="h-6 w-6" /> About
                                </Link>
                                <Link href="#exhibits" className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <FlaskConical className="h-6 w-6" /> Exhibits
                                </Link>
                                <Link href="#gallery" className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <ImageIcon className="h-6 w-6" /> Gallery
                                </Link>
                                <Link href="#how-to-reach" className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <MapIcon className="h-6 w-6" /> How to Reach
                                </Link>
                                <Link href="#contact" className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <Phone className="h-6 w-6" /> Contact
                                </Link>
                                <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg bg-teal-500  text-white border-none">
                                    <Link href="#contact">
                                        <Calendar className="mr-2 h-5 w-5" /> Plan Visit
                                    </Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
