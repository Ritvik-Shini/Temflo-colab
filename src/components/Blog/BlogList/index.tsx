import React from 'react';
import BlogDeck from '@/components/Blog/BlogDeck';
import { getAllPosts } from "@/utils/markdown";

export default function BlogList() {
    try {
        const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug", "pageId"]);
        
        if (!posts || posts.length === 0) {
            return null;
        }

        return <BlogDeck posts={posts} />;
    } catch (error) {
        console.error('Error loading blog posts:', error);
        return null;
    }
}
