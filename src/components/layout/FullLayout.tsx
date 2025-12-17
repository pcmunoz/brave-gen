import React from 'react'

import ContentDrawer from './ContentDrawer'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export type MenuType = 'dashboard' | 'analytics' | 'settings' | null

interface FullLayoutProps {
    children: React.ReactNode
}

const FullLayout: React.FC<FullLayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="h-screen flex flex-col bg-[#f3f4f6] overflow-hidden w-full">
                <Topbar />
                <div className="flex flex-1 overflow-hidden">
                    <ContentDrawer />
                    <main className="flex-1 overflow-y-auto p-8">{children}</main>
                </div>
            </div>
        </div>
    )
}

export default FullLayout
