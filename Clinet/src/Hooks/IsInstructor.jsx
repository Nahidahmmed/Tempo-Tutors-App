import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

export default function IsInstructor() {
    const {user} = useContext(AuthContext);
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/instructor/${user?.email}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch isAdmin status');
                }
                const data = await res.json();
                return data.instructor; // Directly return the admin property
            } catch (error) {
                console.error('Error fetching instructor status:', error);
                throw error;
            }
        }
    });

    return [isInstructor,isInstructorLoading]
}
