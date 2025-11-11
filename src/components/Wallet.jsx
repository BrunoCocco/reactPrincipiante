import { useState } from 'react'
import './Header.css'

function Wallet(){
    const [saldo, setSaldo] = useState(0)
    
    return (
        <>
        <div className='container-fluid'>
             <h1 className='text-center '>wallet interactiva!</h1>
        </div>
        <div>{saldo}</div>
        <button onClick={() => setSaldo(() => saldo + 1 )}>
          agregar
        </button>
        <button onClick={() => setSaldo(() => saldo - 1)}>
         quitar
        </button>
     
        </>
    );
}
export default Wallet;