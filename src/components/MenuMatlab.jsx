import React, { Fragment, useRef } from 'react'
import matlogo from '../assets/matlablogo.png';
import '../styles/StyleMenuCode.css'


import { Link } from "react-router-dom";

const MenuMatlab = () => {



    const paginaRef = useRef();
    const prevRef = useRef();
    const nextRef = useRef();
    const nextspanRef = useRef();
    const prevspanRef = useRef();

    const maxItem = 9;
    let index = 1;
    const MaxElementos = 12;
    const total = Math.ceil(MaxElementos / maxItem);

    const handle = () => {

        const gallery = paginaRef.current.children
        const n = paginaRef.current.childElementCount

        for (let i = 0; i < n; i++) {
            gallery[i].classList.add("bothide")

            if (i >= (index * maxItem) - maxItem && i < index * maxItem) {
                gallery[i].classList.remove("bothide")

            }
        }

    }

    const prev = () => {
        index--;
        const botonpre = prevRef.current
        const botonnext = nextRef.current
        const nextspan = nextspanRef.current
        const prevspan = prevspanRef.current

        if (index <= 1) {
            prevspan.classList.remove("bothide");
            botonpre.classList.add("bothide");
        }
        if (index <= total) {
            botonnext.classList.remove("bothide");
            nextspan.classList.add("bothide");
        }
        handle()

    }

    const next = () => {
        index++;
        const botonpre = prevRef.current
        const botonnext = nextRef.current
        const prevspan = prevspanRef.current
        const nextspan = nextspanRef.current

        if (index > 1) {
            botonpre.classList.remove("bothide");
            prevspan.classList.add("bothide");
        }
        if (index >= total) {
            botonnext.classList.add("bothide");
            nextspan.classList.remove("bothide");
        }
        handle()

    }

    return (

        <Fragment>

            <div id="code-main" className="code-bodyBack">

                <div className="container">

                    <div className="code-main-container-global">

                        <div className="code-mat-main-cabecera">

                            <div className="code-main-cabecera-container">

                                <div className="code-main-cabecera-container-img">
                                    <img src={matlogo} alt="logo" />
                                </div>

                                <div className="code-main-container-titulo">
                                    <h1>Programas </h1>
                                    <h1> en MATLAB</h1>
                                </div>

                                <div className="code-main-cabecera-container-img img-mat-dos">
                                    <img className="img-mat-dos" src={matlogo} alt="logo" />
                                </div>

                            </div>

                        </div>

                        <div className="code-main-cuerpo">

                            <div ref={paginaRef} id="dos" className="code-main-cuerpo-container">

                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Regresi??n</h2>
                                                <h2>Lineal</h2>

                                            </div>

                                            <Link to="/Menumatlab/Regresionlineal"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Datos</h2>

                                            </div>

                                            <Link to="/Menumatlab/Datos"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Gr??ficas</h2>
                                                <h2>n??mericas</h2>
                                            </div>

                                            <Link to="/Menumatlab/GraficasDeValorNumerico"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Gauss -</h2>
                                                <h2>Jordan</h2>

                                            </div>

                                            <Link to="/Menumatlab/Gaussjordan"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>
                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Gr??ficas</h2>
                                                <h2>simbolicas</h2>
                                            </div>

                                            <Link to="/Menumatlab/GraficaVariableSimbolica"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Gr??ficas de</h2>
                                                <h2>vectores</h2>
                                            </div>

                                            <Link to="/Menumatlab/GraficaDeVectores"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-carpeta">

                                            <div className="code-tarj">
                                                <div className="code-tarj-titulo">
                                                    <h2>Regresi??n</h2>
                                                    <h2>multiple</h2>
                                                </div>

                                                <Link to="/Menumatlab/RegresionMultiple"><p>C??digo</p></Link>
                                                <Link><p>Ejercicios</p></Link>
                                            </div>

                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Matriz</h2>
                                                <h2>Hessiana</h2>
                                            </div>

                                            <Link to="/Menumatlab/MatrizHessiana"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Polinomio</h2>
                                                <h2>Taylor</h2>
                                            </div>

                                            <Link to="/Menumatlab/PolinomioDeTaylor"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">
                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>M??todo</h2>
                                                <h2>Bisecci??n</h2>
                                            </div>

                                            <Link to="/Menumatlab/MetodoBiseccion"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">
                                            <div className="code-tarj-titulo">
                                                <h2>Newton</h2>
                                                <h2>Rhapson</h2>
                                            </div>

                                            <Link to="/Menumatlab/NewtonRhapson"><p>C??digo</p></Link>
                                            <Link><p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Raices</h2>


                                            </div>

                                            <Link to="/Menumatlab/Raices"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Puntos cr??ticos</h2>
                                                <h2>2 variables</h2>


                                            </div>

                                            <Link to="/Menumatlab/PuntosCriticos2Variables"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Im??genes</h2>
                                                <h2>Transparentes</h2>


                                            </div>

                                            <Link to="/Menumatlab/ImagenesTransparentes"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Galer??a de</h2>
                                                <h2>im??genes</h2>


                                            </div>

                                            <Link to="/Menumatlab/GaleriaDeImagenes"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Music</h2>
                                                <h2>Player</h2>


                                            </div>

                                            <Link to="/Menumatlab/ReproductorDeMusica"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>
                                <div className="code-main-cuerpo-secciones bothide">
                                    <div className="code-carpeta">

                                        <div className="code-tarj">

                                            <div className="code-tarj-titulo">
                                                <h2>Music</h2>
                                                <h2>Player App</h2>


                                            </div>

                                            <Link to="/Menumatlab/ReproductorDeMusicaApp"><p>C??digo</p></Link>
                                            <Link> <p>Ejercicios</p></Link>
                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="code-pagination">
                                <div className="code-contorno-boton"><span ref={prevspanRef} className="code-span-boton">Anterior</span><button className="code-boton bothide" ref={prevRef} onClick={prev}>Anterior</button></div>
                                <div className="code-contorno-boton"><span ref={nextspanRef} className="code-span-boton-pre bothide">siguiente</span><button className="code-boton botonnext" ref={nextRef} onClick={next}>Siguiente</button></div>
                            </div>








                        </div>


                    </div>

                </div>


            </div>

        </Fragment>
    )
}

export default MenuMatlab



