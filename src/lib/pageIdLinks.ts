export interface PageIdLink {
  id: number;
  name: string;
  href: string;
}

export const pageIdLinks: PageIdLink[] = [
  { id: 1, name: "Display & Monitoring Solutions", href: "/display-monitoring-solutions" },
  { id: 2, name: "Digital Museum", href: "/digital-museum" },
  { id: 3, name: "Light & Sound Shows", href: "/light-sound-show" },
  { id: 4, name: "Control Command Center", href: "/control-command-center" },
  { id: 5, name: "Emergency Warning System", href: "/emergency-warning-system" },
  { id: 6, name: "Workspace Solution", href: "/workspace-solution" },
  { id: 7, name: "Energy Portfolio Management", href: "/energy-portfolio-management" },
  { id: 8, name: "Control and Instrumentation (C&I)", href: "/control-and-instrumentation" },
  { id: 9, name: "PLC SCADA / DCS Based Automation", href: "/plc-scada-dcs-based-automation" },
  { id: 10, name: "City Beautification", href: "/city-beautification" },
];

export const getPageHrefById = (id: number): string | undefined => {
  return pageIdLinks.find((page) => page.id === id)?.href;
};
