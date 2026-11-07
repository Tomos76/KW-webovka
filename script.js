const searchInput = document.querySelector("#album-search");
const albums = document.querySelectorAll(".album");
const status = document.querySelector("#search-status");

if (searchInput) {
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        let visible = 0;

        albums.forEach(album => {
            const matches = album.textContent
                .toLowerCase()
                .includes(query);

            album.hidden = !matches;

            if (matches) {
                visible++;
            }
        });

        status.textContent =
            `Zobrazeno ${visible} z ${albums.length} alb.`;
    });
}