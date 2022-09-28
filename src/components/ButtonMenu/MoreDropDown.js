import {Dropdown} from 'react-bootstrap';

export default function MoreDropDown({setIsEditing, isEditing, handleDelete, curCardIdx}){
    return (
        <Dropdown>
            <Dropdown.Toggle variant="light">
                More
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item onClick={() => setIsEditing(true)} disabled={isEditing === true}>Edit</Dropdown.Item>
            <Dropdown.Item onClick={() => handleDelete(curCardIdx)}>Delete</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}