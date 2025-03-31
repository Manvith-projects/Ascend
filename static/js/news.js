const API_KEY = "9b16488faemshdb49c9697afe3f8p103335jsnc45ce4987f87";
const API_URL = "https://google-news22.p.rapidapi.com/v1/search?q=euro&country=us&language=en";

document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    async function fetchNews() {
        try {
            const response = await fetch(API_URL, {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key": API_KEY,
                    "X-RapidAPI-Host": "google-news22.p.rapidapi.com"
                }
            });

            const newsData = await response.json();
            
            if (!newsData || !newsData.data || newsData.data.length === 0) {
                newsContainer.innerHTML = "<p>No news found</p>";
                return;
            }

            renderNews(newsData.data);
        } catch (error) {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>Failed to load news. Please try again later.</p>";
        }
    }

    function renderNews(articles) {
        newsContainer.innerHTML = ""; // Clear previous content

        articles.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            newsItem.innerHTML = `
                <img src="${article.thumbnail || 'https://via.placeholder.com/300'}" alt="${article.title}">
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description || "No description available."}</p>
                <small>Source: ${article.source.name}</small><br>
                <small>Published: ${new Date(article.date).toLocaleString()}</small>
            `;

            newsContainer.appendChild(newsItem);
        });
    }

    fetchNews();
});
