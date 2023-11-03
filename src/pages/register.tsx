import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import { LogoIcon } from "../assets/icon/logo";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";

export function Register() {
    const navigation = useNavigate()

    const clientId = "20314289349-bh0a7m9t7fca7d5s7b73lkpn5m3tcnu0.apps.googleusercontent.com"
    const responseGoogle = (response: {}) => {
        console.log(response)
    }
    return (
        <LoginStyle>
            <div className="top-note">
                <p>We are constantly improving our systems for your better experience.</p>
            </div>
            <div className="content_main">
                <div className="left_container">
                    <div className="header_login" onClick={() => navigation("/")}>
                        <LogoIcon/>
                    </div>
                    <section className="hiro">
                        <h1>Get started</h1>
                        <p>Create  a new account</p>
                        <div className="buttons_login">
                            <GoogleLogin
                                clientId={clientId}
                                render={renderProps => (
                                    <button className="focu-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <GoogleIcon/>
                                        <p>Continue with Google</p>
                                    </button>
                                )}
                                buttonText="Login"
                                onSuccess={responseGoogle}
                                onFailure={responseGoogle}
                                redirectUri="https://annyapp.com.br"
                                cookiePolicy="single_host_origin"
                            />
                        </div>

                        <div className="divider">
                            <span></span>
                            <p>or</p>
                            <span></span>
                        </div>

                        <form>
                            <div className="input_container">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="you@example.com"/>
                            </div>
                            <div className="input_container">
                                <div className="label_container">
                                    <label htmlFor="">Password</label>
                                </div>
                                <input type="password" placeholder="********"/>
                            </div>
                            <button className="btn_login">
                                <p>Sign In</p>
                            </button>

                            <span className="create-acc">Have an account? <a href="/register">Sign In Now</a></span>
                        </form>
                    </section>
                </div>
            </div>
        </LoginStyle>
    );
}