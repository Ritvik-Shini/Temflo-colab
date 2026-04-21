import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "Blog | Temflo",
};

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/Project", text: "Project" },
    ];
    return (
        <>
            <HeroSub
                title="Welcome to Our Project"
                description="Each of our project is distinguishable, every facility different, and each client unique. Through these projects, we have developed a strong understanding of the procedures and strategies to position our project teams and clients for success."
                breadcrumbLinks={breadcrumbLinks}
            />
            <BlogList />
            <TicketSection/>
        </>
    );
};

export default BlogPage;