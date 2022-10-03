import {Form} from 'react-bootstrap';
import SubmitCancel from '../reused/SubmitCancel';
export default function AddNewDeck({handleNewTitleInput, handleAdd, handleCancel, newDeckTitle, inputRef}){
    return (
        <Form className='my-2'>
            <SubmitCancel 
                HTML={
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Title" 
                        onInput={handleNewTitleInput}
                        ref={inputRef}
                        value={newDeckTitle} />
                }
                handleSubmit={handleAdd}
                handleCancel={handleCancel}
            />
        </Form>
    )
}