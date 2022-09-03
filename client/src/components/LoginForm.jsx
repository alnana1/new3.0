import React from "react";


const LoginForm  = () => {
function LoginForm() {
  let history = useHistory();

  return (
    <div>
      <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button
        onClick={() => {
          history.push("../App.jsx")
        }}
        > Login </button>
    </div>
  );

}
}
export default LoginForm;