import { CloseIcon } from "../../assets/icons/rightbar/close";
import { DownIcon } from "../../assets/icons/rightbar/down";
import { EmployeeIcon } from "../../assets/icons/rightbar/employee";
import { MenuIcon } from "../../assets/icons/rightbar/menu";
import { ServiceIcon } from "../../assets/icons/rightbar/service";
import { Switch } from "../swich";
import { Void } from "../void";
import { RightBarStyle, ModalBarStyle } from "./style";
import logo from "../../assets/img/logoIvy.jpg";
import { useDispatch, useSelector } from "react-redux";
import { hide, stateRightbar } from "../../../../redux/features/rightbar";
import { show } from "../../../../redux/features/addEmployee";

export function RightBar() {
    const dispacth = useDispatch();
    const stateRightBar = useSelector(stateRightbar)

    const showContent = (contentId:string): void => {
        const contents: NodeListOf<HTMLDivElement> = document.querySelectorAll('.content_setting, .content_resources, .content_notifications, .content_app');
        contents.forEach((content: HTMLDivElement) => {
            content.style.display = 'none';
        });

        // Remover a classe 'selected' de todas as <li>
        const menuItems: NodeListOf<HTMLLIElement> = document.querySelectorAll('li');
        menuItems.forEach((menuItem: HTMLLIElement) => {
            menuItem.classList.remove('selected');
        });

        // Mostrar o conteúdo correspondente ao item clicado
        const selectedContent: HTMLDivElement | null = document.querySelector('.' + contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        }

        // Adicionar a classe 'selected' à <li> clicada
        const selectedMenuItem: HTMLLIElement | null = document.querySelector(`.${contentId}-btn`);
        if (selectedMenuItem) {
            selectedMenuItem.classList.add('selected');
        }
    }

    const hideBar = () => {
        dispacth(hide())
    }

    const showAddEmployee = () => {
        dispacth(show())
    }
    return (
        <>
            {
                stateRightBar && (
                    <>
                        <ModalBarStyle onClick={hideBar}>

                        </ModalBarStyle>
                        <RightBarStyle>
                            <header>
                                <div className="top_right">
                                    <div className="userdata">
                                        <div className="profile_picture">
                                            <img src={logo} alt="picture" />
                                        </div>
                                        <div className="text_data_user">
                                            <h4>IVY Softwares</h4>
                                            <p>Active meta</p>
                                        </div>
                                    </div>
                                    <div className="actions_header">
                                        <button>
                                            <DownIcon/>
                                        </button>
                                        <button>
                                            <MenuIcon/>
                                        </button>
                                        <button title="Close" onClick={hideBar}>
                                            <CloseIcon/>
                                        </button>
                                    </div>
                                </div>
                                <ul id="menu">
                                    <li onClick={() => showContent("content_setting")} className="content_setting-btn selected">Employee</li>
                                    <li onClick={() => showContent("content_resources")} className="content_resources-btn">Services</li>
                                    <li onClick={() => showContent("content_app")} className="content_app-btn">Settings</li>
                                    <li onClick={() => showContent("content_notifications")} className="content_notifications-btn">Notifications</li>
                                </ul>
                            </header>
                            <div className="content_setting content-body">
                                <div className="header">
                                    <h4>Employee</h4>
                                    <Void
                                        icon={<EmployeeIcon/>}
                                        title="Without Employee"
                                        description="create a new employee to your project"

                                        titleButtonOne="Create employee"
                                        titleButtonTwo="Add"
                                        actionButton={() => {
                                            showAddEmployee()
                                            hideBar()
                                        }}
                                        
                                    />
                                </div>
                            </div>
                            <div className="content_resources content-body">
                                <div className="header">
                                    <h4>Services</h4>
                                    <Void
                                        icon={<ServiceIcon/>}
                                        title="Without Services"
                                        description="create a new service to your project"

                                        titleButtonOne="Create service"
                                        titleButtonTwo=""
                                    />
                                </div>
                            </div>
                            <div className="content_app content-body">
                                <div className="header">
                                    <h4>Settings</h4>
                                </div>
                                
                                <div className="switch_container">
                                    <div className="left_switch">
                                        <h4>Horario de abertura</h4>
                                        <p>You will be notified in your smartphone</p>
                                    </div>
                                    <div className="right_switch">
                                        
                                    </div>
                                </div>

                            </div>
                            <div className="content_notifications content-body">
                                <div className="header">
                                    <h4>Notifications</h4>
                                </div>
                                <div className="switch_container">
                                    <div className="left_switch">
                                        <h4>Issue notification</h4>
                                        <p>You will be notified by email</p>
                                    </div>
                                    <div className="right_switch">
                                        <Switch/>
                                    </div>
                                </div>
                                <div className="switch_container">
                                    <div className="left_switch">
                                        <h4>Daily</h4>
                                        <p>Notifications of the day</p>
                                    </div>
                                </div>
                                <div className="container_card">
                                    <div className="card_notified">
                                        
                                    </div>
                                    <div className="card_notified">
                                        
                                    </div>
                                    <div className="card_notified">
                                        
                                    </div>
                                </div>
                                <div className="switch_container">
                                    <div className="left_switch">
                                        <h4>Notification mobile</h4>
                                        <p>You will be notified in your smartphone</p>
                                    </div>
                                    <div className="right_switch">
                                        <Switch/>
                                    </div>
                                </div>
                            </div>
                        </RightBarStyle>   
                    </>
                )
            }
        </>
    );
}