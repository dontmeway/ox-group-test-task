import { Input, Skeleton } from 'antd'
import { TableComponent } from '../components/Table'
import React from 'react'
import { Pages } from '../UI/Pages'

function Home({isLoading, sortedAndFiltered, filter, setFilter, isSearchPage}) {

    return (
        <div className = "container">
            {isSearchPage && <Input 
                                    value = {filter.query} 
                                    onChange = {(e) => setFilter(prev => ({...prev, query: e.target.value}))} 
                                    placeholder = "Search..." />}
            {!isLoading ? 
            <TableComponent sortedAndFiltered = {sortedAndFiltered}/>
            : 
            <Skeleton active paragraph = {{rows: 18}} size = {"large"}/>
            }
            <Pages className = "pagination" />
        </div>
    )
}

export default Home
