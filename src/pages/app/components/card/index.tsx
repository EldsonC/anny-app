import { DownIcon } from "../../assets/icons/headermain/down";
import { CardStyle } from "./style";

export function Card() {
    return (
        <CardStyle>
            <div className="date">
                <p>Wed</p>
                <h2>28</h2>
            </div>
            <div className="data">
                <p>09:00 - 09:30</p>
                <h4>Anna Paula</h4>
            </div>
            <div className="employee">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <button>
                <p>Edit</p>
                <DownIcon/>
            </button>
        </CardStyle>
    );
}