import { Table } from 'antd'
import React from 'react'
import { columns } from '../features/columns'

export const TableComponent = ({sortedAndFiltered}) => {
    return (
        <Table 
            dataSource = {sortedAndFiltered} 
            columns = {columns}
            pagination = {false}>
        </Table>
    )
}
