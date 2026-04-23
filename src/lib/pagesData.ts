// Data structure for dynamic pages
export interface PageEntry {
  id: string;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  icon?: string;
  category: string;
  features: string[];
  createdAt: string;
}

// Sample data - Replace with your actual data or fetch from API
export const pagesData: PageEntry[] = [
  {
    id: "1",
    slug: "smart-city-solutions",
    title: "Smart City Solutions",
    description: "Comprehensive urban management systems for modern cities.",
    fullDescription: "Our Smart City Solutions provide integrated systems for managing urban infrastructure, traffic, utilities, and citizen services efficiently.",
    image: "/images/hero/Black_1.png",
    icon: "🏙️",
    category: "Infrastructure",
    features: [
      "Real-time traffic monitoring",
      "Integrated utilities management",
      "Citizen engagement platform",
      "Data analytics dashboard",
      "IoT sensor networks"
    ],
    createdAt: "2024-01-15"
  },
  {
    id: "2",
    slug: "command-control-center",
    title: "Command & Control Center",
    description: "Centralized monitoring and management platform.",
    fullDescription: "State-of-the-art command center solutions for coordinating emergency response, traffic management, and utility operations.",
    image: "/images/hero/Black_1.png",
    icon: "📊",
    category: "Operations",
    features: [
      "Multi-agency coordination",
      "Real-time alerting system",
      "Video wall integration",
      "Incident tracking",
      "Resource allocation"
    ],
    createdAt: "2024-01-20"
  },
  {
    id: "3",
    slug: "energy-management",
    title: "Energy Portfolio Management",
    description: "Smart energy distribution and consumption optimization.",
    fullDescription: "Advanced energy management system for optimizing power distribution, renewable integration, and consumption patterns.",
    image: "/images/hero/Black_1.png",
    icon: "⚡",
    category: "Utilities",
    features: [
      "Load balancing",
      "Renewable integration",
      "Consumption forecasting",
      "Smart grid technology",
      "Cost optimization"
    ],
    createdAt: "2024-01-25"
  },
  {
    id: "4",
    slug: "surveillance-monitoring",
    title: "Surveillance & Monitoring",
    description: "Comprehensive security and monitoring solutions.",
    fullDescription: "CCTV and monitoring systems with AI-powered analytics for enhanced public safety and security management.",
    image: "/images/hero/Black_1.png",
    icon: "🎥",
    category: "Security",
    features: [
      "AI video analytics",
      "Facial recognition",
      "Incident detection",
      "Intelligent alerts",
      "Archive management"
    ],
    createdAt: "2024-02-01"
  }
];

// Get all page IDs for generateStaticParams
export const getAllPageIds = (): string[] => {
  return pagesData.map(page => page.id);
};

// Get all page slugs
export const getAllPageSlugs = (): string[] => {
  return pagesData.map(page => page.slug);
};

// Get page by ID
export const getPageById = (id: string): PageEntry | undefined => {
  return pagesData.find(page => page.id === id);
};

// Get page by slug
export const getPageBySlug = (slug: string): PageEntry | undefined => {
  return pagesData.find(page => page.slug === slug);
};

// Get pages by category
export const getPagesByCategory = (category: string): PageEntry[] => {
  return pagesData.filter(page => page.category === category);
};

// Get all categories
export const getAllCategories = (): string[] => {
  return Array.from(new Set(pagesData.map(page => page.category)));
};
