"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Home, Info, FlaskConical, Image as ImageIcon, Map as MapIcon, Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { Marquee } from "@/components/ui/Marquee"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { MessageSquareQuote } from "lucide-react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

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
            <div className="w-full bg-teal-600 text-white border-b border-white/10">
                <Marquee text="Welcome to Science Park Dhamtari! Explore the wonders of science and nature. | Ticket Price: ₹10 per person | Opening Hours: 10:00 AM - 6:00 PM | Special Exhibits on Weekends!" speed={3} className="py-2 font-medium text-sm tracking-wide" />
            </div>

            {/* Main Navbar */}
            <div className="w-full px-4 pt-4 flex justify-center">
                <div
                    className={cn(
                        "w-full max-w-7xl rounded-full border border-white/20 backdrop-blur-md shadow-sm transition-all duration-300 px-6 py-1.5 flex items-center justify-between",
                        isScrolled ? "bg-white/90 shadow-md border-teal-100" : "bg-white/80"
                    )}
                >
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 z-50">
                            <div className="relative h-10 w-10">
                                <Image src="/logo.png" alt="Science Park Logo" fill className="object-contain" />
                            </div>
                            <span className="font-bold text-xl text-teal-900 block">Science Park</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
                        <Link href="#about" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <Info className="h-4 w-4 hidden xl:block" /> About
                        </Link>
                        <Link href="#exhibits" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <FlaskConical className="h-4 w-4 hidden xl:block" /> Exhibits
                        </Link>
                        <Link href="#gallery" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <ImageIcon className="h-4 w-4 hidden xl:block" /> Gallery
                        </Link>
                        <Link href="#testimonials" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <MessageSquareQuote className="h-4 w-4 hidden xl:block" /> Testimonials
                        </Link>
                        <Link href="#how-to-reach" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <MapIcon className="h-4 w-4 hidden xl:block" /> How to Reach
                        </Link>
                        <Link href="#contact" className="flex items-center gap-2 transition-colors text-teal-900 hover:text-teal-600 hover:scale-105 font-medium">
                            <Phone className="h-4 w-4 hidden xl:block" /> Contact
                        </Link>
                    </nav>

                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="#contact">
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as="button"
                                className="bg-teal-600 text-white flex items-center space-x-2 px-4 py-2 xl:px-6 hover:scale-105 active:scale-95 transition-transform duration-200"
                            >
                                <span className="text-center font-medium">
                                    Plan Visit
                                </span>
                                <Calendar className="h-4 w-4 ml-2 hidden xl:block" />
                            </HoverBorderGradient>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden rounded-full text-teal-900 hover:bg-teal-50 hover:text-teal-600">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="top" className="h-screen w-full border-none bg-teal-950/95 backdrop-blur-xl flex flex-col items-center justify-center text-white">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <div className="flex flex-col gap-8 items-center text-center">
                                <Link href="#about" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <Info className="h-6 w-6" /> About
                                </Link>
                                <Link href="#exhibits" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <FlaskConical className="h-6 w-6" /> Exhibits
                                </Link>
                                <Link href="#gallery" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <ImageIcon className="h-6 w-6" /> Gallery
                                </Link>
                                <Link href="#testimonials" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <MessageSquareQuote className="h-6 w-6" /> Testimonials
                                </Link>
                                <Link href="#how-to-reach" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <MapIcon className="h-6 w-6" /> How to Reach
                                </Link>
                                <Link href="#contact" onClick={() => setIsOpen(false)} className="flex items-center gap-3 text-2xl font-medium hover:text-teal-400 transition-colors">
                                    <Phone className="h-6 w-6" /> Contact
                                </Link>
                                <Button asChild size="lg" className="mt-8 rounded-full px-8 text-lg bg-teal-500  text-white border-none">
                                    <Link href="#contact" onClick={() => setIsOpen(false)}>
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
