import React from "react";
import Form from 'react-bootstrap/Form'

class Approved extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: true,
          numberOfGuests: 2,
          array_length:10,
          items:{1:10,2:20}
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState({
          [name]: value
        });
    }
    
    render() {
        const items = [1, 2, 3, 4, 5];
        let listItems = items.map((item)=>{
            return <tr>
            <th scope="row">{item}</th>
                    <th scope="col"><input type="checkbox" /></th>
                    <td>Mark Mark Mark Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
        });
        return (
            <div className="row">
                <br />
                <div className="col-md-2"></div>
                <div className="col-md-7">
                    <br />
                    <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col"><input type="checkbox" /></th>
                <th scope="col">ПІБ</th>
                <th scope="col">Факультет/кафедра</th>
                <th scope="col">Дія</th>
                </tr>
            </thead>
            <tbody>
                {listItems}
            </tbody>
            </table>
            <div className="row">
                <div class="col-md-9">
                    <Form.Control as="select" className="col-sm-3" name="tutorial">
                                            <option>Відхилити</option>
                                            <option>Затвердити</option>
                    </Form.Control>
                </div>
                <div class="col-md-3">
                    <button type="submit" className="btn btn-primary btn-block">
                                            Зберегти
                    </button>
                </div>
            </div>
            </div>

                <div className="col-md-3 d-none d-xl-block">
                    <div className="nav-section">
                        <label className="text-muted"></label>
                        <nav id="navSection" className="nav flex-column">
                            <a href="#section1" className="nav-link nav-link-sm active">Обов’язки науково-педагогічного
                                працівника</a>
                            <a href="#section2" className="nav-link nav-link-sm">Здійснювати наукове консультування</a>
                            <a href="#section3" className="nav-link nav-link-sm">Місце проживання/адреса реєстрації</a>

                        </nav>
                    </div>
                </div>
            </div>
        );
    }
}

export default Approved