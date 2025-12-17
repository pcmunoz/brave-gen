import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useActiveLocation from '../../hooks/useActiveLocation'

interface NavItemProps {
    icon: IconProp
    label: string
    link: string
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, link }) => {
    const { currentPath } = useActiveLocation()
    return (
        <a
            href={link}
            className={`group flex items-center px-4 py-2 hover:bg-lime-500 rounded-md ${currentPath === link ? 'bg-lime-500' : ''}`}
        >
            <FontAwesomeIcon
                icon={icon}
                className={`w-5 h-5 mr-3  group-hover:text-white ${currentPath === link ? 'text-white' : 'text-lime-500'}`}
            />
            <span
                className={`  group-hover:text-white group-hover:font-bold ${currentPath === link ? 'text-white' : 'text-gray-700'}`}
            >
                {label}
            </span>
        </a>
    )
}

export default NavItem
