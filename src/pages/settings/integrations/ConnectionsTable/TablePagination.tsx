import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface TablePaginationProps {
    currentPage: number
    totalPages: number
    handlePageChange: (page: number) => void
}

const TablePagination: React.FC<TablePaginationProps> = ({
    currentPage,
    totalPages,
    handlePageChange
}) => {
    const getPageRange = () => {
        const range: (number | string)[] = []
        const delta = 2

        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                range.push(i)
            } else if (
                (i === currentPage - delta - 1 && i > 1) ||
                (i === currentPage + delta + 1 && i < totalPages)
            ) {
                range.push('...')
            }
        }

        return range.filter((item, index) => range.indexOf(item) === index)
    }

    return (
        <div className="px-6 py-5 flex items-center justify-center border-t border-gray-100 bg-white relative">
            <div className="left-6">
                <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-xl text-sm font-bold text-gray-500 hover:text-black disabled:opacity-30 transition-all"
                >
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-xs"
                    />
                    Previous
                </button>
            </div>
            <div className="flex items-center gap-1">
                {getPageRange().map((page, index) => (
                    <React.Fragment key={index}>
                        {page === '...' ? (
                            <span className="px-2 text-gray-400">...</span>
                        ) : (
                            <button
                                onClick={() => handlePageChange(page as number)}
                                className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm transition-all
                  ${
                      currentPage === page
                          ? 'bg-gray-100 text-black font-bold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                  }
                `}
                            >
                                {page}
                            </button>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="right-6">
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="flex items-center gap-2 px-6 py-2 border border-gray-200 rounded-xl text-sm font-bold text-black hover:bg-gray-50 disabled:opacity-30 transition-all"
                >
                    Next
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-xs"
                    />
                </button>
            </div>
        </div>
    )
}

export default TablePagination
