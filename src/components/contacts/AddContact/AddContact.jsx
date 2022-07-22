import React from 'react';
import {Link} from 'react-router-dom';
let AddContact = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
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
                                    <input type="submit" className="btn btn-success" value="Create"/>
                                    <Link to={'/contacts/list'} className="btn btn-dark ms-2">Cancel</Link>
                                </div>
                                

                            </form>
                        </div>
                    </div>

                </div>

            </section>
            

        </React.Fragment>
    )
};
export default AddContact;