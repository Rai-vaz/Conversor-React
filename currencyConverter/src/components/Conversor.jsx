import {useState} from 'react'

const Conversor = ({moedaA, moedaB}) => {
    const [moedaAValue, setMoedaA] = useState('')
    console.log(moedaAValue)

  return (
    <div className="conversor">
        <h2>Converter {moedaA} para {moedaB}</h2>
        <input
            type='text' 
            onChange={(event) => {
                setMoedaA(event.target.value)
            }}
            />
        <button>Converter</button>
        <h2>Valor convertido</h2>
    </div>
  )
}

export default Conversor