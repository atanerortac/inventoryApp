import React from 'react'
import { LucideIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface SidebarLinkProps {
  href: string
  icon: LucideIcon
  label: string
  isCollapsed: boolean
}

const SidebarLink = ({
  href,
  icon: Icon,
  label,
  isCollapsed
}: SidebarLinkProps) => {
  const pathname = usePathname()
  const isActive =
    pathname === href || (pathname === '/' && href === '/dashboard')

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? 'justify-center py-4' : 'justify-start px-8 py-4'
        }
        hover:text-purple-500 hover:bg-purple-100 gap-3 transition-colors ${
          isActive ? 'bg-purple-200 text-white' : ''
        }
      }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />

        <span
          className={`${
            isCollapsed ? 'hidden' : 'block'
          } font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  )
}

export default SidebarLink
