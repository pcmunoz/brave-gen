export const capitalizeFirstLetter = (str: string) => {
    if (str.length === 0) {
        // Handle empty strings
        return ''
    }
    return str.charAt(0).toUpperCase() + str.slice(1)
}
