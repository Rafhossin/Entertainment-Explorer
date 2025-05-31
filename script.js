document.getElementById("searchBtn").addEventListener("click", () => {
  const query = document.getElementById("search").value;
  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      const results = document.getElementById("results");
      results.innerHTML = "";

      data.forEach((entry) => {
        const show = entry.show;
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${show.name}</h3>
          <img src="${show.image?.medium}" alt="${show.name}" />
          <p>${show.summary || "No summary available"}</p>  
          <p><strong>Rating:</strong> ${show.rating?.average || "N/A"}</p>
        `;
        results.appendChild(div);
      });
    });
});
