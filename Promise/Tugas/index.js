// const url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from=2022-02-11&' +
//           'sortBy=popularity&' +
//           'apiKey=65336a6330fc48f2adcda0ede1a697e9';

// const req = new Request(url);

// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//     })

$('.search-button').on('click', function() {
const Url = "https://newsapi.org/v2/everything?" +
          "q=."+
          $(".searchbar").val() +
          ".&" +
          "from=2022-02-11&" +
          "sortBy=popularity&" +
          "apiKey=65336a6330fc48f2adcda0ede1a697e9";
axios.get(Url)
.then(data=>{
    // Mendapatkan data object articles
    const news = data.data.articles;
    let cards ='';
    news.forEach(n => {
        cards += `<div class="col-md-4 my-5">
                    <div class="card">
                        <img src="${n.urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${n.title}</h5>
                        <h6 class="card-title card-subtitle mb-2 text-muted">${n.author}, ${n.publishedAt}</h6>
                        <p class="card-text">${n.description}</p>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#newsDetailModal" data-newsid="${n.source.id}">Show Details</a>
                    </div>
                </div>
            </div>`;
    });
    $('.news-container').html(cards);
})
.catch(err=>console.log(err))
})




