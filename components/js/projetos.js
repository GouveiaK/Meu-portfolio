const key = '77316ed1eb5c3f653ba28424d93d81ba';
const base = 'https://api.themoviedb.org/3/';

async function Api(dados){
    const api = await fetch(`${base}${dados}`)
    .then(response => response.json())
        .then((data)=>{
            document.querySelector('#titulo0').innerHTML = data.results[0].original_title;
            document.querySelector('#capa0').src = `https://image.tmdb.org/t/p/original${data.results[0].poster_path}`;

            document.querySelector('#titulo1').innerHTML = data.results[1].title;
            document.querySelector('#capa1').src = `https://image.tmdb.org/t/p/original${data.results[1].poster_path}`;

            document.querySelector('#titulo2').innerHTML = data.results[2].original_title;
            document.querySelector('#capa2').src = `https://image.tmdb.org/t/p/original${data.results[2].poster_path}`;

            document.querySelector('#titulo3').innerHTML = data.results[3].original_title;
            document.querySelector('#capa3').src = `https://image.tmdb.org/t/p/original${data.results[3].poster_path}`;

            document.querySelector('#titulo4').innerHTML = data.results[4].original_title;
            document.querySelector('#capa4').src = `https://image.tmdb.org/t/p/original${data.results[4].poster_path}`;

            document.querySelector('#titulo5').innerHTML = data.results[5].original_title;
            document.querySelector('#capa5').src = `https://image.tmdb.org/t/p/original${data.results[5].poster_path}`;

            document.querySelector('#titulo6').innerHTML = data.results[6].original_name;
            document.querySelector('#capa6').src = `https://image.tmdb.org/t/p/original${data.results[6].poster_path}`;

            document.querySelector('#titulo7').innerHTML = data.results[7].original_title;
            document.querySelector('#capa7').src = `https://image.tmdb.org/t/p/original${data.results[7].poster_path}`;

            document.querySelector('#titulo8').innerHTML = data.results[8].original_name;
            document.querySelector('#capa8').src = `https://image.tmdb.org/t/p/original${data.results[8].poster_path}`;

            document.querySelector('#titulo9').innerHTML = data.results[9].original_title;
            document.querySelector('#capa9').src = `https://image.tmdb.org/t/p/original${data.results[9].poster_path}`;

            document.querySelector('#titulo10').innerHTML = data.results[10].original_title;
            document.querySelector('#capa10').src = `https://image.tmdb.org/t/p/original${data.results[10].poster_path}`;

            document.querySelector('#titulo11').innerHTML = data.results[11].original_title;
            document.querySelector('#capa11').src = `https://image.tmdb.org/t/p/original${data.results[11].poster_path}`;

            document.querySelector('#titulo12').innerHTML = data.results[12].original_title;
            document.querySelector('#capa12').src = `https://image.tmdb.org/t/p/original${data.results[12].poster_path}`;

            document.querySelector('#titulo13').innerHTML = data.results[13].original_name;
            document.querySelector('#capa13').src = `https://image.tmdb.org/t/p/original${data.results[13].poster_path}`;

            document.querySelector('#titulo14').innerHTML = data.results[14].original_name;
            document.querySelector('#capa14').src = `https://image.tmdb.org/t/p/original${data.results[14].poster_path}`;

            document.querySelector('#titulo15').innerHTML = data.results[15].original_name;
            document.querySelector('#capa15').src = `https://image.tmdb.org/t/p/original${data.results[15].poster_path}`;
            console.log(data.results)
        })
}
Api(`trending/all/day?api_key=${key}&language=pt-BR`);
