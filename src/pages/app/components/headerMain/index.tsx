import { AdsIcon } from "../../assets/icons/headermain/ads";
import { DownIcon } from "../../assets/icons/headermain/down";
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
                            <div className="down">
                                <p>My Teams</p>
                                <DownIcon/>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button>
                            <ProjectIcon/>
                            <div className="down">
                                <p>Project</p>
                                <DownIcon/>
                            </div>
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
        </HeaderMainStyle>
    );
}