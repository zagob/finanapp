import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";

import { motion } from "framer-motion";

interface LiNavigationProps {
  title: string;
  nameRoute: string;
  icon?: ReactNode;
  disableTitle: boolean;
}

function LiNavigation({
  title,
  nameRoute,
  icon,
  disableTitle,
}: LiNavigationProps) {
  const { pathname } = useRouter();
  const routerPath = pathname.split("/").join("");

  return (
    <li
      className={`flex overflow-hidden items-center gap-2 px-6 py-2 bg-gradient-to-r shadow-md ${
        routerPath === nameRoute
          ? "from-violet-500 to-blue-900"
          : "hover:from-blue-700 hover:to-blue-900 hover:cursor-pointer transition-all "
      }`}
    >
      <span>{icon}</span>
      <motion.span
        animate={disableTitle ? { opacity: 100 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.span>
    </li>
  );
}

export default function NavbarAside() {
  const [navbar, setNavbar] = useState(true);
  return (
    <motion.aside
      initial={{ width: 250 }}
      animate={navbar ? { width: 250 } : { width: 70 }}
      transition={{ duration: 0.6 }}
      className="text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 h-screen shadow-blue-600 flex flex-col py-8 rounded-r-2xl"
    >
      <div
        onClick={() => setNavbar((old) => !old)}
        className="flex flex-col gap-1 ml-6 w-[25px] cursor-pointer hover:brightness-75 transition-all"
      >
        <div className="w-[25px] h-[2px] bg-white"></div>
        <div className="w-[22px] h-[2px] bg-white"></div>
        <div className="w-[16px] h-[2px] bg-white"></div>
      </div>

      <nav className="mt-10">
        <ul className="">
          <LiNavigation
            disableTitle={navbar}
            icon={<MdOutlineDashboard size={22} />}
            title="Dashboard"
            nameRoute="dashboard"
          />
          <LiNavigation
            disableTitle={navbar}
            icon={<MdSettings size={22} />}
            title="Settings"
            nameRoute=""
          />
        </ul>
      </nav>
    </motion.aside>
  );
}
