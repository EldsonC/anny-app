import { Button } from "../../../../components/buttons";
import { StyleEmployeeModal } from "./style";

import logo from "../../../../assets/img/newLogo.png";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zodSchema } from "../../../../services/zod";
import { api } from "../../../../services/api";
import GoogleLogin from "react-google-login";
import { GoogleIcon } from "../../../../assets/icon/google";
import { EyeIcon } from "../../../../assets/icon/eye";
import { HelpIcon } from "../../assets/icons/sidebar/help";
import { useDispatch } from "react-redux";
import { hide } from "../../../../redux/features/addEmployee";

export function EmployeeModalAdd() {
    const navigation = useNavigate();
    const dispatch = useDispatch();

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

    const closeModal = () => {
        dispatch(hide())
    }
    return (
        <StyleEmployeeModal>
            <div className="container_form">
                <header>
                    <img src={logo} width={110} alt="logo anny" />
                    <div className="buttons">
                        <Button
                            type="void-button-icon"
                            icon={<HelpIcon color={"#999999"} size={20}/>}
                        />
                        <Button
                            type="void-button"
                            title="Cancel"
                            clickAction={closeModal}
                        />
                    </div>
                </header>
                <div className="content_main">
                    <div className="left_container">
                        <section className="hiro">
                            <h1>Employees</h1>
                            <p>Create a new employee to your project</p>
                            <div className="buttons_login">
                                <GoogleLogin
                                    clientId={clientId}
                                    render={renderProps => (
                                        <button className="focu-login" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                            <GoogleIcon />
                                            <p>Create with Google</p>
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
                                    <label htmlFor="">Employee</label>
                                    <input
                                        className={errors.name ? "error_field" : "verity"}
                                        type="text"
                                        placeholder="Employee name"
                                        {...register("name")}
                                    />
                                </div>
                                <div className="input_container">
                                    <label htmlFor="">Email</label>
                                    <input
                                        className={errors.email ? "error_field" : "verity"}
                                        type="text"
                                        placeholder="you@example.com"
                                        {...register("email")}
                                    />
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
                                </div>
                                <button className="btn_login" onClick={() => handleSubmit(ApiSubmit)}>
                                    <p>Create Employee</p>
                                </button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </StyleEmployeeModal>
    );
}