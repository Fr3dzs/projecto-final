var movies = [
    [
        "Attack on Titan",
        ["Sinopse: Num mundo onde a humanidade é ameaçada por criaturas humanoides gigantes conhecidas como Titãs, um jovem se une à luta para proteger sua casa e descobrir a verdade por trás da existência dos Titãs."],
        [4.5]
    ],
    [
        "Death Note",
        ["Sinopse: Um estudante do ensino médio descobre um caderno misterioso que lhe dá o poder de matar qualquer pessoa cujo nome ele escreva nele. Ele usa esse poder para purificar o mundo de criminosos, mas logo se vê envolvido em um jogo de gato e rato com um detetive brilhante."],
        [4.8]
    ],
    [
        "Naruto",
        ["Sinopse: Acompanhe a jornada de Naruto Uzumaki, um jovem ninja com o sonho de se tornar o mais forte e se tornar o Hokage de sua vila, enquanto enfrenta vários desafios e batalhas."],
        [4.6]
    ],
    [
        "One Piece",
        ["Sinopse: Monkey D. Luffy e sua tripulação de piratas embarcam em uma grande aventura para encontrar o lendário tesouro conhecido como One Piece e se tornar o Rei dos Piratas."],
        [4.9]
    ],
    [
        "Fullmetal Alchemist: Brotherhood",
        ["Sinopse: Dois irmãos, Edward e Alphonse Elric, buscam a Pedra Filosofal para restaurar seus corpos após uma experiência alquímica fracassada. Eles se envolvem em uma conspiração governamental e encontram inimigos poderosos."],
        [4.6]
    ],
    [
        "My Hero Acadamia",
        ["Sinopse: Num mundo onde pessoas com superpoderes conhecidos como Quirks são comuns, um jovem chamado Izuku Midoriya sonha em se tornar um herói mesmo não tendo um Quirk próprio. Ele se matricula em uma prestigiosa academia de heróis e enfrenta inúmeros desafios."],
        [4.6]
    ],
    [
        "Demon Slayer",
        ["Sinopse: Acompanhe a jornada de Naruto Uzumaki, um jovem ninja com o sonho de se tornar o mais forte e se tornar o Hokage de sua vila, enquanto enfrenta vários desafios e batalhas."],
        [4.8]
    ],
    [
        "Dragon Ball Z",
        ["Sinopse: Acompanhe as aventuras de Goku e seus amigos enquanto eles defendem a Terra contra vários vilões e seres poderosos de todo o universo usando suas habilidades em artes marciais e superpoderes."],
        [4.5]
    ],
    [
        "Hunter x Hunter",
        ["Sinopse: Gon Freecss embarca em uma jornada para se tornar um Caçador, um profissional licenciado com habilidades excepcionais para caçar tesouros secretos."],
        [4.6]
    ]

]

function listaMovies(){
    for(var i = 0; i < movies.length; i++){
        if(!(movies[i].length == 3 && typeof(movies[i][0]) == "string" &&
        movies[i][1].length == 1)){
        console.log("ERRO: O programa não pode iniciar porque o ficheiro movies não está bem formatado.")
        process.exit(1)
        }
    }
}


listaMovies()

module.exports = movies