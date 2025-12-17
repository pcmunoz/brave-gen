import React from 'react'

import { sidebarMenu, sidebarMenuSetting } from '../../constants/menu'
import useActiveLocation from '../../hooks/useActiveLocation'
import SidebarItem from './SidebarItem'

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({}) => {
    const { parentPath, currentPath } = useActiveLocation()
    const activeMenu = parentPath === '' ? currentPath : parentPath

    return (
        <aside className="w-20 h-screen bg-slate-950 border-r border-slate-800 flex flex-col items-center py-6 z-50 shrink-0">
            <div className="text-indigo-500 text-2xl mb-10">
                <a href="/">
                    <img src="/images/Logo.png" />
                </a>
            </div>

            <nav className="flex-1 flex flex-col justify-center gap-1 w-full items-center">
                {Object.values(sidebarMenu).map((each) => {
                    return (
                        <SidebarItem
                            {...each}
                            key={each.link}
                            active={activeMenu === each.link}
                        />
                    )
                })}
            </nav>
            <div className="mt-auto pt-6 border-t border-slate-800 w-12 flex justify-center">
                <SidebarItem
                    icon={sidebarMenuSetting.icon}
                    active={activeMenu === sidebarMenuSetting.link}
                    label={sidebarMenuSetting.label}
                    link={sidebarMenuSetting.link}
                />
            </div>
        </aside>
    )
}

export default Sidebar
