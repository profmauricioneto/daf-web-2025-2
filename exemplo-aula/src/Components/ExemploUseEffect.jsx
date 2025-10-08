import React, { useEffect } from 'react';
const ExemploUseEffect = () => {
    useEffect(() => {
        console.log('Executando o useEffect durante a montagem.');
        
        return() => console.log('componente se desmontando.');
        
    }, []);
    
    return(
        <>
            <div>Testando o use Effect.</div>
        </>
    )
}

export default ExemploUseEffect;