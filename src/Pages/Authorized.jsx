import React, { useEffect, useState } from "react";
import Main from "../Components/Main/Main";
import { useDispatch, useSelector } from "react-redux";
import { getUserContacts } from "../Redux/userContactsReducer";
import Contacts from "../Components/Contacts/Contacts";
import ContactsNav from "../Components/ContactsNav/ContactsNav";
import PopUp from "../Components/PopUp/PopUp";

function Authorized(props) {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userAuth.user.id);
  const window = useSelector((state) => state.popup.window);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(getUserContacts(userId));
  }, [dispatch, userId]);

  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"col-3 contacts_container"}>
          <ContactsNav search={search} setSearch={setSearch}/>
          <Contacts search={search}/>
          {window ? <PopUp/> : false}
        </div>
        <div className={"col-9 main_container"}>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Authorized;
