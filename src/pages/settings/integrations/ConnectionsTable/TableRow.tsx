import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faLayerGroup, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import type { CarbonType, Connection, ModalMode } from '.'

interface TableRowProps {
    row: Connection
    openModal: (mode: ModalMode, connection: Connection) => void
}

const TableRow: React.FC<TableRowProps> = ({ row, openModal }) => {
    const isCarbon = row.source === ('carbon' as CarbonType)
    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 flex items-center gap-3">
                <div className="w-6 h-6 bg-[#00adef] rounded flex items-center justify-center text-[10px] text-white">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                {row.integration}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#008ba3] underline cursor-pointer">
                {row.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span
                    className={`px-3 py-1 rounded-md text-xs font-bold ${isCarbon ? 'bg-orange-50 text-orange-500 border border-orange-200' : 'bg-emerald-50 text-emerald-500 border border-emerald-200'}`}
                >
                    {row.source}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.entity}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{row.interval}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#008ba3] underline cursor-pointer">
                Copy to Clipboard
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-[#008ba3] font-medium cursor-pointer">
                View{' '}
                <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-[10px] ml-1"
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center gap-3 justify-end text-gray-400">
                    <button
                        onClick={() => openModal('edit', row)}
                        className="hover:text-blue-600"
                    >
                        <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                        onClick={() => openModal('delete', row)}
                        className="hover:text-red-500 transition-colors"
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default TableRow
