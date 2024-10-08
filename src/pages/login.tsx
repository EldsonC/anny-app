import { LoginStyle } from "../assets/styles/login";
import { GoogleIcon } from "../assets/icon/google";
import { AppleIcon } from "../assets/icon/apple";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSignIn } from "../services/zod";
import { useAuth } from "../context/context";
import { useEffect, useState } from "react";

import logo from "../assets/img/newLogo.png";
import { EyeIcon } from "../assets/icon/eye";
import { Notify } from "./app/components/notify";

export function Login() {
    const navigation = useNavigate()
    const { signIn, userLogged } = useAuth()
    const [notify, setNotify] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState("");

    const clientId = "20314289349-bh0a7m9t7fca7d5s7b73lkpn5m3tcnu0.apps.googleusercontent.com"
    const responseGoogle = (response: {}) => {
        console.log(response)
    }

    useEffect(() => {
        if (userLogged()) {
            navigation("/dashboard/schedule")
        }
    }, [])

    const toDashboard = () => {
        navigation("/dashboard/schedule")
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(zodSignIn)
    })

    const ApiSubmit: SubmitHandler<FieldValues> = async (data) => {
        await signIn({
            email: data.email,
            password: data.password
        })
            .then(() => {
               toDashboard();
                setNotify(true)
                setNotifyMessage("Seja bem vindo(a)!")
            })
            .catch((err) => {
                setNotify(true)
                setNotifyMessage(`${err.response.data.error}`)
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
            <div className="notification">
                {notify ? <Notify message={notifyMessage} /> : null}
            </div>
            <div className="content_main">
                <div className="left_container">
                    <div className="header_login" onClick={() => navigation("/")}>
                        <img src={logo} width={110} alt="logo anny" />
                    </div>
                    <section className="hiro">
                        <h1>Sign In</h1>
                        <p>Sign in to your account</p>
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
                            <button>
                                <AppleIcon />
                                <p>Continue with Apple</p>
                            </button>
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
                                    type="email"
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
                            <button className="btn_login">
                                <p>Sign In</p>
                            </button>

                            <span className="create-acc">Don't have an account? <a href="/dashboard/sign-up">Sign Up Now</a></span>
                        </form>
                    </section>
                </div>

                <div className="container_right">
                    <img src={logo} width={150} alt="" />
                    <h1>Effortless and precise scheduling in just one click.</h1>
                </div>
            </div>
        </LoginStyle>
    );
}