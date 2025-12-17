export default function FullLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 text-xl font-bold text-indigo-600">
                    MyDashboard
                </div>
                <nav className="flex-1 px-4 space-y-1">
                    <NavItem
                        label="Overview"
                        active
                    />
                    <NavItem label="Users" />
                    <NavItem label="Settings" />
                </nav>
                <div className="p-4">
                    <button className="text-sm text-gray-600 hover:text-red-600">Logout</button>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col">
                {/* Topbar */}
                <header className="h-16 bg-white border-b flex items-center justify-between px-6">
                    <h1 className="text-lg font-semibold">Overview</h1>
                    <div className="flex items-center gap-4">
                        <button className="relative text-sm text-gray-600">
                            Notifications
                            <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500" />
                        </button>
                        <div className="h-8 w-8 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-medium">
                            PC
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-6 space-y-6">
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <StatCard
                            title="Users"
                            value="1,248"
                        />
                        <StatCard
                            title="Revenue"
                            value="$12,480"
                        />
                        <StatCard
                            title="Errors"
                            value="23"
                        />
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="p-4 font-medium">Recent Users</div>
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Role</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow
                                    name="Juan Dela Cruz"
                                    role="Admin"
                                    status="Active"
                                />
                                <TableRow
                                    name="Maria Santos"
                                    role="User"
                                    status="Pending"
                                />
                                <TableRow
                                    name="Pedro Reyes"
                                    role="User"
                                    status="Active"
                                />
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </div>
    )
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
    return (
        <button
            className={`w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
        >
            {label}
        </button>
    )
}

function StatCard({ title, value }: { title: string; value: string }) {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="text-sm text-gray-500">{title}</div>
            <div className="text-2xl font-semibold mt-2">{value}</div>
        </div>
    )
}

interface TableRowProps {
    name: string
    role: string
    status: string
}

function TableRow({ name, role, status }: TableRowProps) {
    return (
        <tr className="border-t">
            <td className="px-4 py-2">{name}</td>
            <td className="px-4 py-2">{role}</td>
            <td className="px-4 py-2">
                <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                        status === 'Active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                    }`}
                >
                    {status}
                </span>
            </td>
        </tr>
    )
}
