import { useState } from 'react'
import './Header.css'

function Wallet(){
    const [saldo, setSaldo] = useState(0)
    const [monto, setMonto] = useState(0)

    function sumar(){
     const nuevosaldo = saldo + monto
    return(setSaldo(nuevosaldo))}


    return (
        <>
        <div className='container-fluid'>
             <h1 className='text-center '>wallet interactiva!</h1>
        </div>
        <div>{saldo}</div>
        <input type="text" onChange={setMonto} />
        <button onClick={(sumar) => setSaldo(() => saldo + monto )}>
          agregar
        </button>
        <button onClick={() => setSaldo(() => saldo - 1)}>
         quitar
        </button>
        </>
    );
}
export default Wallet;