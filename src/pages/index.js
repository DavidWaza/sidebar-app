import Image from "next/image";
import { Inter } from "next/font/google";
import { Sidebar, SidebarItems } from "@/components/Sidebar/Sidebar";
import {
  BarChart3,
  Boxes,
  LayoutDashboard,
  Package,
  Receipt,
  UserCircle,
  Settings,
  LifeBuoy,
} from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Sidebar>
        <SidebarItems
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
        <SidebarItems icon={<BarChart3 size={20} />} text="Statistics" />
        <SidebarItems icon={<UserCircle size={20} />} text="Users" />
        <SidebarItems icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItems icon={<Package size={20} />} text="Orders" alert />
        <SidebarItems icon={<Receipt size={20} />} text="Billings" />
        <hr className="my-3" />
        <SidebarItems icon={<Settings size={20} />} text="Settings" />
        <SidebarItems icon={<LifeBuoy size={20} />} text="Help" />
      </Sidebar>
    </>
  );
}
