import { CommandIcon } from "../../assets/icons/float/command";
import { MenuIcon } from "../../assets/icons/float/menu";
import { SearchIcon } from "../../assets/icons/float/search";
import { GetPro } from "../getpro";
import { MenuFloatStyle } from "./style";
import { useEffect, useState } from "react";

interface UserData {
    email: string,
    name: string;
    profile_picture: string;
}
export function MenuFloat() {
    const [ userData, setUserData ] = useState<UserData | null>();
    

    useEffect(() => {
        const data  = JSON.parse(localStorage.getItem("@USER:token") || "[]");
        console.log(data)
        data ? setUserData(data) : null
    },[])

    return (
        <MenuFloatStyle >
            <header>
                <div className="left_float">
                    <div className="img_float">
                        <img src={userData ? userData.profile_picture : ""} alt="" />
                    </div>
                    <div className="left_data">
                        <h3>{userData ? userData.name : "Undefiened"}</h3>
                        <p>{userData ? userData.email : "Undefiened"}</p>
                    </div>
                </div>
                <div className="right">
                    <MenuIcon/>
                </div>
            </header>
            <div className="search_container">
                <div className="search">
                    <div className="input">
                        <SearchIcon/>
                        <input type="text" placeholder="Search..."/>
                    </div>
                    <div className="tip_search">
                        <CommandIcon/>
                        <p>F</p>
                    </div>
                </div>
            </div>
            <div className="pro">
                <GetPro/>
            </div>
        </MenuFloatStyle>
    );
}