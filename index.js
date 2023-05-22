const movies = require("./data");
const prompt = require("prompt-sync")();
const {verListaFilmes, filmesParaClassificar, verClassificaçoes,verUtilizadores,verMenu,rateFilmes} = require("./display");
const {media} = require("./calculations");


console.log(`\n-=Bem-vindo ao FredoFilmes.=-\n`)

    
while (true) {
    
  //Varios console.log para que o "resposta = prompt()" não repetir sempre que o usuario introduza um comando
    console.log("Pretende:");
    console.log("1 - Classificar um filme?");
    console.log("2 - Ver classificações?");
    console.log("3 - Ver lista de filmes?");
    console.log("4 - Desligar programa!");
    const resposta = prompt("");


    switch (resposta) {

      case "1":
            filmesParaClassificar();
            const movieNumber = parseInt(prompt("Escolha a anime que quer ver de 1 a 9: "));
      
            if (movieNumber >= 1 && movieNumber <= 9) {
                const movieIndex = movieNumber - 1;
                rateFilmes(movieIndex);
            } else {
                console.log("Número inválido. Deve escolher de 1 a 9.");
            }
            break;

      case "2":
        verClassificaçoes();
        verMenu();
        break;
  
      case "3":
        verListaFilmes();
        verMenu();
        break;
  
      case "4":
        console.log("\nObrigado por usar FredoFilms!");
        process.exit(1);
  
      default:
        console.log("\nTêm de ser 1, 2, 3 ou 4!");
        break;
    }
}
