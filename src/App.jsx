import { useState } from 'react'
import './App.css'
import phrases from './Utils/phrases.json'
import BtnQuote from './components/BtnQuote'
import Quote from './components/Quote'
import getRandomElemArray from './Utils/getRandomElemArray'

function App() {

const phraseRandom = getRandomElemArray(phrases)
const numberRandom = getRandomElemArray([1, 2, 3, 4])

const [quote, setQuote] = useState(phraseRandom)
const [numberBg, setNumberBg] = useState(numberRandom)

const bgStyle ={
  backgroundImage: `url(/fondo${numberBg}.png)`
}

  return (
      <div className= "container" style={bgStyle}>
       <hi className= "container__title">Galleta de la fortuna</hi>
       <Quote phrase={quote}/>
       <BtnQuote 
        setQuote={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
        />
      </div>
  )
}

export default App
