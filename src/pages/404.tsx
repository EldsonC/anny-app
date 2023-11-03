import { NavLink } from "react-router-dom";
import { NotFoundStyle, HeaderWidth } from "../assets/styles/404";
import { HeaderComponent } from "../components/header";

export function NotFound() {
    return (
        <HeaderWidth>
            <div className="width_container">
                <HeaderComponent/>
            </div>
        
            <NotFoundStyle>

                <h1>404</h1>
                <h2>Page not found</h2>
                <p>Wow, we've reached the end of the road.</p>

                <NavLink to={"/"}>
                    <button>
                        Go to home
                    </button>
                </NavLink>
            </NotFoundStyle>
        </HeaderWidth>
    );
}