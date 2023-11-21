import { AdsIcon } from "../../assets/icons/headermain/ads";
import { DownIcon } from "../../assets/icons/headermain/down";
import { LayerIcon } from "../../assets/icons/headermain/layer";
import { ProjectIcon } from "../../assets/icons/headermain/project";
import { HeaderMainStyle } from "./style";

export function HeaderMain() {
    return (
        <HeaderMainStyle>
            <div className="header">
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

                <ul>
                    <li>
                        <button>
                            <div className="down">
                                <p>August 22, 2023 - August 30, 2023</p>
                                <DownIcon/>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </HeaderMainStyle>
    );
}