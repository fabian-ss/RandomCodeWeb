import React, { Fragment} from 'react'
import matlogo from '../assets/matlablogo.png';
import '../styles/StyleMenuCode.css'


import {Link} from "react-router-dom";

const MenuMatlab = () => {

    return (

        <Fragment>

            <div className="code-bodyBack">

                <main id="code-main">

                    <div className="code-main-container-global">

                        <div className="code-main-container-central">

                            <div className="container">

                                <div className="code-mat-main-cabecera">

                                    <div className="code-main-cabecera-container">

                                        <div className="code-main-cabecera-container-img">
                                            <img src={matlogo} alt="logo" />
                                        </div>

                                        <div className="code-main-container-titulo">
                                            <h1>Programas </h1>
                                            <h1> en MATLAB</h1>
                                        </div>

                                        <div className="code-main-cabecera-container-img">
                                            <img src={matlogo} alt="logo" />
                                        </div>

                                    </div>

                                </div>

                                <div className="code-main-cuerpo">


                                    <div className="code-main-cuerpo-superior-secciones">

                                        <div className="code-main-cuerpo-superior-secciones-container">
                                        
                                            <div className="code-main-cuerpo-superior-secciones-container-s1">



                                                <div className="code-carpeta">

                                                    <div className="code-tarj">

                                                        <div className="code-tarj-titulo">
                                                            <h2>Regresión</h2>
                                                            <h2>Lineal</h2>

                                                        </div>

                                                        <Link to="/Menumatlab/Regresionlineal"><p>Código</p></Link>
                                                        <Link> <p>Ejercicios</p></Link>
                                                    </div>


                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Datos</h2>
                                                            <h2></h2>
                                                        </div>

                                                        <Link to="/Menumatlab/Datos"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>


                                            </div>



                                            <div className="code-main-cuerpo-superior-secciones-container-s1">

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Gauss</h2>
                                                            <h2>Jordan</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/GaussJordan"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Gráficas</h2>
                                                            <h2>númericas</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/GraficasDeValorNumerico"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="code-main-cuerpo-superior-secciones-container-s1">

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Gráficas</h2>
                                                            <h2>simbolicas</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/GraficaVariableSimbolica"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Gráficas de</h2>
                                                            <h2>vectores</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/GraficaDeVectores"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="code-main-cuerpo-superior-secciones-container-s1">

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Regresión</h2>
                                                            <h2>multiple</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/RegresionMultiple"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Matriz</h2>
                                                            <h2>Hessiana</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/MatrizHessiana"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="code-main-cuerpo-superior-secciones-container-s1">

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Polinomio</h2>
                                                            <h2>Taylor</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/PolinomioDeTaylor"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Método</h2>
                                                            <h2>Bisección</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/MetodoBiseccion"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className="code-main-cuerpo-superior-secciones-container-s1">

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Newton</h2>
                                                            <h2>Rhapson</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/NewtonRhapson"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>

                                                </div>

                                                <div className="code-carpeta">

                                                    <div className="code-tarj">
                                                        <div className="code-tarj-titulo">
                                                            <h2>Puntos</h2>
                                                            <h2>Criticos</h2>
                                                        </div>

                                                        <Link to="/Menumatlab/PuntosCriticos2Variables"><p>Código</p></Link>
                                                        <Link><p>Ejercicios</p></Link>
                                                    </div>
                                                </div>

                                            </div>



                                        </div>

                                    </div>



                                </div>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        </Fragment>
    )
}

export default MenuMatlab



