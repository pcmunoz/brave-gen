import type React from 'react'

interface MenuLinkProps {
    label: string
}

const MenuLink: React.FC<MenuLinkProps> = ({ label }) => (
    <button className="w-full text-left px-4 py-2 text-sm text-gray-600 font-medium hover:bg-gray-50 rounded-lg transition-all">
        {label}
    </button>
)

export default MenuLink
