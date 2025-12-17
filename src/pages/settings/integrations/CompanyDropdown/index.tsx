import { faChevronDown, faChevronUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import MenuLink from './MenuLink'

const companies = [
    { id: 'AL', name: 'Adhesif Labels Ltd' },
    { id: 'AS', name: 'AIA Services New Zealand Limi...' },
    { id: 'AN', name: 'Air New Zealand Ltd' },
    { id: 'AB', name: 'All Blacks Organization' },
    { id: 'AH', name: 'All Hands Demo Limited' }
]

export const CompanyDropdown: React.FC = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const [filter, setFilter] = React.useState('')
    const dropdownRef = React.useRef<HTMLDivElement>(null)

    const handleClick = () => setIsOpen(!isOpen)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setFilter(event.target.value)

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            className="relative"
            ref={dropdownRef}
        >
            <button
                onClick={handleClick}
                className={`w-70 flex items-center justify-between gap-4 px-4 h-10 border rounded-xl transition-all
                          ${
                              isOpen
                                  ? 'bg-[#71b15d] border-[#71b15d] text-white shadow-md'
                                  : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300 shadow-sm'
                          }
                        `}
            >
                <span className="text-sm font-bold whitespace-nowrap">ABC Group Ltd</span>
                <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
                          ${isOpen ? 'border-white/40 bg-white/20' : 'border-gray-300'}
                        `}
                >
                    <FontAwesomeIcon
                        icon={isOpen ? faChevronUp : faChevronDown}
                        className="text-[8px]"
                    />
                </div>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl z-100 animate-in fade-in slide-in-from-top-2">
                    <div className="p-2 border-b border-gray-100">
                        <MenuLink label="Help & Guides" />
                        <MenuLink label="Terms of Use" />
                        <MenuLink label="Privacy Policy" />
                    </div>
                    <div className="p-4 border-b border-gray-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type to filter..."
                                value={filter}
                                onChange={handleChange}
                                className="w-full pl-4 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                            />
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />
                        </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto py-2">
                        {companies.map((each) => (
                            <button
                                key={each.id}
                                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                            >
                                <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white text-[12px] font-bold shrink-0">
                                    {each.id}
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-sky-600 truncate text-left">
                                    {each.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
