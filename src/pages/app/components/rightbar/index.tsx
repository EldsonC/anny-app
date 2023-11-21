import { CloseIcon } from "../../assets/icons/rightbar/close";
import { DownIcon } from "../../assets/icons/rightbar/down";
import { MenuIcon } from "../../assets/icons/rightbar/menu";
import { RightBarStyle } from "./style";

export function RightBar() {
    return (
        <RightBarStyle>
            <header>
                <div className="top_right">
                    <div className="userdata">
                        <div className="profile_picture">
                            
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
                        <button>
                            <CloseIcon/>
                        </button>
                    </div>
                </div>
                <ul>
                    <li>Settings</li>
                    <li>Resources</li>
                    <li>Notifications</li>
                </ul>
            </header>
        </RightBarStyle>   
    );
}