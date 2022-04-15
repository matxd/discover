/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const livrosPorCategoria = [
    {
        categoria: "Riqueza",
        livros: [
            {
                titulo: "Os segredos da mente milionária",
                autor: "T. Harv Eker",
            },
            {
                titulo: "O homem mais rico da Babilônia",
                autor: "George S. Clason",
            },
            {
                titulo: "Pai rico, pai pobre",
                autor: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ]
    },
    {
        categoria: "Inteligência Emocional",
        livros: [
            {
                titulo: "Você é Insubstituível",
                autor: "Augusto Cury",
            },
            {
                titulo: "Ansiedade - Como enfrentar o mal do século",
                autor: "Augusto Cury",
            },
            {
                titulo: "Os 7 hábitos das pessoas altamente eficazes",
                autor: "Stephen R. Covey",
            },
        ]
    }
]

const totalCategorias = livrosPorCategoria.length

for(let categoria of livrosPorCategoria){
    console.log(`Total de livros por categoria ${categoria.categoria} - ${categoria.livros.length}`)
}

function autores(){
    let autores = []

    for(let categoria of livrosPorCategoria){
        for(let livro of categoria.livros){
            if(autores.indexOf(livro.autor) == -1){
                autores.push(livro.autor)
            }
        }
    }
    console.log(`Total de autores é: ${autores.length}`)
}
autores()

function livrosPorAutor(autor){
    let livros = []

    for(let categoria of livrosPorCategoria){
        for(let livro of categoria.livros){
            if(livro.autor === autor){
                livros.push(livro.titulo)
            }
        }
    }
    console.log(`Autor: ${autor} / Livros: ${livros.join(", ")}`)
}
livrosPorAutor("Stephen R. Covey")