import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/config'
import { useHistory } from 'react-router-dom'
import { Spin } from 'antd';

export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user,setUser] = useState({})
    const history = useHistory()
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        const unsubscribed = auth.onAuthStateChanged((user) => {
            if(user) {
                const {displayName, email, uid, photoURL } = user;
                setUser({displayName, email, uid, photoURL});
                setIsLoading(false)
                history.push('/')
                return;
            }
            setIsLoading(false)
            history.push('/login');

        })


    // clean function
        return () => {
            unsubscribed()
        }
    },[history])

    return(
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin/> : children}
        </AuthContext.Provider>
    )
}

