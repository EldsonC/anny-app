import { FileIcon } from "../../assets/icons/float/file";
import { FolderIcon } from "../../assets/icons/float/folder";
import { DownIcon } from "../../assets/icons/headermain/down";
import { MenuProjectStyle } from "./style";
import logo from "../../assets/img/logoIvy.jpg"
import logo2 from "../../assets/img/Eldson.jpeg"
import { useState } from "react";

interface CardState {
    expanded: boolean;
}

export function MenuProject() {
    const [ state, setState ] = useState<CardState>({ expanded: false });

    const toggleExpand = () => {
        setState((prevState) => ({ expanded: !prevState.expanded }))
    }

    return (
        <MenuProjectStyle>
            <div className="projects">
                <div className="container_project">
                    <div className="button-show" onClick={toggleExpand}>
                        <div className="left_icon">
                            <div className="icon">
                                <FolderIcon/>
                            </div>
                            <p>My Projects</p>
                        </div>
                        <DownIcon/> 
                    </div>
                    {state.expanded && (
                        <>
                            <div className="button-show">
                                <div className="left_icon">
                                    <div className="icon color">
                                        <img src={logo} alt="" />
                                    </div>
                                    <p>IVY Softwares</p>
                                </div>
                            </div>

                            <div className="button-show">
                                <div className="left_icon">
                                    <div className="icon color">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <p>Pizzaria</p>
                                </div>
                            </div>
                        </>
                        
                    )}
                </div>
            </div>
            <div className="button-add">
                <div className="left_icon">
                    <div className="icon">
                        <FileIcon/>
                    </div>
                    <p>New Project</p>
                </div>
                <div className="left">
                    <DownIcon/>
                </div>
            </div>
            
        </MenuProjectStyle>
    );
}