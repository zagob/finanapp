import { ReactNode } from "react";
import { NavbarAside } from "../components/NavbarAside";

interface DefaultLayoutProps {
  children: ReactNode;
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <div className="flex gap-2">
      <NavbarAside />
      <main className="flex-1">{children}</main>
    </div>
  );
}
