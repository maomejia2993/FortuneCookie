
const Quote = ({ phrase}) => {

    console.log(phrase)

    return (
        <p className="container__phrases">{phrase.phrase}</p>
    )
}

export default Quote
