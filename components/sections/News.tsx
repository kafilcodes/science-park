"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Newspaper, ExternalLink, ClipboardCopy, FileWarning, PenTool, Table, TrendingUp } from "lucide-react";
import Image from "next/image";

export function News() {
    return (
        <section className="py-20 bg-white relative overflow-hidden" id="news">
            <div className="container px-4 md:px-6 mb-12 text-center">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-950 mb-4">
                    <TextGenerateEffect words="Latest News & Updates" className="text-teal-950 text-center justify-center" />
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto mt-4">
                    Stay updated with the latest happenings, inaugurations, and media coverage of Science Park Dhamtari.
                </p>
            </div>
            <BentoGrid className="max-w-7xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={item.className}
                        href={item.href}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const Skeleton = ({ src, fallbackSrc }: { src: string; fallbackSrc?: string }) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    return (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 relative overflow-hidden group">
            <Image
                src={imgSrc}
                alt="News Thumbnail"
                fill
                unoptimized
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => {
                    if (fallbackSrc) setImgSrc(fallbackSrc);
                }}
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        </div>
    );
};

const items = [
    {
        title: "धमतरी में बना साइंस पार्क लोगों के लिए खुला",
        description: "सांसद रुप कुमारी चौधरी ने किया उदघाटन। विज्ञान और मॉडलों के जरिए लोगों को धरती से जुड़ी कई वैज्ञानिक जानकारी यहां मिलेगी।",
        header: <Skeleton src="https://imgs.etvbharat.com/etvbharat/prod-images/09-11-2025/1200-675-25363272-thumbnail-16x9-aaa.jpg" fallbackSrc="/assets/news/news_inauguration_1765004367291.png" />,
        className: "col-span-2 md:col-span-2",
        icon: <ClipboardCopy className="h-4 w-4 text-neutral-500" />,
        href: "https://www.etvbharat.com/hi/state/dhamtari-science-park-opens-for-public-inaugurated-by-mp-roop-kumari-chaudhary-chhattisgarh-news-cts25110901401",
    },
    {
        title: "A park that showcases the intricacies of science",
        description: "पार्क, जहां विज्ञान की बारीकियां दिखाएंगे। 2 करोड़ रुपए की लागत से निर्मित विज्ञान वाटिका का लोकार्पण।",
        header: <Skeleton src="https://images.bhaskarassets.com/webp/thumb/512x0/web2images/521/2025/11/09/16_1762590289690efe510ae55_08_dmt_01.jpg" fallbackSrc="/assets/news/news_science_park_overview_1765004381936.png" />,
        className: "col-span-1 md:col-span-1",
        icon: <FileWarning className="h-4 w-4 text-neutral-500" />,
        href: "https://www.bhaskar.com/local/chhattisgarh/dhamtari/news/a-park-that-showcases-the-intricacies-of-science-136371345.html",
    },
    {
        title: "विज्ञान वाटिका (साइंस पार्क) का रहस्योद्घाटन",
        description: "बच्चों में वैज्ञानिक सोच और जिज्ञासा जगेगी। शिक्षा एवं पर्यटन के क्षेत्र में एक नवप्रवर्तन पहल।",
        header: <Skeleton src="https://khabarganga.in/wp-content/uploads/2025/11/Sansad-scince-park-2.jpeg" fallbackSrc="/assets/news/news_indoor_exhibits_1765004399706.png" />,
        className: "col-span-1 md:col-span-1",
        icon: <PenTool className="h-4 w-4 text-neutral-500" />,
        href: "https://khabarganga.in/?p=113974",
    },
    {
        title: "Outdoor Instruments & Exhibits",
        description: "Explore the various outdoor scientific instruments designed for interactive learning.",
        header: <Skeleton src="https://images.bhaskarassets.com/thumb/1200x900/web2images/521/2025/09/15/16_175776228168c552e9a2453_13_dmt_05.jpg" fallbackSrc="/assets/news/news_outdoor_instruments_1765004417196.png" />,
        className: "col-span-2 md:col-span-2",
        icon: <Table className="h-4 w-4 text-neutral-500" />,
        href: "https://www.bhaskar.com/local/chhattisgarh/dhamtari/news/science-park-developed-with-2-crores-will-help-in-studies-135921577.html",
    },
    {
        title: "Nature and Science Combined",
        description: "Located in Baruwa Garden, the park offers a perfect blend of nature and scientific learning.",
        header: <Skeleton src="https://imgs.etvbharat.com/etvbharat/prod-images/14-09-2025/cg-dmt-01-park-avb-cg10048_14092025094523_1409f_1757823323_133.jpg" fallbackSrc="/assets/news/news_general_nature_1765004435874.png" />,
        className: "col-span-2 md:col-span-2",
        icon: <TrendingUp className="h-4 w-4 text-neutral-500" />,
        href: "https://www.etvbharat.com/hi/!state/science-park-at-gangrel-dam-dhamtari-for-understand-science-in-easy-way-chhattisgarh-news-cts25091401760",
    },
];
