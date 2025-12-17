import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { allSettingsMenu } from '../../constants/menu'
import { capitalizeFirstLetter } from '../../helpers/common'
import useActiveLocation from '../../hooks/useActiveLocation'
import { CompanyDropdown } from '../../pages/settings/integrations/CompanyDropdown'
import TopbarRight from './TopbarRight'

const TopBar: React.FC = () => {
    const { currentPage, currentPath } = useActiveLocation()
    return (
        <header className="h-16 w-full border-b border-slate-800 flex items-center justify-between px-8 shrink-0">
            <div className="flex items-center gap-6 mr-5">
                <CompanyDropdown />
            </div>
            <div className="flex items-center gap-1">
                {currentPath && (
                    <FontAwesomeIcon
                        icon={allSettingsMenu[currentPath]?.icon}
                        className="text-black"
                    />
                )}
                <h1 className="text-black font-bold">
                    {currentPage.includes('-')
                        ? currentPage
                              .split('-')
                              .map((each) => capitalizeFirstLetter(each))
                              .join(' ')
                        : currentPage}
                </h1>
            </div>

            <TopbarRight />
        </header>
    )
}

export default TopBar
