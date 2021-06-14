import React, { Fragment } from 'react'
import '../styles/StyleAbout.css';
import perfil from '../assets/yo1.jpg';
import angle from '../icons/angle-double.svg';

import github from '../icons/github.svg';
import youtube from '../icons/youtube.svg';
import insta from '../icons/instagram2.svg';
import face from '../icons/facebook.svg';


import { Link } from "react-router-dom";

const About = () => {
    return (
        <Fragment>

            <div className="about-bodyBack">

                <div className="about-global">

                    <div className="container">

                        <div id="about-main1">

                            <div className="about-main-superior">

                                <div className="about-main-container">

                                    <div className="about-main-container-caja1">

                                        <div className="about-main-container-imagen">

                                            <img src={perfil} alt="Foto De Perfil" />

                                        </div>

                                    </div>

                                    <div className="about-main-container-caja2">

                                        <div className="about-main-container-about">

                                            <div className="about-main-container-about-titulo">

                                                <h1> Sobre mi</h1>

                                            </div>

                                            <div className="about-main-container-about-description">

                                                <p className="about-body-descripcion">
                                                    Yo soy <b>José Fabian Soltero Escobar</b>, estudiante de ingeniería en Biónica en la UPIITA-IPN, soy programador freelancer y autodidacta,
                                                    mis intereses están en la <b> ciencia de los datos</b> y el desarrollo de la <b>inteligencia artificial</b>, en mis tiempos libres me dedico  a la <b>edición de música digital</b>, pero también a la edición de imagen y video</p>

                                                <p className="about-body-descripcion">
                                                    En esta página subiré principalmente programas en MATLAB que podrían ser de utilidad, así como proyectos que he desarrollado como estudiante </p>


                                            </div>

                                        </div>

                                    </div>

                                </div>


                            </div>

                        </div>

                        <div className="about-container80">

                            <hr className="about-hr" />

                            <div id="about-main2">

                                <h1 className="about-h1">Proyectos personales</h1>

                                <div className="about-container40">

                                    <div className="about-subtitulo">
                                        <img class="about-fas-fa-angle" src={angle} alt="Angle-icon" /><h2 class="about-h2" > RandomMusicD </h2>
                                    </div>

                                    <div className="about-parrafo">

                                        <p>
                                            <a href="https://youtube.com/c/RandomMusicD"><b>"RandomMusicD"</b></a>
                                            es el nombre del canal que estoy desarrollando en la plataforma de Youtube,
                                            una experiencia musical dada por la aplicación de una función matemática a la música, la llamada
                                            <a href="https://es.wikipedia.org/wiki/Funci%C3%B3n_de_transferencia_relacionada_con_la_cabeza">
                                                <b><i>"Función de transferencia relacionada con la cabeza."</i></b>
                                            </a>
                                        </p>

                                        <p>
                                            Una función matemática de carácter biológico que actúa sobre la percepción del audio y del entorno,
                                            ya que al momento de escucharla el cerebro interpreta que la música gira alrededor de la cabeza,
                                            este pequeño hack al cerebro es lo que hace interesante este efecto,
                                            da la posibilidad de experimentar la música de otra manera totalmente única,
                                            dando incluso la sensación de estar en un concierto, pero debido a la naturaleza del audio
                                            este efecto solo es posible con audífonos actualmente, en el futuro tal vez se puedan crear
                                            bocinas personalizadas para este efecto.
                                        </p>

                                        <p>
                                            Estas canciones que pondré a continuación dos de las últimas canciones que subí a mi canal.
                                        </p>



                                    </div>

                                    <div class="about-muestra">

                                        <h3>
                                            Atención: "¡Escuchar solo con audífonos!"
                                        </h3>

                                        <div class="about-muestra-canciones">

                                            <iframe src="https://www.youtube.com/embed/lqQSyepmeJ8"
                                                title="YouTube video player" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>

                                            <iframe src="https://www.youtube.com/embed/kpX5Cdto05o"
                                                title="YouTube video player" frameborder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen></iframe>

                                        </div>


                                    </div>

                                    <div className="about-subtitulo">
                                        <img class="about-fas-fa-angle" src={angle} alt="Angle-icon" /><h2 class="about-h2" > Prótesis sustentable </h2>
                                    </div>

                                    <div className="about-parrafo">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error ea unde sed. Accusantium ducimus saepe, pariatur laboriosam recusandae voluptates dolorum earum quisquam. Vel quaerat perferendis omnis quisquam amet maiores minus iste, dolorem adipisci. Dolor reprehenderit mollitia at eaque velit repellat vero, sequi, quaerat dignissimos ea cum alias, explicabo rem.</p>
                                    </div>

                                </div>

                            </div>

                            <hr className="about-hr" />

                            <div className="about-main3">

                                <h1 className="about-h1">Contacto</h1>

                                <div className="about-container40">

                                    <div className="about-container-infeior">

                                        <div className="about-container40-izq">

                                            <div className="about-data-general">

                                                <div className="about-data-izq">

                                                    <div className="data-uno">

                                                        <div>
                                                            <span>Nombre:</span>
                                                        </div>
                                                        <div>
                                                            <span>Giro:</span>
                                                        </div>
                                                        <div>
                                                            <span>E-mail:</span>
                                                        </div>


                                                    </div>

                                                </div>

                                                <div className="about-data-der">

                                                    <div className="data-dos">
                                                        <div>
                                                            <span>José Fabian Soltero Escobar</span>
                                                        </div>
                                                        <div>
                                                            <span>Programador freelancer</span>
                                                        </div>
                                                        <div>
                                                            <span>randommusicd@gmail.com</span>
                                                        </div>


                                                    </div>


                                                </div>


                                            </div>

                                        </div>

                                        <div className="about-container40-der">

                                            <div className="about-curriculum-titulo">
                                                <h2>Curriculum</h2>
                                            </div>

                                            <div className="about-curriculum-boton">
                                                <Link to="/Curriculum"><button>Visualizar</button></Link>

                                                {/* <a href="./"><button>Visualizar</button></a> */}
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <footer id="pie-pagina">
                <div className="container-footer">
                    <div className="pie-pagina">
                        <div className="footer-text">
                            <div className="footer-text-title">
                                <h3>La técnica al servicio de la patria</h3>
                            </div>
                            <div className="footer-text-legend">
                                <p>José Fabian Soltero Escobar &copy; 2021</p>
                            </div>
                        </div>

                        <div className="footer-social-networks">
                            <div className="social-title">
                                <h3>Redes sociales</h3>
                            </div>
                            <div className="social-icons">
                                <a href="https://github.com/fabian-ss" className="icon" target="_blank" rel="noopener noreferrer">
                                    <img className="about-fas-fa-angle" src={github} alt="Angle-icon" />
                                </a>
                                <a href="https://www.instagram.com/fabians72/" className="icon" target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="about-fas-fa-angle" src={insta} alt="Angle-icon" />
                                </a>
                                <a href="https://www.youtube.com/c/RandomMusicD" className="icon" target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="about-fas-fa-angle" src={youtube} alt="Angle-icon" />
                                </a>
                                <a href="https://www.facebook.com/fabian.escobar.9" className="icon" target="_blank"
                                    rel="noopener noreferrer">
                                    <img className="about-fas-fa-angle" src={face} alt="Angle-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </Fragment>
    )
}

export default About
