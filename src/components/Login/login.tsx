import "./login.css"

const Login = () => {
  return (
    <div className="loginPage">
        <div className="loginFormTitle">
          SIGN IN TO YOUR ACCOUNT
        </div>
        <div className="loginFormBody">
          <form >
            <div className="inputContainer">
                 <input type="text" className="input" placeholder="Mobile Number" />
                 <div className="loginPW">
                  <input type="password" className="input" placeholder="MPin" />
                  <img src={require("../../assets/icons/eye_on.png")} alt="Password Eye" className="eyeIcon" />
                </div>
            </div>
            <div className="forgotPassword">
              <div>Forgot your password?</div>
            </div>
            <div className="signInButton">
              <button>SIGN IN</button>
            </div>
          </form>
        </div>
        <div className="signUpLink">
          <div> Don’t have a Account? SIGNUP</div>
         
        </div>
    </div>
  )
}

export default Login
