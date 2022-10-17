import "./login.css"

const Login = () => {
  return (
    <div className="login">
     <div className="loginContainer">
      <div className="loginLogoContainer">
        <div className="loginLogo">
          <img src={require("../../assets/images/logo.png")} alt="Login Logo" />
        </div>
        <div className="loginLogoBody">
          Protect & Manage every password in your business
        </div>
      </div>
      <div className="loginForm">
        <div className="loginFormTitle">
          SIGN IN TO YOUR ACCOUNT
        </div>
        <div className="loginFormBody">
          <form >
            <input type="text" className="input" />
            <input type="password" className="input" />
            <div className="forgotPassword">
              <div>Forgot your password?</div>
            </div>
            <div className="signInButton">
              <button>SIGN IN</button>
            </div>
          </form>
        </div>
        <div className="signUpLink">
          Don’t have a Account? SIGNUP
        </div>
      </div>
     </div>
    </div>
  )
}

export default Login
