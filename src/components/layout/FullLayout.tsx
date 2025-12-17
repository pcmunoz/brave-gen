import React from 'react'

import useActiveLocation from '../../hooks/useActiveLocation'
import ContentDrawer from './ContentDrawer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export type MenuType = 'dashboard' | 'analytics' | 'settings' | null

interface FullLayoutProps {
    children: React.ReactNode
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    const { parentPath } = useActiveLocation()
    const [activeMenu, setActiveMenu] = React.useState<MenuType>(
        parentPath === '' ? null : (parentPath as MenuType)
    )
    return (
        <div className="flex">
            <Sidebar
                activeMenu={activeMenu}
                handleActiveMenu={setActiveMenu}
            />
            <div className="h-screen flex flex-col bg-[#f3f4f6] overflow-hidden">
                <Topbar />
                <div className="flex flex-1 overflow-hidden">
                    <aside className={`z-40 w-80`}>
                        <ContentDrawer />
                    </aside>

                    <main className="flex-1 overflow-y-auto p-8">{children}</main>
                </div>
            </div>
        </div>
    )
}

export default FullLayout
