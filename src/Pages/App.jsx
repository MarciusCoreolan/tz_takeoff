import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../global_styles.css";
import { useDispatch, useSelector } from "react-redux";
import { userAuthorization } from "../Redux/userAuthReducer";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Authorization from "../Components/Authorization/Authorization";
import Authorized from "./Authorized";

function App(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const user = useSelector((state) => state.userAuth.user);

  const handleSignIn = () => {
    dispatch(userAuthorization(login, pass, navigate));
  };

  return (
    <>
      {user ? (
        <Routes>
          <Route path={`/*`} element={<Authorized />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path={"/"}
            element={
              <Authorization
                login={login}
                pass={pass}
                setLogin={setLogin}
                setPass={setPass}
                handleSignIn={handleSignIn}
              />
            }
          />
          <Route path={"*"} element={<Navigate to={"/"} replace />} />
        </Routes>
      )}
    </>
  );
}

export default App;
