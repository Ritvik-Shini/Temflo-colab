import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { getPageHrefById } from "@/lib/pageIdLinks";

const BlogCard = ({ blog }: { blog: Blog }) => {
    const { title, coverImage, excerpt, slug, pageId } = blog;
    const detailsHref = pageId ? getPageHrefById(Number(pageId)) ?? `/blog/${slug}` : `/blog/${slug}`;
    const galleryHref = pageId ? `/solutions/${pageId}#gallery` : `/blog/${slug}#gallery`;

    return (
        <article className="group overflow-hidden rounded-[28px] transition-all duration-500 ease-out flex flex-col">
            <div className="relative overflow-hidden rounded-t-[28px] bg-slate-200 dark:bg-slate-800">
                <Link href={`/blog/${slug}`} aria-label="Open blog page" className="block w-full">
                    <Image
                        src={coverImage || '/images/hero/Black_1.png'}
                        alt={title || "blog image"}
                        width={720}
                        height={420}
                        quality={100}
                        className="h-72 sm:h-80 md:h-96 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </Link>
            </div>

            <div className="p-6 sm:p-7 bg-white dark:bg-slate-950 rounded-b-[28px]">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary/90">
                    Featured insight
                </p>
                <h3 className="mb-4 text-2xl font-bold leading-tight text-slate-900 dark:text-white">
                    <Link href={`/blog/${slug}`} className="hover:text-primary transition-colors">
                        {title}
                    </Link>
                </h3>
                <p className="mb-6 max-h-20 overflow-hidden text-sm leading-6 text-slate-600 dark:text-slate-300">
                    {excerpt || "Explore the full story and jump straight into the gallery for a visual tour."}
                </p>
                <div className="flex flex-wrap gap-3">
                    <Link
                        href={detailsHref}
                        className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary"
                    >
                        View Details
                    </Link>
                    <Link
                        href={galleryHref}
                        className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
                    >
                        Open Gallery
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;