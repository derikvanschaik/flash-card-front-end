import ReactCardFlip from 'react-card-flip';
import FlashCard from './FlashCard';

export default function FlipCard({isFlipped, question, answer}){
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <FlashCard  type={'question'} text={question}/>
            <FlashCard type={'answer'} text={answer} />
        </ReactCardFlip>
    )
}