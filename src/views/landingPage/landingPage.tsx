import Login from "../../components/Login/login"
import "./landingPage.css"


const LandingPage = () => {
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
        <Login />
      </div>
     </div>
    </div>
  )
}

export default LandingPage
