export const siteConfig = {
    name: process.env.NEXT_PUBLIC_SITE_NAME ?? "Science Park",
    marquee: process.env.NEXT_PUBLIC_MARQUEE_TEXT ?? "Welcome...",
    contact: {
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
        phone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
    }
}