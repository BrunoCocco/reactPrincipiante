import { useState, useEffect } from 'react'
import './Header.css'

function Header(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const intervalo = setInterval(() => {
        setHora(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(intervalo);
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <h3 className='text-center bg-black'>{hora}</h3>
            </div>
        </>
    );
}
export default Header;