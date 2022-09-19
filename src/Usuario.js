import React from 'react';
function CaixaUsuario(props) {
    function mudarNomeUsuario() {
        setUsuario(prompt("Nome de Usuário:"))
        


    }
    function mudarFoto() {
        setFoto(prompt("Link Foto de Usuário :"))
        
    }
    const [usuario, setUsuario] = React.useState("")
    const [fotoUsuario, setFoto] = React.useState("")
    return (
        <div class="usuario">
            <img onClick={mudarFoto} src={ (fotoUsuario==="")? props.imagem:fotoUsuario} />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    { (usuario==="")? props.nome:usuario}
                    <ion-icon onClick={mudarNomeUsuario} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
        )
}



export default function Usuario(props) {
    const objetoUsuario = { nome: "Catana", imagem: "assets/img/catanacomics.svg" }
    //const [usuario, setUsuario] = React.useState("Catana")
    //const [fotoUsuario, setFoto] = React.useState("assets/img/catanacomics.svg")
    return (
        <CaixaUsuario imagem={objetoUsuario.imagem} nome={objetoUsuario.nome} />
    )
}