import { MenuIcon } from "../../assets/icons/card/menu";
import { CardStyle } from "./style";

export function Card() {
    return (
        <CardStyle>
            <div className="top">
                <header>
                    <div className="left">
                        <div className="number">
                            <p>01</p>
                        </div>
                        <div className="data-client">
                            <h4>Eldson Caldas</h4>
                            <p>Client</p>
                        </div>
                    </div>
                    <MenuIcon/>
                </header>
            </div>

            <button>
                Done
            </button>
        </CardStyle>
    );
}