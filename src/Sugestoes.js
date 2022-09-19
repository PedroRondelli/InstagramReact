function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={props.imagemSugestao} />
                <div class="texto">
                    <div class="nome">{props.nomeSugestao}</div>
                    <div class="razao">{props.segueVoce}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}



export default function Sugestoes(props) {
    const arraySugestao = [
        {
            imagem: "assets/img/bad.vibes.memes.svg",
            nome: "bad.vibes.memes",
            segue: "Segue você"
        },
        {
            imagem: "assets/img/chibirdart.svg",
            nome: "chibirdart",
            segue: "Segue você"
        },
        {
            imagem: "assets/img/razoesparaacreditar.svg",
            nome: "razoesparaacreditar",
            segue: "Novo no Instagram"
        },
        {
            imagem: "assets/img/adorable_animals.svg",
            nome: "adorable_animals",
            segue: "Segue você"
        },
        {
            imagem: "assets/img/smallcutecats.svg",
            nome: "smallcutecats",
            segue: "Segue você"
        }
    ]



    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {arraySugestao.map((s) => <Sugestao imagemSugestao={s.imagem}
                nomeSugestao={s.nome}
                segueVoce={s.segue}
            />
            )}
        </div>
    )

}