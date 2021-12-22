import React from "react";
import trash from "../../Icons/trash-fill.svg";
import update from "../../Icons/pencil-square.svg";

function Contact({ contact, handleDelete, edit, setEdit, text, setText, handleEdit }) {
  return (
    <li className={"list-group-item d-flex justify-content-between"}>
      <div>
        {edit === contact.id ? (
            <div className={'d-flex'}>
                <input placeholder={"edit"} className={"form-control me-1"} value={text} onChange={e=> setText(e.target.value)}/>
                <button onClick={handleEdit} className={'btn btn-danger me-2'}>Edit</button>
            </div>
        ) : (
          contact.login
        )}
      </div>
      <div className={"d-flex"}>
        <div onClick={() => setEdit(contact.id)}>
          <img src={update} alt="" />
        </div>
        <div onClick={() => handleDelete(contact.id)} className={"ms-2"}>
          <img src={trash} alt="" />
        </div>
      </div>
    </li>
  );
}

export default Contact;
