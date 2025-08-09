// first  version .. one artcle, title,descrption.author,read more(url link).

// document.getElementById("searchBtn").addEventListener("click", function () {
//     const word = document.getElementById("searchInput").value.trim();
//     if (!word) {
//         alert("Please fill the search bar");
//         return;
//     }

//     const apiKey = "7f48cb5d4659472db85d738d33c9e63d";
//     const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(word)}&sortBy=popularity&apiKey=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             console.log("API Response:", data); // Debug log

//             if (!data.articles || data.articles.length === 0) {
//                 document.getElementById("news-card").innerHTML = `<span style="color:red;">No results found</span>`;
//                 return;
//             }

//             // ✅ First article only
//             const firstArticle = data.articles[0];
//             const title = firstArticle.title || "No title available";
//             const descp = firstArticle.description || "No description available";
//             const athr = firstArticle.author || "Unknown";

//             document.getElementById("news-card").innerHTML = `
//                 <h3>${title}</h3>
//                 <p><b>Description:</b> ${descp}</p>
//                 <p><b>Author:</b> ${athr}</p>
//                 <a href="${firstArticle.url}" target="_blank">Read more</a>
//             `;
//         })
//         .catch(error => {
//             document.getElementById("result").innerHTML = `<span style="color:red;">${error.message}</span>`;
//         });
// });


//second version .. not seperate headings and title as url link.
document.getElementById("searchBtn").addEventListener("click", function () {
    const word = document.getElementById("searchInput").value.trim();
    if (!word) {
        alert("Please fill the search bar");
        return;
    }

    const apiKey = "7f48cb5d4659472db85d738d33c9e63d";
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(word)}&sortBy=popularity&pageSize=10&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("API Response:", data);

            if (!data.articles || data.articles.length === 0) {
                document.getElementById("news-card").innerHTML = `<p style="color:red;">No results found</p>`;
                return;
            }

            let html = "";
            data.articles.forEach(article => {
                html += `
                    <article class="news-card">
                        ${article.urlToImage ? `<img src="${article.urlToImage}" alt="News image" class="news-image">` : ""}
                        <h2><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h2>
                        <p>${article.description || ""}</p>
                        <small>${article.author ? `By ${article.author}` : ""}</small>
                    </article>
                `;
            });

            document.getElementById("news-card").innerHTML = html;
        })
        .catch(error => {
            document.getElementById("news-card").innerHTML = `<p style="color:red;">${error.message}</p>`;
        });
});


