import { ArrowLeftIcon } from "../../assets/icons/content/arrowleft";
import { BreadCrumbStyle } from "./style";

interface BreadcrumbProps {
    title: string;
}

export function Breadcrumb({title}:BreadcrumbProps) {
    return (
        <BreadCrumbStyle>
            <div className="left_">
                <button>
                    <ArrowLeftIcon/>
                </button>
                <p>{title}</p>
            </div>
        </BreadCrumbStyle>
    );
}