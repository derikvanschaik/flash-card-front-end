import ReactCardFlip from 'react-card-flip';
import FlashCard from './FlashCard';

export default function FlipCard({isFlipped, isEditing, question, answer, handleSubmit}){
    const isEditingQuestion = isEditing && !isFlipped;
    const isEditingAnswer = isEditing && isFlipped;

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <FlashCard  type={'question'} text={question} isEditing={isEditingQuestion} handleSubmit={handleSubmit}/>
            <FlashCard type={'answer'} text={answer} isEditing={isEditingAnswer} handleSubmit={handleSubmit}/>
        </ReactCardFlip>
    )
}