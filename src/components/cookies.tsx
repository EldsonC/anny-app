import { CookieIcon } from "../assets/icon/cookie";
import { Button } from "./buttons";
import { CookieStyle } from "../assets/styles/style_components/cookie";
import { useDispatch } from "react-redux";
import { setPermissions } from "../redux/features/cookies";

export function Cookies() {
    const dispatch = useDispatch()

    const cookiePermission = () => {
        localStorage.setItem("@cookies", JSON.stringify(true))
        dispatch(setPermissions())
    }

    return (
        <CookieStyle>
            <div className="container_cookie">
                <div className="first_content">
                    <CookieIcon/>
                    <p className="headline">We use cookies to enhance your browsing expirience. By clicking ‘Accept all cookies,’ you agree to the use of cookies</p>
                </div>
                <div className="second_content">
                    <Button title="Accept all cookies" clickAction={cookiePermission}/>
                    <Button title="Reject all cookies" type="void-button"/>
                </div>
            </div>
        </CookieStyle>
    );
}