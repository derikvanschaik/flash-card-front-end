import {Button, Stack, Form} from 'react-bootstrap';
export default function AddNewDeck({handleNewTitleInput, handleAdd, handleCancel, newDeckTitle, inputRef}){
    return (
        <Form className='my-2'>
        <Stack gap={2}>
            <Form.Control 
                type="text" 
                placeholder="Enter Title" 
                onInput={handleNewTitleInput}
                ref={inputRef}
                value={newDeckTitle} />

            <Button variant="light" onClick={handleAdd}>Submit</Button>
            <Button variant="dark"onClick={handleCancel}>Cancel</Button>
        </Stack>
    </Form>
    )
}