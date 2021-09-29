import React from 'react'
import { useDispatch } from 'react-redux'
import { getToken } from '../API/Auth'




export const LogIn = ({error, size, page}) => {
    const [user, setUser] = React.useState({domain: 'face', userName: 'fortest', password: 'fortest1'})
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getToken({
            ...user,
            dispatch,
            size,
            page
        }))
    }

    React.useEffect(() => {
        if (error) {
            alert("Wrong credentials, try again")
        }
    }, [error])

    return (
        <div className = "loginWrapper">
                <form onSubmit = {handleSubmit} className = "login">
                    <input
                        onChange = {(e) => setUser(prev => ({...prev, domain: e.target.value}))} 
                        value = {user.domain} 
                        placeholder = "Subdomain" 
                        required/>
                    <input  
                        onChange = {(e) => setUser(prev => ({...prev, userName: e.target.value}))} 
                        value = {user.userName} 
                        placeholder = "Username" 
                        required/>
                    <input  
                        onChange = {(e) => setUser(prev => ({...prev, password: e.target.value}))} 
                        value = {user.password} 
                        type = "password" 
                        placeholder = "Password" 
                        required/>
                    <button type = "submit">LogIn</button>
                </form>
        </div>
    )
}
