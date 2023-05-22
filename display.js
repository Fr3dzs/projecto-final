const { media } = require("./calculations");
const movies = require("./data");
const prompt = require("prompt-sync")();


// Faz a maior parte do trabalho, como perguntar ao usuário o filme, classificar e guardar a classificação.
function rateFilmes(movieIndex){

    const movie = movies[movieIndex];
    const ratings = movie[2]; // Array de classificações para os filmes.

    while(true){

    //O usuário escolhe a classificação para o filme
    const rating = parseInt(prompt(`Classifique "${movie[0]}" de 1 a 5: `));
  
    //Valida as classificações.
    if (isNaN(rating) || rating < 1 || rating > 5) {
      console.log("Número inválido, escolher de 1 a 5.");
      continue; //Repetir a prompt rating
    }
  
    //Puxa as ratings para o array ratings.
    ratings.push(rating)
  
    //Calcula a média das classificações
    const ratingsSum = ratings.reduce((sum, rating) => sum + rating, 0);
    movie[3] = (ratingsSum / ratings.length).toFixed(1);
  
    console.log(`Classificou "${movie[0]}" com ${rating} de score.\n`);
    console.log(`Com a sua classificação a media ficou ${movie[3]}.\n`);

    break; // Faz com que acabe o while loop assim que for uma classificação valida
    }
}

//Vê a lista de filmes mais as sinopses.
function verListaFilmes(){

    for(var i = 0; i < movies.length; i++){
        for(var j = 0; j < movies[2].length; j++){
            console.log(`\n\t-= ${movies[i][0]} =-`)
            console.log(`${movies[i][1]}\n`)
            break;
        }
    }
}

//Está é a função que mostra os filmes para classficar em ordem
function filmesParaClassificar(){

    count = 0

    for(var i = 0; i < movies.length; i++){
        for(var j = 0; j < movies[2].length; j++){
            count++
            console.log (`\n${count} - ${movies[i][0]}`)
            break;       
        }
    }
}

//Mostra o nome dos filmes e as classificações autualizadas
function verClassificaçoes(){

    for (var i = 0; i < movies.length; i++) {
        const movie = movies[i];
        const ratings = movie[2];
        let ratingsSum = ratings.reduce((sum, rating) => sum + rating, 0);
    
        for (var j = 0; j < ratings.length; j++) {
          const rating = ratings[j];
        }
    
        const averageRating = (ratingsSum / ratings.length).toFixed(1);
        movie[3] = averageRating;
    
        console.log(`\n${movie[0]}`);
        console.log(`Classificação: ${movie[3]}\n`);
      }
}

//Serve para fechar o programa ou voltar aos menus
function verMenu(){

    do{
        var existe = prompt("Quer voltar ao menu? s/n? ")
        }while(existe != "s" && existe != "n")
    
        if(existe == "s"){

        }
        if(existe=="n"){
        process.exit(0)
        }
}



module.exports = {verListaFilmes, filmesParaClassificar, verClassificaçoes,verMenu,rateFilmes}
