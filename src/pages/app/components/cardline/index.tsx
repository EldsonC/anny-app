import { CardLineStyle } from "./style";

export function CardLine() {
    return (
        <CardLineStyle>
            <div className="number">
                <p>01</p>
            </div>

            <div className="container-ca">

                <div className="container-top">
                    <div className="name">
                        <h4>David To IVY Softwares</h4>
                    </div>
                    <div className="date">
                        <p>Aug 22, 2023</p>
                    </div>
                    <div className="services">
                        <p>2 services</p>
                    </div>
                    <div className="code">
                        <p>0.923423</p>
                    </div>
                    <div className="status">
                        <p>Pending</p>
                    </div>
                </div>
                <div className="content_bottom">
                    <p>+ $200</p>
                </div>
            </div>
            
           
        </CardLineStyle>
    );
}