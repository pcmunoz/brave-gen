import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface TableHeadProps {
    label: string
    sortable: boolean
    active: boolean
    handleClick?: VoidFunction
}

const TableHead: React.FC<TableHeadProps> = ({ label, sortable, active, handleClick }) => (
    <th
        className="px-6 py-4 text-left text-sm font-medium text-gray-600"
        onClick={handleClick}
    >
        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
            {label}
            {sortable && (
                <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`text-[10px] ${active ? 'text-black' : 'text-gray-300'}`}
                />
            )}
        </div>
    </th>
)

export default TableHead
