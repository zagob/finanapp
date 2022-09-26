import { CardValues } from "../components/CardValues";
import { NavbarAside } from "../components/NavbarAside";

export default function Dashboard() {
  return (
    <div className="">
      <div className="grid grid-cols-3">
        <CardValues title="Title" color="DEFAULT" sald="2000" accountBank />
        <CardValues title="Title" color="GREEN" sald="2000" />
        <CardValues title="Title" color="RED" sald="2000" />
      </div>
    </div>
  );
}
