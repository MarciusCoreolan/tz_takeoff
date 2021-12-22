import React from "react";
import {useDispatch} from "react-redux";

function ContactsNav({ search, setSearch }) {
    const dispatch = useDispatch()
    const handleOpen = () =>{
        dispatch({type: 'window/open'})
    }
  return (
    <div className={"w-100 pt-2 pb-2 d-flex g-0"}>
        <button type="button" className="btn btn-success me-2" onClick={handleOpen}>|||</button>
        <input
        type="text"
        placeholder={"Поиск"}
        className={"form form-control"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default ContactsNav;
