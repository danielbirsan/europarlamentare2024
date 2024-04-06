articles =
    [
        {
            title: "Rezultate anterioare",
            content: "Rezultatele anterioare ale alegerilor europarlamentare din 2014 si 2019 sunt disponibile aici.",
            img: "assets/history.png",
            href: "results.html"
        },
        {
            title: "Sondaje 2024",
            content: "Afla care sunt sondajele de opinie pentru alegerile europarlamentare din 2024.",
            img: "assets/stats.png",
            href: "table.html"
        },
        {
            title: "Article 3",
            content: "This is the content of article 3",
            img: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
            href: "https://www.google.com"
        }
    ]


function renderArticles() {
    let articlesWrapper = document.querySelector('.articleswrapper');
    articles.forEach(article => {
        let articleDiv = document.createElement('div');
        articleDiv.innerHTML = `
         <a href="${article.href}">
                <div class="art">
                    <div class="imagewithtext">
                        <img src="${article.img}">
                        <h3>${article.title}</h3>
                    </div>
                    <p>${article.content}</p>

                </div>
            </a>`;
        articlesWrapper.appendChild(articleDiv);
    });
}

renderArticles();

