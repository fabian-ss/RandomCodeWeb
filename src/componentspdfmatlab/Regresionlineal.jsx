import React, { Fragment } from 'react'
import '../styles/StylePDFMatlab.css';
import pdf from './pdfmatlab/RegresionLinealSimpleCuad.pdf';

function Regresionlineal() {
    return (
        <Fragment>
            <div className="PDFMat-superior">

                <div className="PDFMat-container">

                    <div className="PDFMat-cuepo-caja">

                        <div className="PDFMat-titlo">

                            <h1>Regresion lineal</h1>

                        </div>

                        <div className="PDFMat-pdf">

                        <iframe
                            src={pdf}
                            type='application/pdf'
                            title='title'
                            frameborder="0"
                        />

                        </div>

                    </div>

                    <div className="PDFMat-cuepo-caja">

                        <div className="PDFMat-titlo">

                            <h1>Explicación del código</h1>

                        </div>

                        <div className="PDFMat-explicacion-contenedor">

                             <div className="PDFMat-explicacion">

                                <p>Este código es un ejemplo de cómo se puede aplicar la <span><b>ecuación matricial</b></span> para resolver un problema de <span><b>regresión lineal múltiple</b></span>, teniendo una variable independiente y varias variables dependientes</p>
                                 
                             </div>

                        </div>

                    </div>

                    <div className="PDFMat-cuepo-caja">

                        <div className="PDFMat-titlo">

                            <h1>Video del código(En construcción) Dejo un video de mi canal, "escuchar con audifonos"</h1>

                        </div>

                        <div className="PDFMat-video">

                        <iframe  src="https://www.youtube.com/embed/kpX5Cdto05o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </div>

                    </div>


                </div>

            </div>
        </Fragment>
    )
}

export default Regresionlineal
