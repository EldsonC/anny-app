import { HomeStyle } from "../assets/styles/home";
import { HeaderComponent } from "../components/header";

import { StarIcon } from "../assets/icon/star";
import { TimeIcon } from "../assets/icon/time";
import { FlashIcon } from "../assets/icon/flash";
import { DigitalIcon } from "../assets/icon/digital";

import MockupPc from "../assets/img/pc-mockup.png";
import Iphone from "../assets/img/phone.png"

import { StripeIcon } from "../assets/icon/stripe";
import { CheckIcon } from "../assets/icon/check";
import { LogoFooterIcon } from "../assets/icon/logoFooter";
import { UserIcon } from "../assets/icon/user";
import { NavLink } from "react-router-dom";
import { DocIcon } from "../assets/icon/doc";
import { IvyIcon } from "../assets/icon/logoIvy";
import { Cookies } from "../components/cookies";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { permissionState } from "../redux/features/cookies";

export function Home() {
    const cookiesPermission = useSelector(permissionState)
    const [ cookies, setCookies ] = useState(false)

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
        <HomeStyle>
            {cookiesState()}
            <HeaderComponent/>
            <div className="content_main">
                <section className="hiro">
                    <div className="tag">
                        <StarIcon/>
                        <p>NEXT-TIME TECH</p>
                    </div>
                    <h1>Enhancing daily efficiency with our <span>time management app</span></h1>
                    <p>In today's busy world, effective time management is crucial. AnnyApp simplifies this challenge, helping people boost productivity.</p>
                    <div className="buttons-hiro">
                        <a href="#plans">
                            <button>
                                <p>Start your plan</p>
                            </button>
                        </a>
                        <button className="doc_btn">
                            <DocIcon/>
                            <p>Documentation</p>
                        </button>
                        <NavLink to={"/dashboard/sign-in"}>
                            <button className="login-hiro">
                                <p>Sign in</p>
                            </button>
                        </NavLink>
                    </div>
                    <div className="images">
                        <img src={MockupPc} alt="mockup" className="pc-mockup" id="pc" />
                        <img src={Iphone} alt="phone" className="iphone-mockup" />
                    </div>
                </section>

                <section className="about" id="about">
                    <h2>Your most experienced time task with AnnyApp.</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                    <div className="container_about_text cards">
                        <div className="card">
                            <TimeIcon/>
                            <p className="title">Save Time</p>
                            <p>AnnyApp helps users streamline daily routines, focus on important tasks, and reduce time waste, ultimately aiming to help people 'Save Time' and boost productivity in their lives.</p>
                        </div>

                        <div className="card">
                            <FlashIcon/>
                            <p className="title">Save Time</p>
                            <p>AnnyApp helps users streamline daily routines, focus on important tasks, and reduce time waste, ultimately aiming to help people 'Save Time' and boost productivity in their lives.</p>
                        </div>

                        <div className="card">
                            <DigitalIcon/>
                            <p className="title">Save Time</p>
                            <p>AnnyApp helps users streamline daily routines, focus on important tasks, and reduce time waste, ultimately aiming to help people 'Save Time' and boost productivity in their lives.</p>
                        </div>
                    </div>

                    <NavLink to={"/register"}>
                        <button>
                            <p>Try for free</p>
                        </button>
                    </NavLink>
                </section>

                <section className="faqs" id="faqs">
                    <h2>FAQs</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="cards_faqs">
                        <div className="card_faqs">
                            <p>Lorem Ipsum is simply dummy text of the?</p>
                        </div>

                        <div className="card_faqs">
                            <p>Lorem Ipsum is simply dummy text?</p>
                        </div>

                        <div className="card_faqs">
                            <p>Lorem Ipsum is simply dummy text of the?</p>
                        </div>

                        <div className="card_faqs">
                            <p>Lorem Ipsum is simply?</p>
                        </div>

                        <div className="card_faqs">
                            <p>Lorem Ipsum is simply?</p>
                        </div>
                    </div>
                </section>

                <section className="faqs">
                    <div className="card_platform">
                        <h2>One AI platform - over 30 industries leading lenders</h2>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                        <div className="platforms">
                            <StripeIcon/>
                            <StripeIcon/>
                            <StripeIcon/>
                            <StripeIcon/>
                        </div>
                    </div>
                </section>

                <section className="plans" id="plans">
                    <h2>Princing & plans</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

                    <div className="card_plan">
                        <div className="card">
                            <div className="text_plan">
                                <div className="header_plan">
                                    <p>Free</p>
                                </div>

                                <p className="description">Try before committing to a paid plan and discover how we can help you achieve your goals.</p>

                                <p className="price">
                                    <span>$0</span>
                                    <span className="size_date">/month</span>
                                </p>

                                <div className="container_tips">
                                    <div className="tip">
                                        <CheckIcon/>
                                        <p>Calendar</p>
                                    </div>
                                    <div className="tip">
                                        <CheckIcon/>
                                        <p>Notifications</p>
                                    </div>
                                    <div className="tip">
                                        <CheckIcon/>
                                        <p>Basic Reports</p>
                                    </div>
                                    <div className="tip">
                                        <CheckIcon/>
                                        <p>Limited Integrations</p>
                                    </div>
                                </div>
                            </div>

                            <button>
                                Get started
                            </button>
                        </div>

                        <div className="card hight_card">
                            <div className="text_plan">
                                <div className="header_plan">
                                    <p>Pro</p>
                                </div>

                                <p className="description">Boost your productivity with our Pro plan. Unlock advanced features and exclusive benefits to enhance your efficiency. Elevate your experience today!</p>

                                <p className="price">
                                    <span>$29</span>
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
                                Get started
                            </button>
                        </div>
                        <div className="card">
                            <div className="text_plan">
                                <div className="header_plan">
                                    <p>Plus</p>
                                </div>

                                <p className="description">Enjoy advanced features and exclusive benefits for maximum productivity. Boost your efficiency and achieve your goals. Try Pro Plus now and elevate your experience to the next level!</p>

                                <p className="price">
                                    <span>$243</span>
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
                                Get started
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
    );
}