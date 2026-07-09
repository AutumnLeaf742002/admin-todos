import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    path: string,
    text: string,
    icon: React.ReactNode
}

export const NavItem = ({ path, text, icon }: Props) => {

    const pathName = usePathname().split("/").at(-1)
    const newPath = path.split("/").at(-1)

    return (
        <Link href={path} className={`rounded p-2 flex items-center gap-2 transition-colors ${newPath == pathName ? "bg-linear-to-r from-sky-600 to-cyan-400 text-white" : "bg-linear-to-r from-gray-300 to-gray-200"}`}>
            {icon}
            <span className='font-semibold text-sm'>
                {text}
            </span>
        </Link>
    )
}