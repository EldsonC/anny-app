import { HomeStyle } from "../assets/styles/home";
import { HeaderComponent } from "../components/header";

import { StarIcon } from "../assets/icon/star";
import { TimeIcon } from "../assets/icon/time";
import { FlashIcon } from "../assets/icon/flash";
import { DigitalIcon } from "../assets/icon/digital";

import MockupPc from "../assets/img/pc-mockup.png";
import finance from "../assets/img/finance.png";
import Iphone from "../assets/img/phone.png";
import home from "../assets/img/one-mobile.png";

import { CheckIcon } from "../assets/icon/check";
import { LogoFooterIcon } from "../assets/icon/logoFooter";
import { UserIcon } from "../assets/icon/user";
import { NavLink, useNavigate } from "react-router-dom";
import { DocIcon } from "../assets/icon/doc";
import { IvyIcon } from "../assets/icon/logoIvy";
import { Cookies } from "../components/cookies";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { permissionState } from "../redux/features/cookies";

export function Home() {
    const cookiesPermission = useSelector(permissionState);
    const navigateTo = useNavigate()
    const [ cookies, setCookies ] = useState(false);

    const cookiesState = () => {
        if (cookies) {
            return false
        } else if (!cookiesPermission) {
            return <Cookies/>
        }
    }

    useEffect(() => {
        const stateCookies = localStorage.getItem("@cookies")
        if (stateCookies) {
            setCookies(true)
        } else {
            setCookies(cookiesPermission)
        }
    }, [])
    
    return (
        <>
            <HomeStyle>
                {cookiesState()}
                <HeaderComponent/>
                <div className="content_main">
                    <section className="hiro">
                        <div className="tag">
                            <StarIcon/>
                            <p>BEM-VINDO(A)</p>
                        </div>
                        <h1>O tempo molda nossa jornada <span>Gerencie cada momento</span></h1>
                        <p>Seja o arquiteto do seu tempo, construindo uma jornada alinhada aos seus objetivos. Cada instante bem utilizado é um passo em direção ao sucesso.</p>
                        <div className="buttons-hiro">
                            <a href="#plans">
                                <button>
                                    <p>Comece Agora</p>
                                </button>
                            </a>
                            <button className="doc_btn">
                                <DocIcon/>
                                <p>Aprenda a Utilizar</p>
                            </button>
                            <NavLink to={"/dashboard/sign-in"}>
                                <button className="login-hiro">
                                    <p>Sign in</p>
                                </button>
                            </NavLink>
                        </div>
                        <div className="images">
                            <img src={MockupPc} alt="mockup" className="pc-mockup" id="pc" />
                            <img src={home} alt="phone" className="iphone-mockup" />
                        </div>
                    </section>

                    <section className="about" id="about">
                        <h2>Seus horários eficientes com o AnnyApp</h2>
                        <p>Maximize sua eficiência diária com o AnnyApp. Simplifique o gerenciamento do tempo e concentre-se no que realmente importa. Comece agora!</p>

                        <div className="container_about_text cards">
                            <div className="card">
                                <TimeIcon/>
                                <p className="title">Poupe Tempo</p>
                                <p>Economize preciosos minutos do seu dia com nossa solução intuitiva. O AnnyA simplifica tarefas complexas, permitindo que você alcance mais em menos tempo.</p>
                            </div>

                            <div className="card">
                                <FlashIcon/>
                                <p className="title">Agilidade</p>
                                <p>Ganhe agilidade em suas atividades diárias. O AnnyA foi projetado para proporcionar uma experiência rápida e eficiente, garantindo que você possa realizar suas tarefas com facilidade e velocidade.</p>
                            </div>

                            <div className="card">
                                <DigitalIcon/>
                                <p className="title">Estilização</p>
                                <p>Adicione estilo à sua produtividade. O AnnyA não apenas otimiza o seu tempo, mas também oferece uma interface elegante e personalizável, tornando sua experiência de gerenciamento de tempo eficiente e visualmente agradável.</p>
                            </div>
                        </div>

                        <NavLink to={"/dashboard/sign-up"}>
                            <button>
                                <p>Teste por 15 dias gratis</p>
                            </button>
                        </NavLink>
                    </section>

                    <section className="hiro pay-hiro">
                        <h2>Controle financeiro</h2>
                        <p>Tenha o controle de suas entradas na palma de sua mao. Gerencie, receba pagamentos diretamente pelo app, e crie planos de assinatura mensal para seus clientes, alem de gerenciar o pagamento de seus funcionarios.</p>
                        <div className="images">
                            <img src={finance} alt="mockup" className="pc-mockup" id="pc" />
                            <img src={Iphone} alt="phone" className="iphone-mockup" /> 
                        </div>
                    </section>

                    <section className="plans" id="plans">
                        <h2>Planos</h2>
                        <p></p>

                        <div className="card_plan">
                            <div className="card">
                                <div className="text_plan">
                                    <div className="header_plan">
                                        <p>Start</p>
                                    </div>

                                    <p className="description">Experimente por 15 dias antes de se comprometer com um plano pago e descubra como podemos ajudar você.</p>

                                    <p className="price">
                                        <span>$29.99</span>
                                        <span className="size_date">/month</span>
                                    </p>

                                    <div className="container_tips">
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Two Employees</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Notifications</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p> Reports</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Limited Integrations</p>
                                        </div>
                                    </div>
                                </div>

                                <button onClick={() => navigateTo("/dashboard/sign-up")}>
                                    Assinar agora
                                </button>
                            </div>

                            <div className="card hight_card">
                                <div className="text_plan">
                                    <div className="header_plan">
                                        <p>Premium</p>
                                    </div>

                                    <p className="description">Desbloqueie recursos avançados e benefícios exclusivos para aprimorar sua eficiência.</p>

                                    <p className="price">
                                        <span>$45.99</span>
                                        <span className="size_date">/month</span>
                                    </p>

                                    <div className="container_tips">
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Advanced Task Management</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Advanced Integrations</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Detailed Reports</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Task Automation</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Exclusive Training and Resources</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Advanced Customization</p>
                                        </div>
                                    </div>
                                </div>

                                <button className="pro">
                                    Assinar agora
                                </button>
                            </div>
                            <div className="card">
                                <div className="text_plan">
                                    <div className="header_plan">
                                        <p>Interprise</p>
                                    </div>

                                    <p className="description">Experimente o Pro Plus agora e eleve sua experiência para o próximo nível!</p>

                                    <p className="price">
                                        <span>$97.89</span>
                                        <span className="size_date">/year</span>
                                        
                                    </p>

                                    <div className="container_tips">
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>All PRO features</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Uninterrupted access</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>Fixed price guarantee</p>
                                        </div>
                                        <div className="tip">
                                            <CheckIcon/>
                                            <p>30% discount</p>
                                        </div>
                                    </div>
                                </div>

                                <button>
                                    Em breve
                                </button>
                            </div>
                        </div>
                    </section>

                </div>

                <footer>
                    <div className="logos">
                        <LogoFooterIcon/>
                        <IvyIcon/>
                    </div>
                    <h3>Get started to up your business with personal software manager</h3>

                    <div className="input_container">
                        <div className="input">
                            <UserIcon/>
                            <input type="text" placeholder="Enter your email"/>
                        </div>
                        <button>
                            Try Now
                        </button>

                    </div>
                    <ul>
                        <li>Features</li>
                        <li>Terms</li>
                        <li>Privacy</li>
                        <a href="https://ivysoftwares.vercel.app/">
                            <li>IVY Softwares</li>
                        </a>
                    </ul>
                </footer>
            </HomeStyle>
        </>
    );
}