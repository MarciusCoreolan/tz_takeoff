import React from "react";

function Authorization({ login, setLogin, pass, setPass, handleSignIn }) {
  return (
    <div className={"authorization text-center"}>
      <div className={"mb-3"}>
        <input
          type="text"
          className="form form-control mb-3"
          placeholder="Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <input
          type="password"
          className="form form-control"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button type="button" className="btn btn-warning" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
}

export default Authorization;
