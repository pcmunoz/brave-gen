import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type React from 'react'

interface ContentDrawerItemProps {
    label: string
    icon: IconProp
    link: string
    active: boolean
    disabled?: boolean
}

const ContentDrawerItem: React.FC<ContentDrawerItemProps> = ({
    label,
    icon,
    link,
    active,
    disabled
}) => (
    <a
        href={link}
        className={
            disabled
                ? 'group flex items-center gap-3 px-4 py-2.5 rounded-lg text-gray-400 pointer-events-none'
                : `group flex items-center gap-3 px-4 py-2.5 rounded-lg ${active ? 'bg-lime-500 text-white' : ''} hover:text-white hover:bg-lime-500`
        }
    >
        <FontAwesomeIcon
            icon={icon}
            className={
                disabled
                    ? 'text-base font-semibold w-5 text-gray-400'
                    : `text-base font-semibold w-5 ${active ? 'text-white' : 'text-lime-500'}  group-hover:scale-110 group-hover:text-white`
            }
        />
        <span
            className={
                disabled
                    ? 'text-base font-semibold'
                    : `text-base font-semibold group-hover:font-bold`
            }
        >
            {label}
        </span>
    </a>
)

export default ContentDrawerItem
