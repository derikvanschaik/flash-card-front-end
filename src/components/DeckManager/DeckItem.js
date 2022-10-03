import {useState} from  'react';
import { EditIcon, DeleteIcon } from '../icons/Icons';
import {Form} from 'react-bootstrap';
import SubmitCancel from '../reused/SubmitCancel';

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
                            <span className='p-2' onClick={() => setIsEditing(true)}><EditIcon /></span>
                            <span className='p-2' onClick={handleDelete}><DeleteIcon /></span>
                        </div>
                    </>
                }
                {
                    isEditing &&
                    <SubmitCancel 
                        HTML={
                            <Form.Control 
                                type="text" 
                                placeholder="Enter Changed Title" 
                                onInput={(e) => setNewTitle(e.target.value)}
                                value={newTitle} />
                        }
                        handleSubmit={handleEdit}
                        handleCancel={() => setIsEditing(false)}
                    />
                }
        </li>
    )
}