import { HeaderComponent } from "../components/header";

import { StarIcon } from "../assets/icon/star";
import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import { AppleIcon } from "../assets/icon/apple";
import GoogleLogin from "react-google-login";

export function Login() {
    const clientId = "20314289349-bh0a7m9t7fca7d5s7b73lkpn5m3tcnu0.apps.googleusercontent.com"
    const responseGoogle = (response: {}) => {
        console.log(response)
    }
    return (
        <LoginStyle>
            <div className="content_main">
                <HeaderComponent/>
                <section className="hiro">
                    <div className="tag">
                        <StarIcon/>
                        <p>LOGIN</p>
                    </div>
                    <p>Welcome back! Log into your account and save time.</p>
                    <div className="buttons_login">
                        <GoogleLogin
                            clientId={clientId}
                            render={renderProps => (
                                <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    <GoogleIcon/>
                                    <p>With Google</p>
                                </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            redirectUri="https://annyapp.com.br"
                            cookiePolicy="single_host_origin"
                        />
                        <button>
                            <AppleIcon/>
                            <p>With Apple</p>
                        </button>
                    </div>

                    <div className="divider">
                        <span></span>
                        <p>Or</p>
                        <span></span>
                    </div>

                    <form>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
                        <a href="">Forget my password</a>
                        <button className="btn_login">
                            <p>Login</p>
                        </button>
                    </form>
                </section>
            </div>
        </LoginStyle>
    );
}