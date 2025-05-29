import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';


const Dashboard = () => {
    const [user, setUser] = useState({});

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        console.log(user);
    },[])
    
    const navigate = useNavigate();

    return (
        <div>
            <section
            className="h-[85vh] w-full bg-cover bg-center flex"
            style={{
                backgroundImage:
                "url('/download (2).jpeg')",
            }}>
                <div className="flex bg-black/30 backdrop-blur-none h-110 rounded-lg w-full !p-10 !m-10 gap-20 items-center">
                <div className="flex flex-col items-center justify-center gap-5">
                    
                    <h1 className="text-5xl text-white text-center">
                        {user?.fullName} Welcome to Glow with Mind;)
                    </h1>
                </div>
                <div className="!p-10">
                    <Calendar />
                </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard