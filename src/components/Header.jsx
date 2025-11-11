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
            <nav>
                <h3 className='text-center fondo'>{hora}</h3>  
            </nav>
        </>
    );
}
export default Header;