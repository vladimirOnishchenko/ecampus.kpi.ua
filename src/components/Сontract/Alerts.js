import React from "react";
import {
    Link,
} from "react-router-dom";

const link = "/contract";

class ContractAlert extends React.Component {
    render() {
        return (
            <div className="alert alert-danger" role="alert">
                <p><b>Дія вашого контракту закінчується 31.12.2019. </b> <br />
                    Для продовження контракту перейдіть <Link to={link}>за посиланням</Link></p>
            </div>
        );
    }
}

export default ContractAlert