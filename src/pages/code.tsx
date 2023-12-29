import { LoginStyle } from "../assets/styles/login";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { LogoFooterIcon } from "../assets/icon/logoFooter";
import { useAuth } from "../context/context";
import { useEffect, useRef, useState } from "react";
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

    const [code, setCode] = useState<string>("");

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const handleInputChange = (index: number, value: string) => {
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current?.focus();
        }

        // Update the code in the state
        const updatedCode = `${code}${value}`;
        setCode(updatedCode);
    };

    const {
        
        handleSubmit,
        
    } = useForm()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("@MRY:register") || "{}")
        data ? setDataRegister(data) : null
    }, [])

    const ApiSubmit: SubmitHandler<FieldValues> = async () => {
        userRegister({
            name: dataRegister?.name,
            email: dataRegister?.email,
            password: dataRegister?.password,
            code: parseInt(code)
        })
            .then(() => {
                setNotify(true);
                setNotifyMessage("Conta criada com sucesso! Você será redirecionado para fazer o login.");

                setTimeout(() => {
                    navigation("/dashboard/sign-in");
                }, 5000);
            })
            .catch((err) => {
                setNotify(true);
                setNotifyMessage(`${err.response.data.error}`);
            });
    };

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
                                {[0, 1, 2, 3].map((index) => (
                                    <div className="input_container code" key={index}>
                                        <input
                                            
                                            type="text"
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            ref={inputRefs[index]}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button type="submit" className="btn_login">
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