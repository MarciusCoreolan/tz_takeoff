const initialState = {
  userContacts: [],
  userContactsLoading: false,
  error: null,
};

export const userContactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "get/user/contacts/start":
      return {
        ...state,
        userContactsLoading: true,
      };
    case "get/user/contacts/successes":
      return {
        userContactsLoading: false,
        userContacts: action.contacts,
        error: null,
      };
    case "get/user/contacts/error":
      return {
        userContacts: [],
        error: action.error,
      };
    case 'add/new/contact':
      return {
        ...state,
        userContacts: [...state.userContacts, action.newContact]
      };
    case 'delete/contact':
      return {
        ...state,
        userContacts: state.userContacts.filter((item => item.id !== action.deleteContact))
      };
    case 'edit/contact':
      return {
        ...state,
        userContacts: state.userContacts.map((item => {
          if(item.id === action.editContact.id){
            return {
              ...item,
              login: action.editContact.login
            }
          } else {
            return item
          }
        }))
      };
    default:
      return state;
  }
};

export const getUserContacts = (id) => {
  return (dispatch) => {
    dispatch({
      type: "get/user/contacts/start",
    });
    fetch(`http://localhost:3001/contacts?userId=${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (!json.error) {
          dispatch({
            type: "get/user/contacts/successes",
            contacts: json,
          });
        } else {
          dispatch({
            type: "get/user/contacts/error",
            error: json.error,
          });
        }
      });
  };
};
export const addNewContact = (newContact, userId)=>{
  return (dispatch) => {
    fetch(`http://localhost:3001/contacts`, {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        login: newContact
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
        .then((res) => res.json())
        .then((json) => {
          dispatch({
            type: 'add/new/contact',
            newContact: json
          })
        });
  };
}
export const deleteContact = (id) =>{
  return (dispatch) => {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'DELETE'
    })
        .then((res) => res.json())
        .then((json) => {
          dispatch({
            type: 'delete/contact',
            deleteContact: id
          })
        });
  };
}
export const editContact = (id, text) =>{
  return (dispatch) => {
    fetch(`http://localhost:3001/contacts/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        login: text
      }),
      headers: {
        "Content-Type":"application/json"
      }
    })
        .then(response => response.json())
        .then((json)=>{
          dispatch({
            type: 'edit/contact',
            editContact: json
          })
        })
  };
}
