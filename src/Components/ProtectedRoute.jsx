import React from 'react'
import { Navigate } from 'react-router'
import { useAuth } from '../Contexts/AuthContext'

const ProtectedRoute = ({children}) => {
    const {currentUser} = useAuth()

    if(!currentUser){
        return <Navigate to='/signin'/>
    } else {
        return children
    }

}

export default ProtectedRoute