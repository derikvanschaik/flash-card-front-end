import {Card, Button} from 'react-bootstrap';
import {useState, useEffect} from 'react';

export default function FlashCard({type, text, isEditing, handleSubmit}){
    // console.log(type);

    const [val, setVal] = useState('');
    // without this, a caching effect will occur on the text displayed in the text 
    useEffect(() =>{
        if(isEditing){
            setVal(text);
        }else{
            setVal('');
        }
    }, [isEditing]);

    return (
        <Card className='py-4 px-2 text-center flashcard'>
            <Card.Body>
            {
                !isEditing && 
                <p className={type === 'question'? 'h3' :''}>
                    {text}
                </p>
            }
            {
                isEditing &&
                <>
                    <textarea value={val} onInput={(e) =>{setVal(e.target.value)}} />
                    <Button variant='light' onClick={() => handleSubmit(type, val)}>Submit Edit</Button>
                </>
            }
            </Card.Body>
        </Card>
    )
}