import { FaTasks } from "react-icons/fa";
import { LuAtom } from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { NavItem } from "./NavItem";

const navItems = [
    {
        path: "/dashboard",
        text: "Dashboard",
        icon: <MdDashboard />,
    },
    {
        path: "/dashboard/rest-todos",
        text: "Rest TODOS",
        icon: <FaTasks />,
    },
    {
        path: "/dashboard/server-todos",
        text: "Server todos",
        icon: <FaTasks />,
    }

]

export function Sidebar() {
    return (
        <aside className="h-screen w-64 bg-white border-r-2 border-r-gray-200 flex flex-col">

            <header className="flex justify-center h-16 items-center px-6">
                <LuAtom size={23} className="text-cyan-500" />
                <h1 className="text-xl font-bold">
                    Todos
                </h1>
            </header>

            <div className="flex justify-center mt-6">
                <h2 className="text-lg font-semibold">
                    Alexis Perez
                </h2>
            </div>

            <nav className="px-2 mt-6">
                <ul className="flex flex-col gap-2">
                    {
                        navItems.map(i => (
                            <NavItem key={i.path} {...i} />
                        ))
                    }
                </ul>
            </nav>

        </aside>
    );
}