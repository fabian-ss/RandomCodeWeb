import React, { Fragment } from 'react'
import '../styles/StyleMenuBar.css';

import {
    Link,
    NavLink
} from "react-router-dom";

const Navegacion = () => {
    return (
        <Fragment>

                <header id="top-header">

                    <div className="top-header-body">

                        <div className="container">

                            <div className="top-header-bodyf">

                                <div className="top-header-logo">

                                    <NavLink to="/">
                                        <a>RandomCode</a>
                                    </NavLink>

                                </div>

                                <div className="enlace">

                                    <Link to="/MenuMatlab">
                                        <a className="enlaces">MATLAB</a>
                                    </Link>

                                    <Link to="/Cuaderno">
                                        <a className="enlaces">Cuaderno</a>
                                    </Link>

                                    <Link to="/About">
                                        <a className="enlaces">About</a>
                                    </Link>


                                </div>

                            </div>

                        </div>

                    </div>

                </header>
            
        </Fragment>
    )
}

export default Navegacion
