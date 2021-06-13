import React, { Fragment } from 'react'
import '../styles/StyleMenuCuaderno.css';
import folder from '../assets/folder.png';

import { Link } from "react-router-dom";

const Cuaderno = () => {
    return (
        <Fragment>

            <div className="cuaderno-bodyBack">

                <main id="cuad-main">

                    <div className="cuad-main-cuerpo-global">

                        <div className="container">

                            <div className="cuad-main-cuerpo-superior-secciones">

                                <h1>Materias</h1>

                                <div className="cuad-main-cuerpo-superior-secciones-container">

                                    <div className="cuad-main-cuerpo-superior-secciones-container-s1">

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1 className="cuad-h1h"><a href="">Anatomía</a><a href=""></a></h1>
                                            </div>

                                        </div>

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1><a href="">Quimíca</a><a href="">Orgánica</a></h1>
                                            </div>

                                        </div>

                                    </div>


                                    <div className="cuad-main-cuerpo-superior-secciones-container-s2">

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1 className="h1h"><a href="">Biología</a><a href="">Molecular</a></h1>

                                            </div>

                                        </div>

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1><a href="">Biofísica</a></h1>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* <!--  --> */}

                            <div className="cuad-main-cuerpo-superior-secciones">


                                <div className="cuad-main-cuerpo-superior-secciones-container">

                                    <div className="cuad-main-cuerpo-superior-secciones-container-s1">

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1 className="cuad-h1h"><a href="">Fisico-</a><a href="">química</a></h1>
                                            </div>

                                        </div>

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1><a href="">Métodos</a><a href="">Númericos</a></h1>
                                            </div>

                                        </div>


                                    </div>


                                    <div className="cuad-main-cuerpo-superior-secciones-container-s2">

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1 className="cuad-h1h"><a href="">Óptica</a></h1>

                                            </div>

                                        </div>

                                        <div className="cuad-carpeta">

                                            <div className="cuad-carpeta-imagen">
                                                <img src={folder} alt="Folder" />
                                            </div>

                                            <div className="cuad-carpeta-titulo">
                                                <h1><a href="">Biofísica</a></h1>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="cuad-main-cuerpo-superior-secciones">

                                <h1><Link to="/Apuntes"> Apuntes</Link></h1>

                            </div>

                        </div>

                    </div>

                </main>


            </div>

        </Fragment>
    )
}

export default Cuaderno
