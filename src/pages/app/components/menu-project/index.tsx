import { FileIcon } from "../../assets/icons/float/file";
import { FolderIcon } from "../../assets/icons/float/folder";
import { DownIcon } from "../../assets/icons/headermain/down";
import { MenuProjectStyle } from "./style";


export function MenuProject() {
    
    return (
        <MenuProjectStyle>
            <div className="projects">
                <div className="container_project">
                    <div className="button-show">
                        <div className="left_icon">
                            <div className="icon">
                                <FolderIcon/>
                            </div>
                            <p>My Projects</p>
                        </div>
                        <DownIcon/> 
                    </div>
                    <div className="button-show">
                        <div className="left_icon">
                            <div className="icon color">
                                <img src="https://avatars.githubusercontent.com/u/111740948?s=200&v=4" alt="" />
                            </div>
                            <p>IVY Softwares</p>
                        </div>
                    </div>
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