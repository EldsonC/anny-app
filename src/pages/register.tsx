import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import { LogoIcon } from "../assets/icon/logo";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../assets/icon/eye";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { zodSchema } from "../services/zod";
import { LogoFooterIcon } from "../assets/icon/logoFooter";

export function Register() {
    const navigation = useNavigate()

    const clientId = "20314289349-bh0a7m9t7fca7d5s7b73lkpn5m3tcnu0.apps.googleusercontent.com"
    const responseGoogle = (response: {}) => {
        console.log(response)
    }

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: zodResolver(zodSchema)
    })

    const ApiSubmit = () => {

    }

    const revealPassword = () => {
        const passwordField = document.querySelector("#passwordField") as HTMLInputElement;

        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }

    return (
        <LoginStyle>
            {/* <div className="top-note">
                <p>We are constantly improving our systems for your better experience.</p>
            </div> */}
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

                        <form onSubmit={handleSubmit(ApiSubmit)}>
                            <div className="input_container">
                                <label htmlFor="">Email</label>
                                <input 
                                    className={errors.email ? "error_field" : "verity"}
                                    type="text" 
                                    placeholder="you@example.com"
                                    {...register("email")}
                                />
                                {errors.email ? <p className="error_label">{typeof errors.email.message === "string" ? (
                                    <span>{errors.email.message}</span>
                                ) : null}</p> : null}
                            </div>
                            <div className="input_container">
                                <div className="label_container">
                                    <label htmlFor="">Password</label>
                                </div>
                                <div className={errors.password ? "error_field input-eye" : "input-eye"}>
                                    <input 
                                        id="passwordField"
                                        type="password" 
                                        placeholder="********"
                                    {...register("password")}
                                    />
                                    <button onClick={revealPassword}>
                                        <EyeIcon/>
                                    </button>
                                </div>
                                {errors.password ? <p className="error_label">{typeof errors.password.message === "string" ? (
                                    <span>{errors.password.message}</span>
                                ) : null}</p> : null}

                            </div>
                            <button className="btn_login">
                                <p>Sign Up</p>
                            </button>

                            <span className="create-acc">Have an account? <a href="/dashboard/sign-in">Sign In Now</a></span>
                        </form>
                    </section>
                </div>

                <div className="container_right">
                    <LogoFooterIcon/>
                    <h1>Ready to take control of your schedule? Sign up now.</h1>
                </div>
            </div>
        </LoginStyle>
    );
}