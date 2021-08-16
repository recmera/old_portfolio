import React from 'react'
import image from './images/me.PNG'
import './Bio.css'

function Bio() {
    return (
        
        <div className='row'>
            <div className='about-me'>
                <img className='img' src={image} alt='import'></img>
                <p>Hola, mi nombre es Ricardo Coronado y esta es mi página personal. Saludos! </p>
            </div>
            <div className='description'>
                <h3>Short bio</h3>
                <p>Soy estudiante de Ingeniería civil en Informática de la Universidad Austral
                    de Chile.
                    Actualmente resido en la ciudad de Panguipulli y me encuentro cursando el último semestre académico. 
                    Participo de distintos proyectos en la zona sur del país, trabajando de forma remota.

                </p>
            </div>
            <div className='description'>
                <p>asdas</p>
            </div>
            
        </div>
    );
};

export default Bio
