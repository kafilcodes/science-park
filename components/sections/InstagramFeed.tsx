"use client";
import { FocusCards } from "@/components/ui/focus-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Instagram } from "lucide-react";
import Link from "next/link";

export function InstagramFeed() {
    const cards = [
        {
            title: "Learning is Fun!",
            src: "/assets/instagram/insta_kids_learning_1765004464323.png",
        },
        {
            title: "DNA Mysteries",
            src: "/assets/instagram/insta_dna_model_1765004483219.png",
        },
        {
            title: "Sunset Views",
            src: "/assets/instagram/insta_sunset_park_1765004499013.png",
        },
        {
            title: "Gravity Well",
            src: "/assets/instagram/insta_gravity_well_1765004520173.png",
        },
        {
            title: "Nature's Beauty",
            src: "/assets/instagram/insta_garden_flowers_1765004535437.png",
        },
        {
            title: "Park at Night",
            src: "/assets/instagram/insta_night_view_1765004551211.png",
        },
    ];

    return (
        <section className="py-20 bg-white relative overflow-hidden" id="feed">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-950 mb-4 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                    <TextGenerateEffect words="Follow Us on Instagram" className="text-teal-950 text-center justify-center inline-block" />
                </h2>

                <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto mt-4 mb-8">
                    Catch the latest reels, stories, and moments from @scienceparkdhamtari
                </p>
                <Link
                    href="https://www.instagram.com/scienceparkdhamtari"
                    target="_blank"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium hover:opacity-90 transition-opacity border-2 border-white-500 outline-none focus:outline-none"
                >                    <Instagram className="h-auto w-auto text-white mr-2 text-center vertical-align-middle" />

                    View Profile
                </Link>
            </div>
            <FocusCards cards={cards} />
        </section>
    );
}
