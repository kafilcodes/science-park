import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Info, FlaskConical, Image as ImageIcon, MessageSquareQuote, Youtube } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/5 backdrop-blur-xl py-12">
            <div className="container max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-5 text-center md:text-left">
                {/* Brand / About - Spans 2 columns on large screens */}
                <div className="space-y-4 flex flex-col items-center md:items-start lg:col-span-2">
                    <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-teal-500/50 bg-white/10 p-1">
                            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
                        </div>
                        <span className="font-bold text-xl text-teal-900">Science Park</span>
                    </div>
                    <p className="text-sm text-muted-foreground max-w-sm mx-auto md:mx-0 leading-relaxed">
                        {siteConfig.description}
                    </p>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-4 items-center md:items-start">
                    <h3 className="font-bold text-lg text-teal-900">Quick Links</h3>
                    <nav className="flex flex-col gap-3 text-sm text-muted-foreground items-center md:items-start">
                        <Link href="#about" className="hover:text-teal-600 transition-colors flex items-center gap-2">About Us</Link>
                        <Link href="#exhibits" className="hover:text-teal-600 transition-colors flex items-center gap-2">Exhibits</Link>
                        <Link href="#gallery" className="hover:text-teal-600 transition-colors flex items-center gap-2">Gallery</Link>
                        <Link href="#news" className="hover:text-teal-600 transition-colors flex items-center gap-2">News & Updates</Link>
                        <Link href="#feed" className="hover:text-teal-600 transition-colors flex items-center gap-2">Social Feed</Link>
                        <Link href="#contact" className="hover:text-teal-600 transition-colors flex items-center gap-2">Contact</Link>
                    </nav>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-lg text-teal-900">Contact Us</h3>
                    <div className="space-y-3 text-sm text-muted-foreground flex flex-col items-center md:items-start">
                        <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-teal-600 shrink-0" />
                            <span>Rudri Road, Dhamtari<br />Chhattisgarh</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-teal-600 shrink-0" />
                            +91 123 456 7890
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-teal-600 shrink-0" />
                            info@sciencepark.gov.in
                        </p>
                    </div>
                </div>

                {/* Social Links */}
                <div className="space-y-4 flex flex-col items-center md:items-start">
                    <h3 className="font-bold text-lg text-teal-900">Follow Us</h3>
                    <div className="flex gap-3">
                        <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                            <Facebook className="h-4 w-4" />
                        </Link>
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                            <Twitter className="h-4 w-4" />
                        </Link>
                        <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                            <Instagram className="h-4 w-4" />
                        </Link>
                        <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-transparent rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                            <Linkedin className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-12 pt-8 border-t border-teal-100 text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Science Park Dhamtari. All rights reserved.</p>
                <div className="mt-4 flex justify-center gap-4 text-sm">
                    <Link href="#" className="hover:text-teal-600">Privacy Policy</Link>
                    <Link href="#" className="hover:text-teal-600">Terms of Service</Link>
                </div>
            </div>

        </footer >
    )
}
