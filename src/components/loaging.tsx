import { LoadingStyle } from "../assets/styles/style_components/loading";

import load from "../assets/img/load.gif"

export function Loading() {
    return (
        <LoadingStyle>
            <img src={load} alt="load" />
        </LoadingStyle>
    );
}