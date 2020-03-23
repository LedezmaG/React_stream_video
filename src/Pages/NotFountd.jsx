import React from 'react';

function NotFound() {
    return(
        // React fragment envia los elementos dentro de el sin contenedores adicionales
        // <React.Fragment></React.Fragment>
        // otra forma e hacer esto es urilizar " <> contenido </> "
        <>
            <p>Not found</p>
        </>
    );
}

export default NotFound