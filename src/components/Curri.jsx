import React, { Fragment } from 'react'
import curriculumvitae from '../componentspdfmatlab/pdfmatlab/CurriculumVitae.pdf';
import '../styles/StyleCurri.css'

function Curri() {
    return (
        <Fragment>
            <div className="curriculumv">
                <iframe src={curriculumvitae} title="Curriculum vitae"
                    frameborder="0"
                >
                </iframe>
            </div>
        </Fragment>
    )
}

export default Curri
