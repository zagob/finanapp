import { useRouter } from "next/router";
import { ReactNode } from "react";
import { MdOutlineDashboard, MdSettings } from "react-icons/md";

interface LiNavigationProps {
  title: string;
  nameRoute: string;
  icon?: ReactNode;
}

function LiNavigation({ title, nameRoute, icon }: LiNavigationProps) {
  const { pathname } = useRouter();
  const routerPath = pathname.split("/").join("");

  return (
    <li
      className={`flex items-center gap-2 px-6 py-2 bg-gradient-to-r ${
        routerPath === nameRoute
          ? "from-purple-900 to-blue-900"
          : "hover:from-blue-700 hover:to-blue-900 hover:cursor-pointer transition-all "
      }`}
    >
      {icon}
      {title}
    </li>
  );
}

export function NavbarAside() {
  return (
    <aside className="text-white bg-gradient-to-r from-blue-900 to-blue-800 w-[250px] h-screen shadow-lg shadow-blue-900 flex flex-col py-8">
      <div className="flex flex-col gap-1 ml-6 w-[25px] cursor-pointer hover:brightness-75 transition-all">
        <div className="w-[25px] h-[2px] bg-white"></div>
        <div className="w-[22px] h-[2px] bg-white"></div>
        <div className="w-[16px] h-[2px] bg-white"></div>
      </div>

      <nav className="mt-10">
        <ul className="">
          <LiNavigation
            icon={<MdOutlineDashboard size={22} />}
            title="Dashboard"
            nameRoute="dashboard"
          />
          <LiNavigation
            icon={<MdSettings size={22} />}
            title="Settings"
            nameRoute=""
          />
        </ul>
      </nav>
    </aside>
  );
}
