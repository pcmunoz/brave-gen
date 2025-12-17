import FullLayout from '../../../components/layout/FullLayout'
import ConnectionsTable from './ConnectionsTable'

const items = [
    {
        title: 'Amazon QuickSight',
        description: 'Amazon BI service to create dashboards and interactive visualisations.',
        imgSrc: '/images/amazon.png'
    },
    {
        title: 'Kafka',
        description: 'Real-time data streaming, event-driven architectures and messaging systems.',
        imgSrc: '/images/kafka.png'
    },
    {
        title: 'Power BI',
        description: 'Microsoft BI service to create dashboards and data visualisations.',
        imgSrc: '/images/powerbi.png'
    },
    {
        title: 'Zapier',
        description:
            'Automation tool that connects various apps and services to automate workflows.',
        imgSrc: '/images/zapier.png'
    },
    {
        title: 'Tableau',
        description: 'BI service that helps seeing and transforming data into actionable insights.',
        imgSrc: '/images/tableau.png'
    },
    {
        title: 'Measurabl',
        description: 'Enable the push and pull of data to and from Measurabl via an API.',
        imgSrc: '/images/measurabl.png'
    }
]

interface ServiceCardProps {
    title: string
    description: string
    imgSrc: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imgSrc }) => {
    return (
        <div className="w-full h-full bg-[#eeeff1] border border-gray-300 rounded-2xl p-8 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
            <div>
                <div className="flex items-start gap-4 mb-4">
                    <img
                        height={24}
                        width={48}
                        src={imgSrc}
                        alt={title}
                    />
                    <h3 className="text-2xl font-bold text-black leading-tight pt-2">{title}</h3>
                </div>

                <p className="text-gray-800 text-lg leading-snug mb-8">{description}</p>
            </div>

            <div className="mt-auto">
                <button className="bg-[#0f172a] text-white px-4 py-2 rounded-lg hover:bg-black transition-colors w-max">
                    Add Connection
                </button>
            </div>
        </div>
    )
}

const Integrations = () => {
    return (
        <FullLayout>
            <div className="mx-auto">
                <div className="p-8">
                    <h1 className="text-black text-3xl font-semibold mb-4">
                        Choose a Service to Connect
                    </h1>
                    <p className="text-slate-500 leading-relaxed mb-5">
                        Connect BraveGen to other tools you use.
                    </p>
                    <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full">
                        {items.map((item) => (
                            <ServiceCard
                                {...item}
                                key={item.title}
                            />
                        ))}
                    </div>
                    <ConnectionsTable />
                </div>
            </div>
        </FullLayout>
    )
}

export default Integrations
