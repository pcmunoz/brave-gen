import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const TopbarRight: React.FC = () => {
    const [isProfileOpen, setIsProfileOpen] = React.useState(false)
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    const handleProfileClick = () => setIsProfileOpen(!isProfileOpen)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProfileOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <div
            className="flex items-center gap-4 ml-auto relative"
            ref={dropdownRef}
        >
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                <FontAwesomeIcon
                    icon={faBell}
                    className="text-lg"
                />
            </button>
            <button
                onClick={handleProfileClick}
                className="w-10 h-10 rounded-lg bg-[#3b82f6] flex items-center justify-center text-white font-bold text-sm shadow-sm hover:brightness-110 transition-all"
            >
                PC
            </button>
            {isProfileOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-xl z-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="py-1">
                        <button className="w-full text-left px-4 py-3 text-[16px] font-medium text-gray-700 hover:bg-gray-50 transition-colors border-b border-gray-100">
                            Account Settings
                        </button>
                        <button className="w-full text-left px-4 py-3 text-[16px] font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                            Sign Out
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TopbarRight
