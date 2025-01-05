import React, { useState } from 'react';

function ErrorPage(props) {
    return (
        <>
        <section id="NotFound">
            <div className="NotFoundBlock">
                
                <div className="NotFoundInfo">
                    <img src='/full_logo.png'></img>
                    <h1>{props.code === undefined?"404":props.code}</h1>
                    <h2>{props.text === undefined?"Page not found":props.text}</h2>
                </div>
                
            </div>
        </section>
        
        </>
    );
}
export default ErrorPage;