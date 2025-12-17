import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { DeleteModal } from './DeleteModal'
import { EditModal } from './EditModal'
import TableHead from './TableHead'
import TablePagination from './TablePagination'
import TableRow from './TableRow'

const generateMockData = () => {
    const integrations = ['Amazon Quicksight', 'Kafka', 'Zapier', 'Salesforce', 'Google Analytics']
    const names = ['Energy', 'Logistics', 'Operations', 'Marketing', 'Security', 'Infrastructure']
    const entities = ['ABC Group LTD', 'Global Corp', 'Tech Solutions', 'Energy Partners']

    return Array.from({ length: 1000 }, (_, i) => ({
        id: i + 1,
        integration: integrations[Math.floor(Math.random() * integrations.length)],
        name: `${names[Math.floor(Math.random() * names.length)]} ${i + 1}`,
        source: i % 3 === 0 ? 'Utility' : 'Carbon',
        entity: `${entities[Math.floor(Math.random() * entities.length)]} - Node ${i}`,
        interval: i % 5 === 0 ? 'ToU' : i % 2 === 0 ? 'Monthly' : '-'
    }))
}

const ALL_DATA = generateMockData()

export type CarbonType = 'Carbon' | 'Utility'

export interface Connection {
    id: number
    integration: string
    name: string
    source: CarbonType
    entity: string
    interval: string
}

export type ModalMode = 'edit' | 'delete' | null

export const ConnectionsTable: React.FC = () => {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [sortConfig, setSortConfig] = React.useState<{
        key: keyof Connection
        direction: 'asc' | 'desc'
    } | null>(null)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [modalMode, setModalMode] = React.useState<ModalMode>(null)
    const [targetConnection, setTargetConnection] = React.useState<Connection | undefined>(
        undefined
    )

    const itemsPerPage = 10

    const filteredData = React.useMemo(() => {
        let data = ALL_DATA.filter(
            (item) =>
                item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.integration.toLowerCase().includes(searchTerm.toLowerCase())
        )

        if (sortConfig) {
            data.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key])
                    return sortConfig.direction === 'asc' ? -1 : 1
                if (a[sortConfig.key] > b[sortConfig.key])
                    return sortConfig.direction === 'asc' ? 1 : -1
                return 0
            })
        }
        return data
    }, [searchTerm, sortConfig])

    const totalPages = Math.ceil(filteredData.length / itemsPerPage)

    const paginatedData = React.useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage
        return filteredData.slice(start, start + itemsPerPage)
    }, [filteredData, currentPage])

    const openModal = (mode: ModalMode, connection: Connection) => {
        setTargetConnection(connection)
        setModalMode(mode)
    }

    const handleConfirmDelete = () => {
        console.log(`Deleting ${targetConnection}...`)
        setModalMode(null)
        setTargetConnection(undefined)
    }

    const requestSort = (key: keyof Connection) => {
        let direction: 'asc' | 'desc' = 'asc'
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc'
        }
        setSortConfig({ key, direction })
    }

    return (
        <>
            <div className="mt-12 w-full">
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-black mb-4">Existing Connections</h2>
                    <div className="relative max-w-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                className="text-gray-400 text-sm"
                            />
                        </div>
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-sm focus:ring-1 focus:ring-indigo-500"
                            placeholder="Integration or Name"
                        />
                    </div>
                </div>

                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-white">
                            <tr>
                                <TableHead
                                    label="Integration"
                                    handleClick={() => requestSort('integration')}
                                    sortable
                                    active={sortConfig?.key === 'integration'}
                                />
                                <TableHead
                                    label="Name"
                                    handleClick={() => requestSort('name')}
                                    sortable
                                    active={sortConfig?.key === 'name'}
                                />
                                <TableHead
                                    label="Source"
                                    sortable={false}
                                    active={false}
                                />
                                <TableHead
                                    label="Entity/Group"
                                    sortable={false}
                                    active={false}
                                />
                                <TableHead
                                    label="Interval"
                                    sortable={false}
                                    active={false}
                                />
                                <TableHead
                                    label="Connector URL"
                                    sortable={false}
                                    active={false}
                                />
                                <TableHead
                                    label="Instructions"
                                    sortable={false}
                                    active={false}
                                />
                                <th className="px-6 py-4"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 bg-white">
                            {paginatedData.length > 0 ? (
                                paginatedData.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        row={{ ...row, source: row.source as CarbonType }}
                                        openModal={openModal}
                                    />
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={8}
                                        className="px-6 py-10 text-center text-gray-500 italic"
                                    >
                                        No connections found matching "{searchTerm}"
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <TablePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageChange={setCurrentPage}
                    />
                </div>
                <EditModal
                    isOpen={modalMode === 'edit'}
                    onClose={() => setModalMode(null)}
                    onSave={() => {
                        console.log('Saving changes...')
                        setModalMode(null)
                    }}
                    connection={targetConnection}
                />
                <DeleteModal
                    isOpen={modalMode === 'delete'}
                    onClose={() => setModalMode(null)}
                    onConfirm={handleConfirmDelete}
                    connection={targetConnection}
                />
            </div>
        </>
    )
}

export default ConnectionsTable
