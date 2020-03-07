// Criando a função
pokemon = () => {

    // Instanciando o objeto
    var xhttp = new XMLHttpRequest()

    // Pegando o valor digitado pelo usuário
    var pokemon = document.getElementById('buscar').value

    if (pokemon == '') {

        // Caso fique em branco acontece isso
        document.getElementById('img').setAttribute('src', './src/assets/img/pokemon.png')
        document.getElementById('nome').innerText = 'Digite o nome ou número do pokémon desejado'

        document.getElementById('hpTexto').innerText = ''
        document.getElementById('attackTexto').innerText = ''
        document.getElementById('typeTexto').innerText = ''
        document.getElementById('specialAttackTexto').innerText = ''

    } else {

        // jogando os textos da tabela 
        document.getElementById('hpTexto').innerText = 'Hp'
        document.getElementById('attackTexto').innerText = 'Attack'
        document.getElementById('typeTexto').innerText = 'Type'
        document.getElementById('specialAttackTexto').innerText = 'Special Attack'

        // Fazendo a requisição
        var urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        xhttp.open('get', urlPokemon, false)
        xhttp.send()

        // colocando todos os dados dentro de uma variável
        let resultado = JSON.parse(xhttp.responseText)

        // Filtrando dados da API 
        let idPokemon = resultado['id']
        let namePokemon = resultado['name']
        let healthPokemon = resultado['stats'][5]['base_stat']
        let attackPokemon = resultado['stats'][4]['base_stat']
        let typePokemon = resultado['types'][0]['type']['name']
        let movePokemon = resultado['moves'][0]['move']['name']

        // Jogando para o HTML
        document.getElementById('img').setAttribute('src', `https://pokeres.bastionbot.org/images/pokemon/${idPokemon}.png`)
        document.getElementById('nome').innerText = namePokemon
        document.getElementById('hp').innerText = healthPokemon
        document.getElementById('attack').innerText = attackPokemon
        document.getElementById('type').innerText = typePokemon
        document.getElementById('specialAttack').innerText = movePokemon


    }

}