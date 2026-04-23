/\*\*

- =====================================================
- DYNAMIC PAGES SYSTEM - USAGE GUIDE
- =====================================================
-
- This system provides a fully optimized, reusable way to create
- multiple pages with the same design but different content.
  \*/

// =====================================================
// 1. ADDING NEW PAGES
// =====================================================

import { pagesData } from "@/lib/pagesData";

// To add new pages, simply add entries to the pagesData array in:
// src/lib/pagesData.ts

// Example new entry:
const newPage = {
id: "5",
slug: "ai-analytics-platform",
title: "AI Analytics Platform",
description: "Advanced AI-powered analytics for business intelligence.",
fullDescription: "Our AI Analytics Platform uses machine learning to provide predictive insights and automated decision support.",
image: "/images/hero/Black_1.png",
icon: "🤖",
category: "Analytics",
features: [
"Machine learning algorithms",
"Predictive analytics",
"Real-time dashboards",
"Automated insights",
"Data visualization"
],
createdAt: "2024-02-15"
};

// =====================================================
// 2. USING DYNAMIC LINKS IN YOUR PAGES
// =====================================================

// In any page/component where you want to link to these pages:

import Link from "next/link";
import { getPageUrl } from "@/lib/pageUrls";

// Method 1: Using the helper function (recommended)

<Link href={getPageUrl("1")}>View Smart City Solutions</Link>

// Method 2: Direct routing

<Link href="/solutions/1">View Smart City Solutions</Link>

// Method 3: Using slug (if implemented)

<Link href="/solutions/smart-city-solutions">View Smart City Solutions</Link>

// =====================================================
// 3. DISPLAYING PAGES IN A GRID (Example)
// =====================================================

import { pagesData } from "@/lib/pagesData";
import Link from "next/link";
import Image from "next/image";
import { getPageUrl } from "@/lib/pageUrls";

function SolutionsGrid() {
return (
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
{pagesData.map((solution) => (
<Link key={solution.id} href={getPageUrl(solution.id)}>
<div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
<div className="relative w-full h-48">
<Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
              />
</div>
<div className="p-6">
<h3 className="text-lg font-bold">{solution.title}</h3>
<p className="text-gray-600 text-sm">{solution.description}</p>
</div>
</div>
</Link>
))}
</div>
);
}

// =====================================================
// 4. FILTERING PAGES BY CATEGORY
// =====================================================

import { getPagesByCategory } from "@/lib/pagesData";

// Get all pages in a specific category
const infrastructurePages = getPagesByCategory("Infrastructure");

// Use in a component
function InfrastructureSolutions() {
return (
<div className="space-y-4">
{infrastructurePages.map((page) => (
<Link key={page.id} href={getPageUrl(page.id)}>
<h3>{page.title}</h3>
</Link>
))}
</div>
);
}

// =====================================================
// 5. ROUTE STRUCTURE
// =====================================================

/\*\*

- Created Routes:
-
- /solutions → Solutions listing page (all 4 pages in a grid)
- /solutions/1 → Smart City Solutions detail page
- /solutions/2 → Command & Control Center detail page
- /solutions/3 → Energy Portfolio Management detail page
- /solutions/4 → Surveillance & Monitoring detail page
- /solutions/[any-id] → Dynamic routing for any new IDs you add
  \*/

// =====================================================
// 6. PERFORMANCE OPTIMIZATIONS
// =====================================================

/\*\*

- ✓ Static Generation (SSG):
- - All pages are generated at build time using generateStaticParams()
- - No runtime computation needed
- - Lightning-fast page loads
-
- ✓ Reusable Component:
- - Single DynamicPageComponent handles all page designs
- - Only data changes, not HTML structure
- - Reduced code duplication
-
- ✓ Optimized Images:
- - Using Next.js Image component with proper sizing
- - Responsive image loading with 'sizes' prop
- - Automatic format optimization (WebP, AVIF)
-
- ✓ Metadata Generation:
- - Dynamic meta tags for SEO
- - Proper Open Graph tags for social sharing
- - Auto-generated based on page data
-
- ✓ Breadcrumb Navigation:
- - Auto-generated breadcrumbs
- - Helps with SEO and UX
    \*/

// =====================================================
// 7. MODIFYING PAGE DATA
// =====================================================

/\*\*

- Option 1: Edit pagesData.ts directly (current approach)
- - Simple, easy to maintain
- - Best for small to medium number of pages
-
- Option 2: Load from JSON file
- - Create src/data/pages.json
- - Import and parse in pagesData.ts
- - Better for larger datasets
-
- Option 3: Connect to CMS/Database
- - Fetch from API in generateStaticParams()
- - Requires redeployment when data changes
- - Best for frequently updated content
-
- Option 4: Hybrid approach (Recommended for scale)
- - Static data for core pages
- - Fetch additional data from API
- - Combines benefits of all approaches
    \*/

// =====================================================
// 8. EXAMPLE: LINKING FROM HOMEPAGE
// =====================================================

// In your homepage component:
import Link from "next/link";

export default function HomePage() {
return (
<section>
<h2>Featured Solutions</h2>
<div className="grid grid-cols-2 gap-4">
<Link href="/solutions/1" className="btn">
Smart City Solutions
</Link>
<Link href="/solutions/2" className="btn">
Command Center
</Link>
</div>

      {/* View all solutions button */}
      <Link href="/solutions" className="btn btn-primary">
        Explore All Solutions →
      </Link>
    </section>

);
}

// =====================================================
// 9. ADDING MORE DATA POINTS TO EACH PAGE
// =====================================================

/\*\*

- To add new fields to pages, extend the PageEntry interface:
-
- interface PageEntry {
- // ... existing fields ...
- pricing?: {
-     basic: number;
-     pro: number;
-     enterprise: number;
- };
- testimonials?: {
-     author: string;
-     content: string;
-     role: string;
- }[];
- faqItems?: {
-     question: string;
-     answer: string;
- }[];
- caseStudies?: string[]; // IDs of related case studies
- }
-
- Then update DynamicPageComponent to display these new fields.
  \*/

// =====================================================
// 10. QUICK REFERENCE
// =====================================================

/\*\*

- KEY FILES:
- ├─ src/lib/pagesData.ts → Data definitions & helpers
- ├─ src/lib/pageUrls.ts → URL generation utilities
- ├─ src/components/DynamicPageComponent.tsx → Reusable page template
- └─ src/app/(site)/solutions/
- ├─ page.tsx → Solutions listing
- └─ [id]/page.tsx → Dynamic detail page
-
- KEY IMPORTS:
- - getPageById(id) → Get single page by ID
- - getPageBySlug(slug) → Get single page by slug
- - getPagesByCategory(category) → Get filtered pages
- - getPageUrl(id) → Generate page URL
- - getAllPageIds() → Get all IDs for SSG
-
- EXAMPLE LINK SYNTAX:
- <Link href={getPageUrl("1")}>View Solution</Link>
  */
