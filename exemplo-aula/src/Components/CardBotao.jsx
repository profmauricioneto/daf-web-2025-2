import React, { Fragment } from 'react';
import Card from './Card';

const CardBotao = () => {
    return (
        <Fragment>
            <Card>
                <h1>Esse é meu card</h1>
                <p>testando o card</p>
                <button>Enviar</button>
            </Card>
        </Fragment>
    );
}

export default CardBotao;