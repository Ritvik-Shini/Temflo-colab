import { HeaderItem } from "@/types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "   ", href: "/" },
  { label: "Why Us", href: "/schedules" },
  { label: "   ", href: "/" },
  { label: "Divisions", href: "/speakers" },
    { label: "   ", href: "/" },
  {
    label: "Projects",
    href: "/blog",
    submenu: [
      { label: "Blog list", href: "/blog" },
      { label: "Blog details", href: "/blog/blog_1" },
    ],
  },
  { label: "   ", href: "/" },
  { label: "FAQ's", href: "/documentation" },
];  