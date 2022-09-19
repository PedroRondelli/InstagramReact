import React from 'react';
function Post(props) {

    function salvar() {
        if(bookMa==="bookmark-outline"){
        setBook("bookmark")
    }else{
        setBook("bookmark-outline")
    }
    }
    function preencher() {
        if (preenchido === "sCurtida") {
            setHeart("Curtida")
            setPre("heart")
            setQuantidade(0.001)
        }else{
            setHeart("sCurtida")
            setPre("heart-outline")
            setQuantidade(0)
        }
    }

    const [bookMa, setBook] = React.useState("bookmark-outline")
    const [preenchido, setHeart] = React.useState("sCurtida")
    const [preenchido2, setPre] = React.useState("heart-outline")
    const [quantidade,setQuantidade]=React.useState(0)
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.perfilPostador} />
                    {props.nomePostador}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img onClick={preencher} src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={preencher} class={preenchido} name={preenchido2}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={salvar} name={bookMa}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidaPrincipal} />
                    <div class="texto">
                        Curtido por <strong>{props.ultimaCurtida}</strong> e <strong>outras {(props.ultimasCurtidas + quantidade).toFixed(3)} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts(props) {
    const arrayPosts = [
        {
            perfil: "assets/img/meowed.svg",
            nome: "meowed",
            conteudo: "assets/img/gato-telefone.svg",
            perfilCurtida: "assets/img/respondeai.svg",
            nomeCurtida: "respondeai",
            qtdcurtidas: 101.523 ,
        },
        {
            perfil: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            perfilCurtida: "assets/img/adorable_animals.svg",
            nomeCurtida: "adorable_animals",
            qtdcurtidas: 99.159 ,
        }
    ]

    return (
        <div class="posts">
            {arrayPosts.map(p => <Post
                perfilPostador={p.perfil}
                nomePostador={p.nome}
                imagemConteudo={p.conteudo}
                curtidaPrincipal={p.perfilCurtida}
                ultimaCurtida={p.nomeCurtida}
                ultimasCurtidas={p.qtdcurtidas}
            />

            )}
        </div>
    )
} 