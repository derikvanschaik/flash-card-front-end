import {useState, useRef} from  'react';
import { FaEdit, FaTrash } from "react-icons/fa";
import {Button, Stack, Form} from 'react-bootstrap';

export default function DeckItem({isActive, title, handleSelect, handleDelete, handleChangeTitle}){
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);

    const handleEdit = () =>{
        handleChangeTitle(newTitle);
        setIsEditing(false);
    }

    return (
        <li 
            className={`list-group-item ${isActive && !isEditing? 'active' : ''} d-flex flex-row align-items-center justify-content-between`}
            onClick={handleSelect} >
                {
                    !isEditing &&
                    <>
                        {title}
                        <div>
                            <span className='p-2' onClick={() => setIsEditing(true)}><FaEdit /></span>
                            <span className='p-2' onClick={handleDelete}><FaTrash /></span>
                        </div>
                    </>
                }
                {
                    isEditing &&
                    <Stack gap={2}>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Changed Title" 
                            onInput={(e) => setNewTitle(e.target.value)}
                            value={newTitle} />
            
                        <Button variant="light" onClick={handleEdit}>Submit</Button>
                        <Button variant="dark"onClick={() => setIsEditing(false)}>Cancel</Button>
                    </Stack>
                }
        </li>
    )
}