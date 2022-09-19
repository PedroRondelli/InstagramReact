import React from 'react';

export default function Usuario(props) {
    const [usuario,setUsuario] = React.useState("Catana")
    const [fotoUsuario,setFoto ] = React.useState("assets/img/catanacomics.svg") 

    function mudarNomeUsuario(props) {
        setUsuario(prompt("Nome de Usuário:"))
        
        
    }
    function mudarFoto() {
        setFoto(prompt("Link Foto de Usuário :"))
    }
    return (
        <div class="usuario">
            <img onClick={mudarFoto} src={fotoUsuario} />
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