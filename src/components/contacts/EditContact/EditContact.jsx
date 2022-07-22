import React from 'react';
import {Link} from 'react-router-dom';

let EditContact = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-primary fw-bold">Edit Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Nom"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Prenom"/>
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Photo Url"/>
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Numero"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Email"/>
                                </div>
                                
                                <div className="mb-2">
                                    <input type="submit" className="btn btn-primary" value="Update"/>
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" alt="" className="img-fluid contact-img"/>
                        </div>
                    </div>

                </div>

            </section>
            

        </React.Fragment>
    )
};
export default EditContact;