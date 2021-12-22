import React, {useState} from 'react';
import style from './PopUp.module.css'
import {useDispatch, useSelector} from "react-redux";
import {addNewContact} from "../../Redux/userContactsReducer";

function PopUp(props) {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userAuth.user.id)
    const [newContact, setNewContact] = useState('')
    const handleClose = () =>{
        dispatch({type: 'window/close'})
    }
    const handleAdd = () =>{
        dispatch(addNewContact(newContact, userId))
        setNewContact('')
    }
    return (
        <div className={style.popup}>
            <div className={style.button_close}>
                <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={handleClose}></button>
            </div>
            <input type="text" className={'form-control'} placeholder={'Add new contact'} value={newContact} onChange={e=> setNewContact(e.target.value)}/>
            <button onClick={handleAdd} type="button" className="btn btn-warning mt-2">Add</button>
        </div>
    );
}

export default PopUp;