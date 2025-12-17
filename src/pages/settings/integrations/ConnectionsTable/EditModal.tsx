import { faExclamationCircle, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import type { Connection } from '.'

interface EditModalProps {
    isOpen: boolean
    onClose: () => void
    onSave: () => void
    connection?: Connection
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, connection }) => {
    if (!isOpen || !connection) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white w-full max-w-md rounded-2xl p-8 relative shadow-2xl animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-black"
                >
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-xl"
                    />
                </button>
                <div className="mb-6">
                    <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                            <FontAwesomeIcon
                                icon={faExclamationCircle}
                                className="text-amber-500 text-2xl"
                            />
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-black mb-3 leading-tight">
                    Change to Existing Connection
                </h2>
                <p className="text-gray-800 text-lg font-medium leading-snug mb-2">
                    Changes may disrupt functionality and impact data flow.
                </p>
                <p className="text-gray-600 text-lg leading-snug mb-10">
                    Are you sure you want to make changes to {connection.integration} "
                    {connection.name}" connection?
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={onClose}
                        className="flex-1 py-3.5 border border-gray-200 rounded-xl text-lg font-bold text-black hover:bg-gray-50 transition-all"
                    >
                        Undo
                    </button>
                    <button
                        onClick={onSave}
                        className="flex-1 py-3.5 bg-[#0f172a] rounded-xl text-lg font-bold text-white hover:bg-black transition-all shadow-lg shadow-slate-200"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    )
}
