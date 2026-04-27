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
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "5",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "6",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
   {
    id: "7",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission.",
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
  },
  {
    id: "8",
    slug: "Portblair Smart City Project.",
    title: "Portblair Smart City Project.",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions.",
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
  },
  {
    id: "9",
    slug: "Project ICT for RRVPNL.",
    title: "Project ICT for RRVPNL.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "10",
    slug: "Bhopal Smart City Ltd.",
    title: "Bhopal Smart City Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "11",
    slug: "Negpur Metro Rail Corporation Ltd.",
    title: "Negpur Metro Rail Corporation Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "12",
    slug: "Delhi Jai Board.",
    title: "Delhi Jai Board.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "13",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "14",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "15",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "16",
    slug: "Bhopal Smart City Ltd.",
    title: "Bhopal Smart City Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "17",
    slug: "Negpur Metro Rail Corporation Ltd.",
    title: "Negpur Metro Rail Corporation Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "18",
    slug: "Delhi Jai Board.",
    title: "Delhi Jai Board.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "19",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "20",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "21",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "22",
    slug: "Bhopal Smart City Ltd.",
    title: "Bhopal Smart City Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "23",
    slug: "Negpur Metro Rail Corporation Ltd.",
    title: "Negpur Metro Rail Corporation Ltd.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "24",
    slug: "Delhi Jai Board.",
    title: "Delhi Jai Board.",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management.",
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
  },
  {
    id: "25",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "26",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "27",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "28",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "29",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "30",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
  {
    id: "31",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "32",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "33",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "34",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "35",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "36",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
  {
    id: "37",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "38",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "39",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "40",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "41",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "42",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
  {    
    id: "43",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "44",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "45",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "46",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "47",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "48",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
  {
    id: "49",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "50",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "51",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "52",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
   {
    id: "53",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "54",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },
  {
    id: "55",
    slug: "Patna Smart City Ltd.",
    title: "Patna Smart City Ltd.",
    description: "Patna Smart City Limited is an organization working to transform Patna into a smart, sustainable, and technology-driven city under the Smart Cities Mission..",
    fullDescription: "Patna Smart City Limited is a Special Purpose Vehicle (SPV) formed to implement the Smart City Mission in Patna, Bihar. Established under the guidelines of the Smart Cities Mission, the company focuses on transforming Patna into a sustainable, citizen-friendly, and technology-driven urban center..",
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
    id: "56",
    slug: "Portblair Smart City Project",
    title: "Portblair Smart City Project",
    description: "Port Blair Smart City Limited is a project focused on transforming Port Blair into a modern, sustainable, and citizen-friendly smart city through advanced infrastructure and digital solutions..",
    fullDescription: "Port Blair Smart City Limited is responsible for implementing the Smart Cities Mission in Port Blair, aiming to develop a sustainable, resilient, and technology-enabled urban environment. The project focuses on improving core infrastructure such as roads, water supply, sanitation, and waste management, while also introducing smart solutions like digital governance, intelligent traffic systems, and integrated command centers. Emphasis is placed on enhancing the quality of life for residents, promoting tourism, and preserving the ecological balance of the Andaman and Nicobar Islands. Through area-based development and city-wide initiatives, the project seeks to make Port Blair more efficient, inclusive, and future-ready..",
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
    id: "57",
    slug: "Project ICT for RRVPNL",
    title: "Project ICT for RRVPNL",
    description: "Rajasthan Rajya Vidyut Prasaran Nigam Limited ICT project focuses on modernizing power transmission operations through digital systems, real-time monitoring, and efficient data management..",
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
    id: "58",
    slug: "Bhopal Smart City Ltd",
    title: "Bhopal Smart City Ltd",
    description: "Bhopal Smart City Development Corporation Limited is responsible for transforming Bhopal into a smart, sustainable, and citizen-friendly city under the Smart Cities Mission.",
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
  },
  {
    id: "59",
    slug: "Negpur Metro Rail Corporation Ltd",
    title: "Negpur Metro Rail Corporation Ltd",
    description: "Maharashtra Metro Rail Corporation Limited is responsible for developing and operating the Nagpur Metro to provide safe, efficient, and sustainable urban transportation.",
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
    },
    {
    id: "60",
    slug: "Delhi Jai Board",
    title: "Delhi Jai Board",
    description: "Delhi Jal Board is responsible for managing water supply and sewage services in Delhi, ensuring safe and reliable water for residents.",
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
  },

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
