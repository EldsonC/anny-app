import { AdsIcon } from "../../assets/icons/headermain/ads";
import { LayerIcon } from "../../assets/icons/headermain/layer";
import { ProjectIcon } from "../../assets/icons/headermain/project";
import { HeaderMainStyle } from "./style";

export function HeaderMain() {
    return (
        <HeaderMainStyle>
            <div>
                <ul>
                    <li>
                        <button>
                            <LayerIcon/>
                            <p>Method</p>
                        </button>
                    </li>
                    <li>
                        <button>
                            <ProjectIcon/>
                            <p>Project</p>
                        </button>
                    </li>
                    <li>
                        <button>
                            <AdsIcon/>
                            <p>AnnyAds</p>
                        </button>
                    </li>
                </ul>
            </div>

            <div className="right_content">
                <div className="text_profile">
                    <h4>IVY Softwares</h4>
                    <p>Company</p>
                </div>
                <div className="profile_picture">
                    <img src="https://media.licdn.com/dms/image/D4D0BAQFUxzazv6Q5dQ/company-logo_100_100/0/1697538564307/ivy_softwares_logo?e=1707955200&v=beta&t=49mGpGkPoxTnOx6ixYPJoc0gA4fyeXsEdyP9JprMYOA" alt="profile picture" />
                </div>
            </div>
        </HeaderMainStyle>
    );
}