import React, { useState } from "react";
import Contact from "./Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../../Redux/userContactsReducer";

function Contacts({ search }) {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.userContacts.userContacts);
  const [edit, setEdit] = useState(null);
  const [text, setText] = useState('');

  const contactsLoading = useSelector(
    (state) => state.userContacts.userContactsLoading
  );
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const handleEdit = () => {
    setEdit('')
    dispatch(editContact(edit, text))
  };

  return (
    <>
      {contactsLoading ? (
        "Загрузка"
      ) : (
        <ul className={"list-group"}>
          {contacts
            .filter(
              (contact) =>
                contact.login.toUpperCase().indexOf(search.toUpperCase()) > -1
            )
            .map((contact) => (
              <Contact
                contact={contact}
                handleDelete={handleDelete}
                edit={edit}
                setEdit={setEdit}
                text={text}
                setText={setText}
                handleEdit={handleEdit}
                key={contact.id}
              />
            ))}
        </ul>
      )}
    </>
  );
}

export default Contacts;
