import React from 'react';

export default function Usuario(props) {
    const [usuario,setUsuario] = React.useState("Catana")

    function mudarNomeUsuario(props) {
        setUsuario(prompt("Nome de Usuário:"))
        
        
    }
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    {((usuario !== null && usuario !=="") ? usuario:"Catana")}
                    <ion-icon onClick={mudarNomeUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}