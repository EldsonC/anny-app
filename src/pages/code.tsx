import { LoginStyle } from "../assets/styles/login";
import { LogoIcon } from "../assets/icon/logo";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { zodCode } from "../services/zod";
import { LogoFooterIcon } from "../assets/icon/logoFooter";
import { useAuth } from "../context/context";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading";

interface Data {
    name: string;
    email: string;
    password: string;
}

export function Code() {
    const navigation = useNavigate();
    const { userRegister } = useAuth();
    const [ dataRegister, setDataRegister ] = useState<Data>();

    const [loadind, setLoading] = useState(false);

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

    const ApiSubmit: SubmitHandler<FieldValues> = async () => {
        setLoading(true)
        userRegister({
            name: dataRegister?.name,
            email: dataRegister?.email,
            password: dataRegister?.password
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                setLoading(false)
            })
    }

    return (
        <LoginStyle>
            {loadind ? <Loading /> : null}
            <div className="content_main">
                <div className="left_container">
                    <div className="header_login" onClick={() => navigation("/")}>
                        <LogoIcon />
                    </div>
                    <section className="hiro">
                        <h1>Code</h1>
                        <p>Enviamos um codigo para seu email</p>

                        <form onSubmit={handleSubmit(ApiSubmit)}>
                            <div className="code-form">
                                <div className="input_container code">
                                    <input
                                        className={errors.code ? "error_field" : "verity"}
                                        type="text"
                                        {...register("name")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.code ? "error_field" : "verity"}
                                        type="text"
                                        {...register("name")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.code ? "error_field" : "verity"}
                                        type="text"
                                        {...register("name")}
                                    />
                                </div>

                                <div className="input_container code">
                                    <input
                                        className={errors.code ? "error_field" : "verity"}
                                        type="text"
                                        {...register("name")}
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