import { NotifyStyle } from "./style";
import { CloseIcon } from "../../assets/icons/rightbar/close";
import { LogoIcon } from "../../assets/icons/sidebar/logo";

interface NotifyProps {
    message?: string;
    className?: string; 
    onAnimationEnd?: () => void;
}

export function Notify({message, className, onAnimationEnd}:NotifyProps) {
    const handleAnimationEnd = () => {
        onAnimationEnd && onAnimationEnd();
    }
    return (
        <NotifyStyle className={className} onAnimationEnd={handleAnimationEnd}>
            <div className="notify_container">
                <div className="square">
                    <LogoIcon size={30}/>
                </div> 
                <div className="data_notify">
                    <h4>Notification</h4>
                    <p>{message}</p>
                </div>
            </div>
            <div className="close">
                <button title="close">
                    <CloseIcon/>
                </button>
            </div>
        </NotifyStyle>
    );
}