import {useState} from 'react'
import '../css/Conversor.css'

const Conversor = ({moedaA, moedaB}) => {
    const [moedaAValue, setMoedaA] = useState('')
    const [moedaBValue, setMoedaB] = useState(0)

    function converter() {
      
    }

  return (
    <div className="conversor">
        <h2>Converter {moedaA} para {moedaB}</h2>
        <input
            type='text' 
            onChange={(event) => {
                setMoedaA(event.target.value)
            }}
            />
        <button onClick={converter}>Converter</button>
        <h2>Valor convertido</h2>
    </div>
  )
}

export default Conversor