import React from 'react'

import { sidebarMenu, sidebarMenuSetting } from '../../constants/menu'
import type { MenuType } from './FullLayout'
import SidebarItem from './SidebarItem'

interface SidebarProps {
    activeMenu: MenuType
    handleActiveMenu: (value: MenuType) => void
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, handleActiveMenu }) => {
    return (
        <aside className="w-20 h-screen bg-slate-950 border-r border-slate-800 flex flex-col items-center py-6 z-50 shrink-0">
            <div className="text-indigo-500 text-2xl mb-10">
                <img src="/images/Logo.png" />
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-1 w-full items-center">
                {Object.values(sidebarMenu).map((each) => {
                    const handleSidebarItemClick = () => handleActiveMenu(each.link as MenuType)
                    return (
                        <SidebarItem
                            key={each.link}
                            icon={each.icon}
                            active={activeMenu === each.link}
                            handleSidebarItemClick={handleSidebarItemClick}
                            label={each.label}
                        />
                    )
                })}
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-800 w-12 flex justify-center">
                <SidebarItem
                    icon={sidebarMenuSetting.icon}
                    active={activeMenu === sidebarMenuSetting.link}
                    handleSidebarItemClick={() =>
                        handleActiveMenu(sidebarMenuSetting.link as MenuType)
                    }
                    label={sidebarMenuSetting.label}
                />
            </div>
        </aside>
    )
}

export default Sidebar
