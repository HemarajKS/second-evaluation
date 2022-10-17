import "./login.css"

const Login = () => {
  return (
    <div className="loginPage">
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
  )
}

export default Login
