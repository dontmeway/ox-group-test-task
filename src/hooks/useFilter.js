import React from "react"
import { getDateObject } from "../features/columns"


const useSort = (sortBy, array) => {
    const sortedArray = React.useMemo(() => {
        if (array.length !== 0) {
            if (sortBy === "name") {
                return [...array].sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()))
            } else if (sortBy === 'supplier') {
                return [...array].sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()))
            } else if (sortBy === 'lastUpdateTime')  {
                return [...array].sort((a, b) => getDateObject(a[sortBy]) - getDateObject(b[sortBy]))
            }
        }
        return array
    }, [sortBy, array])
    return sortedArray
}

export const useSortedAndFiltered = (query, sortBy, array) => {
    const sortedArray = useSort(sortBy, array)
    const sortedAndFiltered = React.useMemo(() => {
        if (query !== '') {
            return [...sortedArray].filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        }
        return sortedArray
    }, [query, sortedArray])
    return sortedAndFiltered
}