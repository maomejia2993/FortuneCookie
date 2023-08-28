import getRandomElemArray from "../Utils/getRandomElemArray"

const BtnQuote = ({ setQuote, phrases, setNumberBg }) => {
    
    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setNumberBg(getRandomElemArray([1, 2, 3, 4]))
    }

  return (
    <button className="container__btn"  onClick={handleRandomPhrase}>🥐 Otra Galleta 🥐</button>
  )
}

export default BtnQuote