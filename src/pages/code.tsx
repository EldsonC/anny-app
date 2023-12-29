import { LoginStyle } from "../assets/styles/login";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodCode } from "../services/zod";
import { LogoFooterIcon } from "../assets/icon/logoFooter";
import { useAuth } from "../context/context";
import { useEffect, useState } from "react";
import { Notify } from "./app/components/notify";
import logo from "../assets/img/newLogo.png"

interface Data {
    name: string;
    email: string;
    password: string;
}

export function Code() {
    const navigation = useNavigate();
    const { userRegister } = useAuth();
    const [dataRegister, setDataRegister] = useState<Data>();
    const [notify, setNotify] = useState(false);
    const [notifyMessage, setNotifyMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(zodCode)
    })

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("@MRY:register") || "{}")
        data ? setDataRegister(data) : null
    }, [])

    const ApiSubmit: SubmitHandler<FieldValues> = async (data) => {
        const codeDone = `${data.number1}${data.number2}${data.number3}${data.number4}`
        userRegister({
            name: dataRegister?.name,
            email: dataRegister?.email,
            password: dataRegister?.password,
            code: parseInt(codeDone)
        })
            .then(() => {
                setNotify(true)
                setNotifyMessage("Conta criada com sucesso! Voce sera redirecionado para fazer o login.")

                setTimeout(() => {
                    navigation("/dashboard/sign-in");
                }, 5000)
            })
            .catch((err) => {
                setNotify(true);
                setNotifyMessage(`${err.response.data.error}`);
            })
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
                        <h1>Code</h1>
                        <p>Enviamos um codigo para seu email</p>

                        <form onSubmit={handleSubmit(ApiSubmit)}>
                            <div className="code-form">
                                <div className="input_container code">
                                    <input
                                        className={errors.number1 ? "error_field" : "verity"}
                                        type="text"
                                        {...register("number1")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.number2 ? "error_field" : "verity"}
                                        type="text"
                                        {...register("number2")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.number3 ? "error_field" : "verity"}
                                        type="text"
                                        {...register("number3")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.number4 ? "error_field" : "verity"}
                                        type="text"
                                        {...register("number4")}
                                    />
                                </div>
                            </div>

                            <button className="btn_login">
                                <p>Create account</p>
                            </button>

                            <span className="create-acc">Have an account? <a href="/dashboard/sign-in">Sign In Now</a></span>
                        </form>
                    </section>
                </div>

                <div className="container_right">
                    <LogoFooterIcon />
                    <h1>Ready to take control of your schedule? Sign up now.</h1>
                </div>
            </div>
        </LoginStyle>
    );
}