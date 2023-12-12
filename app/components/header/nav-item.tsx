import { cn } from "@/app/lib/utils"
import Link from "next/link"
import { usePathname} from 'next/navigation'

type NavItemsProps = {
    label: string
    href: string
}

export const NavItem = ({label, href}: NavItemsProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link className={cn('text-gray-400 flex items-center gap-2 font-medium font-mono',
        isActive && 'text-gray-50')} href={href}>
            
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}