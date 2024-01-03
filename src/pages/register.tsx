import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { EyeIcon } from "../assets/icon/eye";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { zodSchema } from "../services/zod";

import { api } from "../services/api";
import logo from "../assets/img/newLogo.png";

export function Register() {
    const navigation = useNavigate();

    const clientId = "20314289349-bh0a7m9t7fca7d5s7b73lkpn5m3tcnu0.apps.googleusercontent.com"
    const responseGoogle = (response: {}) => {
        console.log(response)
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(zodSchema)
    })

    const ApiSubmit: SubmitHandler<FieldValues> = async (formData) => {

        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }

        localStorage.setItem("@MRY:register", JSON.stringify(data));
        await api.post("/code", {
            email: formData.email
        })
            .then(() => {
                navigation("/sign-up/code");
            }).catch((err) => {
                console.log(err)
            })
    }

    const revealPassword = (e: any) => {
        e.preventDefault()
        const passwordField = document.querySelector("#passwordField") as HTMLInputElement;

        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }

    return (
        <LoginStyle>
            <div className="content_main">
                <div className="left_container">
                    <div className="header_login" onClick={() => navigation("/")}>
                        <img src={logo} width={110} alt="logo anny" />
                    </div>
                    <section className="hiro">
                        <h1>Sign Up</h1>
                        <p>Create  a new account</p>
                        <div className="buttons_login">
                            <GoogleLogin
                                clientId={clientId}
                                render={renderProps => (
                                    <button className="focu-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        <GoogleIcon />
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
                                <label htmlFor="">Company</label>
                                <input
                                    className={errors.name ? "error_field" : "verity"}
                                    type="text"
                                    placeholder="Name your company"
                                    {...register("name")}
                                />
                                {errors.name ? <p className="error_label">{typeof errors.name.message === "string" ? (
                                    <span>{errors.name.message}</span>
                                ) : null}</p> : null}
                            </div>
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
                                    <button onClick={(e) => revealPassword(e)}>
                                        <EyeIcon />
                                    </button>
                                </div>
                                {errors.password ? <p className="error_label">{typeof errors.password.message === "string" ? (
                                    <span>{errors.password.message}</span>
                                ) : null}</p> : null}

                            </div>
                            <button className="btn_login" onClick={() => handleSubmit(ApiSubmit)}>
                                <p>Sign Up</p>
                            </button>

                            <span className="create-acc">Have an account? <a href="/dashboard/sign-in">Sign In Now</a></span>
                        </form>
                    </section>
                </div>

                <div className="container_right">
                    <img src={logo} width={150} alt="" />
                    <h1>Ready to take control of your schedule? Sign up now.</h1>
                </div>
            </div>
        </LoginStyle>
    );
}