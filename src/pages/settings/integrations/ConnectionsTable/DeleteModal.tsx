import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import type { Connection } from '.'

interface DeleteModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    connection?: Connection
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    connection
}) => {
    if (!isOpen || !connection) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-2xl p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-xl"
                    />
                </button>
                <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center relative">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faCircleXmark}
                                className="text-red-500 text-3xl"
                            />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-3">
                    Remove "{connection.name}" Connection?
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    Are you sure you want to remove {connection.integration} "{connection.name}"
                    connection?
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3.5 border border-gray-200 rounded-xl text-lg font-bold text-black hover:bg-gray-50 transition-all"
                    >
                        Undo
                    </button>
                    <button
                        onClick={onConfirm}
                        className="flex-1 py-3.5 bg-[#f43f5e] rounded-xl text-lg font-bold text-white hover:bg-red-600 transition-all shadow-lg shadow-red-200"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}
