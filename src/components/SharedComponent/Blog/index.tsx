import React from 'react';
import Link from 'next/link';
import { Icon } from "@iconify/react"
import BlogCard from './blogCard';
import { getAllPosts } from "@/utils/markdown";

const Blog: React.FC = () => {
    const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "pageId"]).slice(0, 3);

    return (
        <section className="flex flex-wrap justify-center py-24 dark:bg-darklight border-t border-border dark:border-dark_border " id="blog">
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
                <div className="flex items-baseline justify-between flex-wrap">
                    <h2 className="sm:mb-11 mb-3 text-4xl font-bold text-SlateBlueText dark:text-white" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">Latest blog & news</h2>
                    <Link href="#" className="flex items-center gap-3 text-base text-SlateBlueText dark:text-white hover:dark:text-primary font-medium hover:text-primary sm:pb-0 pb-3" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                        View More
                        <span>
                            <Icon
                                icon="solar:arrow-right-outline"
                                width="30"
                                height="30"
                            />
                        </span>
                    </Link>
                </div>
                <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:-mx-0 lg:px-0">
                    <div className="flex gap-6 snap-x snap-mandatory scroll-smooth touch-pan-x">
                        {posts.map((blog, i) => (
                            <div
                                key={i}
                                className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[420px] snap-start"
                                data-aos="fade-up"
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
