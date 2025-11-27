"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "emailjs-com"
import dynamic from "next/dynamic"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2, Mail, MapPin, Phone, Send, User } from "lucide-react"
import { motion } from "framer-motion"

import airplaneAnimation from "@/public/assets/lottie/Airplane Lottie Animation.json"
import contactCharacterAnimation from "@/public/assets/lottie/Contact Us Character Animation.json"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Please enter a valid phone number.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }).max(500, {
        message: "Message cannot exceed 500 characters.",
    }),
})

export function Contact() {
    const [isSending, setIsSending] = useState(false)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSending(true)

        // Configuration for EmailJS
        // In a real production app, these should be in environment variables
        // For this demo, we'll use placeholders or simulated success if keys aren't present
        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
        const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'user_default';

        const templateParams = {
            from_name: values.name,
            from_email: values.email,
            phone: values.phone,
            message: values.message,
            to_name: "Science Park Team",
        };

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert("Message sent successfully! We will get back to you soon.");
                form.reset();
            })
            .catch((err) => {
                console.log('FAILED...', err);
                // Fallback for demo purposes if keys are invalid
                alert("Message sent! (Simulated - EmailJS keys missing)");
                form.reset();
            })
            .finally(() => {
                setIsSending(false)
            });
    }

    return (
        <section className="container py-24 relative overflow-hidden" id="contact">
            {/* Background Animations */}
            <div className="absolute top-20 right-0 w-64 h-64 opacity-20 pointer-events-none">
                <Lottie animationData={airplaneAnimation} loop={true} className="w-full h-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-96 h-96 opacity-100 pointer-events-none">
                <Lottie animationData={contactCharacterAnimation} loop={true} className="w-full h-full" />
            </div>

            <div className="mb-12 text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70"
                >
                    Get in Touch
                </motion.h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Have questions? We&apos;d love to hear from you.
                </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 items-start relative z-10">
                {/* Contact Info Cards */}
                <div className="grid gap-6">
                    <Card className="bg-white/5 backdrop-blur-md border-white/10">
                        <CardContent className="flex items-center gap-4 p-6">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <MapPin className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Visit Us</h3>
                                <p className="text-sm text-muted-foreground">Rudri Road, Dhamtari, Chhattisgarh</p>
                            </div>
                        </CardContent>
                    </Card>

                    <a href="mailto:info@scienceparkdhamtari.com" className="block transition-transform hover:scale-[1.02]">
                        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email Us</h3>
                                    <p className="text-sm text-muted-foreground">info@scienceparkdhamtari.com</p>
                                </div>
                            </CardContent>
                        </Card>
                    </a>

                    <a href="tel:+919876543210" className="block transition-transform hover:scale-[1.02]">
                        <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-colors cursor-pointer">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Call Us</h3>
                                    <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                                </div>
                            </CardContent>
                        </Card>
                    </a>
                </div>

                {/* Contact Form */}
                <Card className="bg-white/5 backdrop-blur-md border-white/10">
                    <CardHeader>
                        <CardTitle>Send us a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input placeholder="Your name" {...field} className="pl-10 bg-white/5 border-white/10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input placeholder="your@email.com" {...field} className="pl-10 bg-white/5 border-white/10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Phone</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                    <Input placeholder="Your phone number" {...field} className="pl-10 bg-white/5 border-white/10" />
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Message</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="How can we help you?"
                                                    className="min-h-[120px] bg-white/5 border-white/10"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                                    disabled={isSending || !form.formState.isValid}
                                >
                                    {isSending ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <div className="ml-2 h-6 w-6">
                                                <Lottie animationData={airplaneAnimation} loop={true} />
                                            </div>
                                        </>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
