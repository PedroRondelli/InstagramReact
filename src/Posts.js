function Post(props) {
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
                <img src={props.imagemConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidaPrincipal} />
                    <div class="texto">
                        Curtido por <strong>{props.ultimaCurtida}</strong> e <strong>{props.ultimasCurtidas}</strong>
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
            qtdcurtidas: "outras 101.523 pessoas",
        },
        {
            perfil: "assets/img/barked.svg",
            nome: "barked",
            conteudo: "assets/img/dog.svg",
            perfilCurtida: "assets/img/adorable_animals.svg",
            nomeCurtida: "adorable_animals",
            qtdcurtidas: "outras 99.159 pessoas",
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