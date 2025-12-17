import type React from 'react'

import {
    settingsCarbonMenu,
    settingsDisplaysMenu,
    settingsOrganizationMenu,
    settingsUtilitiesMenu
} from '../../constants/menu'
import useActiveLocation from '../../hooks/useActiveLocation'
import ContentDrawerItem from './ContentDrawerItem'

const ContentDrawer: React.FC = () => {
    const { currentPath, parentPath } = useActiveLocation()

    if (parentPath === 'settings' || currentPath === 'settings') {
        return (
            <aside className={`z-40 w-80`}>
                <div className={`h-screen overflow-hidden w-84`}>
                    <div className="w-84 px-6 pb-6">
                        <nav className="flex flex-col gap-2">
                            <div className="py-3">
                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">
                                    Organization
                                </h3>
                                <div className="space-y-1">
                                    {Object.values(settingsOrganizationMenu).map((each) => {
                                        return (
                                            <ContentDrawerItem
                                                key={each.link}
                                                active={currentPath === each.link}
                                                label={each.label}
                                                link={
                                                    parentPath === 'settings'
                                                        ? each.link
                                                        : `settings/${each.link}`
                                                }
                                                icon={each.icon}
                                                disabled={each.disabled}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="py-3">
                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">
                                    Utilities
                                </h3>
                                <div className="space-y-1">
                                    {Object.values(settingsUtilitiesMenu).map((each) => {
                                        return (
                                            <ContentDrawerItem
                                                key={each.link}
                                                active={currentPath === each.link}
                                                label={each.label}
                                                link={each.link}
                                                icon={each.icon}
                                                disabled={each.disabled}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="py-3">
                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">
                                    Carbon
                                </h3>
                                <div className="space-y-1">
                                    {Object.values(settingsCarbonMenu).map((each) => {
                                        return (
                                            <ContentDrawerItem
                                                key={each.link}
                                                active={currentPath === each.link}
                                                label={each.label}
                                                link={each.link}
                                                icon={each.icon}
                                                disabled={each.disabled}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="py-3">
                                <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 px-4">
                                    Displays
                                </h3>
                                <div className="space-y-1">
                                    {Object.values(settingsDisplaysMenu).map((each) => {
                                        return (
                                            <ContentDrawerItem
                                                key={each.link}
                                                active={currentPath === each.link}
                                                label={each.label}
                                                link={each.link}
                                                icon={each.icon}
                                                disabled={each.disabled}
                                            />
                                        )
                                    })}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </aside>
        )
    }
}

export default ContentDrawer
