import { FileIcon } from "../../assets/icons/float/file";
import { FolderIcon } from "../../assets/icons/float/folder";
import { DownIcon } from "../../assets/icons/headermain/down";
import { MenuTeamstStyle } from "./style";
import logo from "../../assets/img/man.jpg"
import logo2 from "../../assets/img/Eldson.jpeg"
import { useState } from "react";

interface CardState {
    expanded: boolean;
}

export function MenuTeams() {
    const [ state, setState ] = useState<CardState>({ expanded: false });

    const toggleExpand = () => {
        setState((prevState) => ({ expanded: !prevState.expanded }))
    }

    return (
        <MenuTeamstStyle>
            <div className="projects">
                <div className="container_project">
                    <div className="button-show" onClick={toggleExpand}>
                        <div className="left_icon">
                            <div className="icon">
                                <FolderIcon/>
                            </div>
                            <p>Employees</p>
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
                                    <p>Lucas Albert</p>
                                </div>
                            </div>

                            <div className="button-show">
                                <div className="left_icon">
                                    <div className="icon color">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <p>Eldson</p>
                                </div>
                            </div>

                            <div className="button-show">
                                <div className="left_icon">
                                    <div className="icon color">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <p>Aline</p>
                                </div>
                            </div>

                            <div className="button-show">
                                <div className="left_icon">
                                    <div className="icon color">
                                        <img src={logo2} alt="" />
                                    </div>
                                    <p>Marya</p>
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
                    <p>New Employees</p>
                </div>
                <div className="left">
                    <DownIcon/>
                </div>
            </div>
            
        </MenuTeamstStyle>
    );
}