"use client"

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const testimonials = [
    {
        quote: "Science Park Dhamtari is a hidden gem! My kids absolutely loved the interactive exhibits. It's a perfect blend of fun and learning.",
        name: "Priya Sharma",
        title: "Parent & Teacher",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
    {
        quote: "The lush gardens and the peaceful atmosphere are just amazing. A great place to spend a weekend with family. Highly recommended!",
        name: "Rahul Verma",
        title: "Nature Enthusiast",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
    },
    {
        quote: "विज्ञान पार्क धमतरी बच्चों के लिए बहुत ही ज्ञानवर्धक जगह है। यहाँ के मॉडल्स और प्रदर्शन बहुत ही रोचक हैं।",
        name: "Amit Patel",
        title: "Local Resident",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    },
    {
        quote: "I was impressed by the maintenance and the variety of scientific models. It's a must-visit for students in Chhattisgarh.",
        name: "Dr. Anjali Gupta",
        title: "Professor",
        rating: 4,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anjali",
    },
    {
        quote: "एक बेहतरीन अनुभव! यहाँ आकर विज्ञान को करीब से जानने का मौका मिला। परिवार के साथ घूमने के लिए सबसे अच्छी जगह।",
        name: "Vikram Singh",
        title: "Student",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="testimonials">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-950 mb-4">
                    <TextGenerateEffect words="What Our Visitors Say" className="text-teal-950 text-center justify-center" />
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
                    Hear from the people who have experienced the magic of science and nature at our park.
                </p>
            </div>

            <div className="h-[25rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
        </section>
    );
}
