import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
    faCamera,
    faCloud,
    faFolder,
    faHouse,
    faThumbsUp,
    faUser
} from '@fortawesome/free-regular-svg-icons'
import {
    faBox,
    faCheck,
    faDisplay,
    faFaucet,
    faGauge,
    faGear,
    faLayerGroup,
    faReceipt,
    faSitemap,
    faTags,
    faTree,
    faWarehouse
} from '@fortawesome/free-solid-svg-icons'

interface Menu {
    label: string
    icon: IconProp
    link: string
    disabled?: boolean
}

interface StringKeyMenu {
    [key: string]: Menu
}

export const settingsOrganizationMenu: StringKeyMenu = {
    manage: { label: 'Manage', icon: faHouse, link: 'manage' },
    users: { label: 'Users', icon: faUser, link: 'users' },
    tags: { label: 'Tags', icon: faTags, link: 'tags' },
    integrations: { label: 'Integrations', icon: faLayerGroup, link: 'integrations' }
}

export const settingsUtilitiesMenu: StringKeyMenu = {
    configuration: { label: 'Configuration', icon: faGear, link: 'configuration' },
    hierarchy: { label: 'Hierarchy', icon: faSitemap, link: 'hierarchy' },
    assets: { label: 'Assets', icon: faBox, link: 'assets' }
}

export const settingsCarbonMenu: StringKeyMenu = {
    'carbon-configuration': { label: 'Configuration', icon: faGear, link: 'carbon-configuration' },
    'carbon-hierarchy': { label: 'Hierarchy', icon: faSitemap, link: 'carbon-hierarchy' },
    'inventory-assets': { label: 'Inventory Assets', icon: faWarehouse, link: 'inventory-assets' },
    'emission-factors': { label: 'Emission Factors', icon: faCloud, link: 'emission-factors' },
    snapshots: { label: 'Snapshots', icon: faCamera, link: 'snapshots', disabled: true }
}

export const settingsDisplaysMenu: StringKeyMenu = {
    'manage-display': { label: 'Manage', icon: faDisplay, link: 'manage-display' }
}

export const allSettingsMenu = {
    ...settingsOrganizationMenu,
    ...settingsUtilitiesMenu,
    ...settingsCarbonMenu,
    ...settingsDisplaysMenu
}

export const sidebarMenu: StringKeyMenu = {
    insights: { label: 'Insights', icon: faGauge, link: 'insights' },
    collect: { label: 'Collect', icon: faFolder, link: 'collect' },
    reviews: { label: 'Reviews', icon: faThumbsUp, link: 'reviews' },
    carbon: { label: 'Carbon', icon: faTree, link: 'carbon' },
    utilities: { label: 'Utilities', icon: faFaucet, link: 'utilities' },
    reports: { label: 'Reports', icon: faReceipt, link: 'reports' },
    actions: { label: 'Actions', icon: faCheck, link: 'actions' }
}

export const sidebarMenuSetting: Menu = { label: 'Settings', icon: faGear, link: 'settings' }
