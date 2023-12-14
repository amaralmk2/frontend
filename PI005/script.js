document.addEventListener('DOMContentLoaded', function () {
    
    function buscarNoticias() {
       
        const noticiasUrl = 'https://api.nasa.gov/planetary/apod?api_key=4rC9srLdyvpwPMETMQfOQwxOcaa7fDzzbCJxh2rm';
        fetch(noticiasUrl)
            .then(response => response.json())
            .then(data => {
                const noticiasList = document.querySelector('#secaoNoticias ul');
                
                noticiasList.innerHTML = '';
                const li = document.createElement('li');
                li.innerHTML = `
                    <h3>${data.title}</h3>
                    <img src="${data.url}" alt="${data.title}">
                    <p>${data.explanation}</p>
                `;
                noticiasList.appendChild(li);
            })
            .catch(error => console.error('Erro ao buscar notícias:', error));
    }

    
    function buscarInformacoesPaises() {
        const paisesUrl = 'https://restcountries.com/v3.1/all';
        fetch(paisesUrl)
            .then(response => response.json())
            .then(data => {
                console.log('Informações de Países:', data);
            })
            .catch(error => console.error('Erro ao buscar informações de países:', error));
    }


    function buscarPiadaAleatoria() {
        
        const piadaUrl = 'https://v2.jokeapi.dev/joke/Any';
        fetch(piadaUrl)
            .then(response => response.json())
            .then(data => {
                const resultadosList = document.querySelector('#secaoResultados ul');
                resultadosList.innerHTML = '';
                const li = document.createElement('li');
                if (data.type === 'twopart') {
                    li.innerHTML = `
                        <h3>${data.setup}</h3>
                        <p>${data.delivery}</p>
                    `;
                } else {
                    li.innerHTML = `
                        <p>${data.joke}</p>
                    `;
                }
                resultadosList.appendChild(li);
            })
            .catch(error => console.error('Erro ao buscar piada aleatória:', error));
    }

    buscarNoticias();
    buscarInformacoesPaises();
    buscarPiadaAleatoria();
});
