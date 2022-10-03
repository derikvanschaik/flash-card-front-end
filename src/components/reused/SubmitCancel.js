// Many of the different components use a structure of some HTML + submit + cancel. This component 
// puts that duplicate logic into one place. 
import {Button, Stack} from 'react-bootstrap';
export default function SubmitCancel({handleSubmit, handleCancel, HTML}){
    return (
        <Stack gap={3}>
            {HTML}
            <Button variant='light' onClick={handleSubmit}>Submit</Button>
            <Button variant='dark' onClick={handleCancel}>Cancel</Button>
        </Stack>
    )
}