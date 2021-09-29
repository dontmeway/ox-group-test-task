import { Select } from 'antd'
import React from 'react'

const sortTypes = [{
    value: "name",
    title: "Name" 
}, 
{
    value: "supplier",
    title: "Supplier"
},
{
    value: "lastUpdateTime",
    title: "Updated date"
}]

const { Option } = Select

export const SortToggle = ({setFilter, filter}) => {
    
    return (
        <Select 
            onChange = {(value) => setFilter(prev => ({...prev, sortBy: value}))} 
            defaultValue = {filter.sortBy}>
            {sortTypes.map(option => 
            <Option 
                value = {option.value}>
                {option.title}
            </Option>)}
        </Select>
    )
}
