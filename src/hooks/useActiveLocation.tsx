import { useLocation } from 'react-router'

import { capitalizeFirstLetter } from '../helpers/common'

const useActiveLocation = () => {
    const location = useLocation()
    const currentPathname = location.pathname
    const sPath = currentPathname.split('/').filter(Boolean)
    const currentPath = sPath.at(-1)
    const currentPage = capitalizeFirstLetter(currentPath ?? '')
    const parentPath = sPath.length === 2 ? sPath.at(0) : ''

    return { currentPage, currentPath, parentPath }
}

export default useActiveLocation
