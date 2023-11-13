import { AddIcon } from "../../assets/icons/rightbar/add";
import { CloseIcon } from "../../assets/icons/rightbar/close";
import { MenuIcon } from "../../assets/icons/rightbar/menu";
import { NoteIcon } from "../../assets/icons/rightbar/note";
import { RightBarStyle } from "./style";

export function RightBar() {
    return (
        <RightBarStyle>
            <div className="top">
                <header>
                    <button>
                        <CloseIcon/>
                    </button>
                    <span>ID #838035</span>
                </header>

                <section className="hiro_one">
                    <h3>Updates</h3>
                </section>

                <section className="notify">
                    <header className="header_note">
                        <h3>PUBLIC RELEASE</h3> 
                        <button>
                            <MenuIcon/>
                        </button>
                    </header>
                    <div className="card_notify">
                        <div className="logo">
                            <NoteIcon/>
                        </div>
                        <div className="noti">
                            <p className="type">Starts on Apr 4 at 10:00am</p>
                            <h4>Public Scale</h4>
                            <p>Created feature cards.</p>
                        </div>
                    </div>

                    <div className="card_notify">
                        <div className="logo">
                            <NoteIcon/>
                        </div>
                        <div className="noti">
                            <p className="type">Starts on Apr 4 at 10:00am</p>
                            <h4>Public Scale</h4>
                            <p>Created feature cards.</p>
                        </div>
                    </div>
                </section>

                <section className="notify">
                    <header className="header_note">
                        <h3>FAST KEY</h3> 
                        <button>
                            <MenuIcon/>
                        </button>
                    </header>
                </section>
            </div>

            <div className="bottom">
                <button>
                    <AddIcon/>
                    <p>New schedule</p>
                </button>
            </div>
        </RightBarStyle>
    );
}