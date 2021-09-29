import { Button, Input } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import { SortToggle } from '../UI/SortToggle'


export const Header = ({filter, setFilter}) => {

    const handleLogOut = () => {
        sessionStorage.clear()
        window.location.reload()
    }

    return (
        <div className = "header">
                <div className = "header__logo">
                    <Link to = "/">
                            Main
                    </Link>
                    <Link to = "/search">
                        Search
                    </Link>
                </div>
            <div className = "header__query">
                <Input 
                    value = {filter.query} 
                    onChange = {(e) => setFilter(prev => ({...prev, query: e.target.value}))} 
                    placeholder = "Search..." />
                <SortToggle 
                    setFilter = {setFilter} 
                    filter = {filter} />
                <Button onClick = {handleLogOut}>Log Out</Button>
            </div>
        </div>
    )
}

