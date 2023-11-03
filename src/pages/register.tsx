import { HeaderComponent } from "../components/header";

import { StarIcon } from "../assets/icon/star";
import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import { AppleIcon } from "../assets/icon/apple";

export function Register() {
    return (
        <LoginStyle>
            <div className="content_main">
                <HeaderComponent/>
                <section className="hiro">
                    <div className="tag">
                        <StarIcon/>
                        <p>SUBSCRIPTION</p>
                    </div>
                    <p>Subscribe to a plan right away and take your business to the next level.</p>
                    <div className="buttons_login">
                        <button>
                            <GoogleIcon/>
                            <p>With Google</p>
                        </button>
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
                        <input type="text" placeholder="CPF/CNPJ"/>
                        <input type="password" placeholder="Password"/>
                        <a href="">I already have an account.</a>
                        <button className="btn_login">
                            <p>Subscribe free</p>
                        </button>
                    </form>
                </section>
            </div>
        </LoginStyle>
    );
}