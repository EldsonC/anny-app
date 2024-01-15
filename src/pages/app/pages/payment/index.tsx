import { SideBar } from "../../components/sidebar";
import { MainStyle } from "../../assets/style/gobal";

import { Content } from "./style";
import { HeaderMain } from "../../components/headerMain";
import { RightBar } from "../../components/rightbar";
import { LogoIcon } from "../../assets/icons/sidebar/logo";

export function Payment() {
    return (
        <>
            <MainStyle>
                <div className="markStyle">
                    <div className="left">
                        <LogoIcon
                            size={30}
                        />
                        <p>AnnyApp <span>Start</span></p>
                    </div>

                    <div className="right">
                        <button title="Minimize" className="minimize"></button>
                        <button title="Maximize" className="maximize"></button>
                        <button title="Close" className="mlose"></button>
                    </div>
                </div>
                <div className="container_main">
                    <SideBar />
                    <div className="content_main">
                        <HeaderMain />
                        <div className="content_display">
                            <Content>
                                <table className="book-table">
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td className="image_cell">
                                                <p className="registro">
                                                    #oeoe
                                                </p>
                                            </td>
                                            <td className="image_cell">
                                                <p className="registro">
                                                    John Doe
                                                </p>
                                            </td>
                                            <td className="image_cell">
                                                <p className="registro">
                                                    In progress
                                                </p>
                                            </td>
                                            <td className="image_cell">
                                                <p className="registro">
                                                    delete
                                                </p>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </Content>
                        </div>
                    </div>
                    <RightBar />
                </div>
                <footer></footer>
            </MainStyle>
        </>
    );
}