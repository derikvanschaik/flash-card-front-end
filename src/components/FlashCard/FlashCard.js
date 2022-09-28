import Card from 'react-bootstrap/Card';

export default function FlashCard({type, text}){
    return (
        <Card className='py-4 px-2 text-center flashcard'>
            <Card.Body>
            <p className={type === 'question'? 'h3' :''}>
                {text}
            </p>
            </Card.Body>
        </Card>
    )
}