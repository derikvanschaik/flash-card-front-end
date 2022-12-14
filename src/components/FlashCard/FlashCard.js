import {Card} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import SubmitCancel from '../reused/SubmitCancel';

export default function FlashCard({type, text, isEditing, handleSubmit, handleCancel}){

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
                <SubmitCancel 
                    HTML={
                        <textarea rows="8" cols="10" value={val} onInput={(e) =>{setVal(e.target.value)}} />
                    }
                    handleSubmit={() => handleSubmit(type, val)}
                    handleCancel={handleCancel}
                    />
            }
            </Card.Body>
        </Card>
    )
}