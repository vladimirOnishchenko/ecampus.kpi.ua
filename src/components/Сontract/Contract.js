import React from "react";

class Contract extends React.Component {
    render() {
        return (
            <div className="row">
                <br />
                <div className="col">
                    <br />
                    <section id="section1">
                        <h5>Обов’язки науково-педагогічного працівника
                            <a href="#" data-toggle="modal" data-target="#basicModal"><i
                                className="material-icons">info</i></a>
                        </h5>
                        <p className="text-muted font-size-sm">
                            3.1.7. підготувати комплекс методичного забезпечення навчальної (навчальних) дисципліни
                            (дисциплін)
                            <a href="#" data-toggle="modal" data-target="#basicModal"><i
                                className="material-icons">info</i></a>
                        </p>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <textarea name="discipline" className="form-control autosize"
                                          placeholder="Вказати назву навчальної дисципліни"></textarea>
                            </div>
                        </div>
                        <p className="text-muted font-size-sm">
                            3.1.7. підготувати комплекс методичного забезпечення кредитних модулів
                            <a href="#" data-toggle="modal" data-target="#basicModal"><i
                                className="material-icons">info</i></a>
                        </p>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <textarea name="module" className="form-control autosize"
                                          placeholder="Вказати назви кредитних модулів"></textarea>
                            </div>
                        </div>
                        <p className="text-muted font-size-sm">
                            3.1.7. підготувати комплекс програми навчальних дисциплін, робочі програми кредитних модулів
                            денної й заочної форми
                            навчання
                            <a href="#" data-toggle="modal" data-target="#basicModal"><i
                                className="material-icons">info</i></a>
                        </p>
                        <div className="row">
                            <div className="col-sm-6 mb-3">
                                <textarea name="zaochna_module" className="form-control autosize"
                                          placeholder="Вказати назви робочих програм"></textarea>
                            </div>
                        </div>
                    </section>

                    <hr className="my-5" />

                        <section id="section2">

                            <div className="row">
                                <div className="col-sm-3 mb-3">
                                    <h5>Видати підручники</h5>
                                    <p className="text-muted font-size-sm">
                                        видати підручники та/або навчальні посібники чи монографії
                                    </p>
                                    <div className="custom-spinner">
                                        <button className="btn btn-icon rounded-circle btn-faded-primary down"
                                                type="button"><i className="material-icons">remove</i></button>
                                        <input type="number" name="book" className="form-control" value="1" min="1"
                                               max="100" />
                                            <button className="btn btn-icon rounded-circle btn-faded-primary up"
                                                    type="button"><i className="material-icons">add</i></button>
                                    </div>
                                </div>
                                <div className="col-sm-3 mb-3">
                                    <h5>Забезпечити одержання патенту</h5>
                                    <p className="text-muted font-size-sm">
                                        забезпечити одержання щонайменше 2 патенту(ів)
                                    </p>
                                    <div className="custom-spinner">
                                        <button className="btn btn-icon rounded-circle btn-faded-primary down"
                                                type="button"><i className="material-icons">remove</i></button>
                                        <input name="patent" type="number" className="form-control" value="1" min="1"
                                               max="100" />
                                        <button className="btn btn-icon rounded-circle btn-faded-primary up"
                                                type="button"><i className="material-icons">add</i></button>
                                    </div>
                                </div>
                                <div className="col-sm-3 mb-3">
                                    <h5>Здійснювати наукове консультування докторанта(ів)</h5>
                                    <p className="text-muted font-size-sm">
                                        здійснювати наукове консультування докторанта(ів)
                                    </p>
                                    <div className="custom-spinner">
                                        <button className="btn btn-icon rounded-circle btn-faded-primary down"
                                                type="button"><i className="material-icons">remove</i></button>
                                        <input type="number" name="doctorantu" className="form-control" value="1"
                                               min="1" max="100" />
                                        <button className="btn btn-icon rounded-circle btn-faded-primary up"
                                                type="button"><i className="material-icons">add</i></button>
                                    </div>
                                </div>
                                <div className="col-sm-3 mb-3">
                                    <h5>Керівництво аспірантом(ами)</h5>
                                    <p className="text-muted font-size-sm">
                                        керівництво аспірантом(ами)
                                    </p>
                                    <div className="custom-spinner">
                                        <button className="btn btn-icon rounded-circle btn-faded-primary down"
                                                type="button"><i className="material-icons">remove</i></button>
                                        <input name="acpirante" type="number" className="form-control" value="1" min="1"
                                               max="100" />
                                        <button className="btn btn-icon rounded-circle btn-faded-primary up"
                                                type="button"><i className="material-icons">add</i></button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="my-5" />

                            <section id="section3">
                                <h5>Місце проживання/адреса реєстрації</h5>
                                <p className="text-muted font-size-sm">
                                    Місце проживання/адреса реєстрації
                                </p>
                                <div className="row">
                                    <div className="col-sm-6 mb-3">
                                        <textarea name="address" className="form-control autosize" placeholder=""></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2">
                                        <button type="submit" className="btn btn-primary btn-block">Згенерувати
                                            контракт
                                        </button>
                                    </div>
                                </div>
                            </section>


                </div>

                <div className="col-3 d-none d-xl-block">
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

export default Contract