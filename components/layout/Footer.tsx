import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Info, FlaskConical, Image as ImageIcon } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black/5 backdrop-blur-xl py-12">
            <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-teal-500/50 bg-white/10 p-1">
                            <img src="/logo.png" alt="Logo" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex flex-col leading-none justify-center">
                            <span className="text-m font-bold text-teal-500 tracking-tight">Science</span>
                            <span className="text-sm font-semibold text-teal-400 tracking-wide -mt-0.5">Park</span>
                            <span className="text-[10px] text-teal-300/80 uppercase tracking-widest -mt-0.5">Dhamtari</span>
                        </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {siteConfig.description}
                    </p>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-lg">Quick Links</h3>
                    <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
                        <Link href="#about" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                            <Info className="h-4 w-4" /> About Us
                        </Link>
                        <Link href="#exhibits" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                            <FlaskConical className="h-4 w-4" /> Exhibits
                        </Link>
                        <Link href="#gallery" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                            <ImageIcon className="h-4 w-4" /> Gallery
                        </Link>
                        <Link href="#contact" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                            <Phone className="h-4 w-4" /> Contact
                        </Link>
                    </nav>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> {siteConfig.email}</li>
                        <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> {siteConfig.phone}</li>
                        <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-1" /> {siteConfig.address}</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <div className="flex gap-4">
                        <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal-400 transition-colors"><Facebook className="h-6 w-6" /></Link>
                        <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal-400 transition-colors"><Twitter className="h-6 w-6" /></Link>
                        <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal-400 transition-colors"><Instagram className="h-6 w-6" /></Link>
                        <Link href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-teal-400 transition-colors"><Linkedin className="h-6 w-6" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mt-12 text-center text-sm text-muted-foreground">
                <p>
                    © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
