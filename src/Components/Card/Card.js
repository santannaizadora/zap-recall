import turn from '../../assets/img/setinha.png'
import { useState } from 'react';
import './card.css'


const Card = (props) => {
    const [cardSelected, setCardSelected] = useState(false);
    const [turnedCard, setTurnedCard] = useState(false);
    const [answeredCard, setAnsweredCard] = useState(false);
    const { question, answer, numQuestion } = props

    const cssMaxCard = `card ${cardSelected ? "" : "hide"}`;
    const cssMinCard = `question ${(cardSelected || turnedCard) ? "hide" : ""}`;
    const cssTurnCard = `${(turnedCard) ? "rotate" : ""}`
    return (
        <div className='flashcard'>
            <div className={cssMinCard} onClick={() => {
                setCardSelected(true);
            }}>
                <h1>Pergunta {numQuestion}</h1>
            </div>
            <div className={cssMaxCard+cssTurnCard}>
                <div className=" front-face face">
                    <p className='card-text'>{answer}</p>
                </div>
                <div className='back-face face'>
                    <p className='card-text'>{question}</p>
                    <img
                        className='arrow'
                        src={turn} alt='virar card'
                        onClick={() => setTurnedCard(true)}
                    />
                </div>
            </div>
        </div>
    )

}

export default Card;