import {Card, Button, Stack } from 'react-bootstrap';
import {useState, useEffect} from 'react';

export default function FlashCard({type, text, isEditing, handleSubmit, handleCancel}){
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
                <Stack gap={3}>
                    <textarea rows="8" cols="10" value={val} onInput={(e) =>{setVal(e.target.value)}} />
                    <Button variant='light' onClick={() => handleSubmit(type, val)}>Submit Edit</Button>
                    <Button variant='dark' onClick={handleCancel}>Cancel</Button>
                </Stack>
                </>
            }
            </Card.Body>
        </Card>
    )
}