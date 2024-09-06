// console.log(dados);

function buscar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Digite algo para fazer a busca.</p>"
        return
    }

    if (campoPesquisa.length < 3) {
        section.innerHTML = "<p>Digite pelo menos 3 caracteres.</p>";
        return;
      }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <p><a href="${dado.tutorialYoutube}" target="_blank">Tutorial Youtube</a>,
                <a href="${dado.tutorialPinterest}" target="_blank">Tutorial Pinterest</a></p>
            </div>
    ` ;
        }

    }

    if (!resultados){
        resultados = "<p>Nenhum valor encontrado.</p>"
    }

    section.innerHTML = resultados;
}