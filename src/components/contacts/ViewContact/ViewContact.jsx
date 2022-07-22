import React from 'react';
import {Link} from 'react-router-dom';

let ViewContact = () => {
    return (
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>

                        </div>

                    </div>

                </div>

            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" alt="" className=" img-fluid contact-img"/>

                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-action">
                                                Nom : <span className="fw-bold">CISSE</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Prenom : <span className="fw-bold">Aicha</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Numero : <span className="fw-bold">781547823</span>
                                            </li>
                                            <li className="list-group-item list-group-item-action">
                                                Email : <span className="fw-bold">aisha@gmail.com</span>
                                            </li>

                                        </ul>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>

                        </div>

                    </div>

                </div>

            </section>

        </React.Fragment>
    )
};
export default ViewContact;