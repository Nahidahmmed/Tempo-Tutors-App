import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProvider'
export default function UseCarts() {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { isPending, refetch, data: cart = [] } = useQuery({
        queryKey: ['addedClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL}/addedClass?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json()
        },
    })
    return [cart, refetch, isPending]
}
