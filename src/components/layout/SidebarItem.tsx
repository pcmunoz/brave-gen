import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useNavigate } from 'react-router'

interface SidebarItemProps {
    icon: IconProp
    active: boolean
    label: string
    link: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, active, label, link }) => {
    const navigate = useNavigate()
    const handleSidebarItemClick = () => {
        navigate(`/${link}`)
    }
    return (
        <button
            onClick={handleSidebarItemClick}
            className="group flex flex-col items-center justify-center w-full py-2 transition-all relative"
        >
            <FontAwesomeIcon
                icon={icon}
                className={`
        text-lg transition-all duration-200 mb-1
        ${
            active
                ? 'text-lime-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                : 'text-white group-hover:text-lime-500 group-hover:scale-110'
        }
      `}
                style={active ? { stroke: 'white', strokeWidth: '20px' } : {}}
            />

            <span
                className={`
      text-[10px] uppercase tracking-tighter transition-all duration-200
      ${
          active
              ? 'text-lime-500 font-bold'
              : 'text-white group-hover:text-lime-500 group-hover:font-bold'
      }
    `}
            >
                {label}
            </span>
        </button>
    )
}

export default SidebarItem
