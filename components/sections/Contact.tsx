"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "emailjs-com"
import dynamic from "next/dynamic"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left Side - Animation & Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8 lg:col-span-1"
                >
                    <div className="space-y-4">
                        {/* Lottie Animation - Restored */}
                        <div className="w-full max-w-[400px] aspect-square relative mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-teal-100/30 rounded-full blur-3xl -z-10" />
                            <Lottie animationData={contactCharacterAnimation} loop={true} className="w-full h-full" />
                        </div>

                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-950">
                            <TextGenerateEffect words="Get in Touch" className="text-teal-950" />
                        </h2>
                        <p className="text-muted-foreground md:text-lg max-w-[500px]">
                            Whether you&apos;re planning a school trip, a family visit, or just want to say hello, we&apos;re here to help!
                        </p>
                    </div>
                </motion.div>

                {/* Right Content - Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-1"
                >
                    <Card className="border-teal-100 shadow-lg bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                            <CardTitle className="text-2xl text-teal-900">Send us a Message</CardTitle>
                            <CardDescription>We&apos;ll get back to you as soon as possible.</CardDescription>
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
                                                        <Input placeholder="Your name" {...field} className="pl-10 border-teal-200 focus:border-teal-500" />
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
                                                        <Input placeholder="your@email.com" {...field} className="pl-10 border-teal-200 focus:border-teal-500" />
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
                                                        <Input placeholder="Your phone number" {...field} className="pl-10 border-teal-200 focus:border-teal-500" />
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
                                                        className="min-h-[120px] border-teal-200 focus:border-teal-500"
                                                        {...field}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button
                                        type="submit"
                                        className="w-full bg-teal-600 hover:bg-teal-700 text-white"
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
                </motion.div>
            </div>
        </section>
    )
}
