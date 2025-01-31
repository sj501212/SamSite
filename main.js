const artworks = [
    {
        title: "Apollo 9: Spacewalk",
        slug: "apollo-9-spacewalk",
        description: "The early Apollo missions that did not orbit or land on the moon are lesser known. Apollo 9 was flown to qualify the lunar module in low earth orbit, testing ascent and descent propulsion systems by astronauts. Furthermore the crew performed the first two-person spacewalk after the Soviets performed a similar feat 2 months prior. This is my gouache painting of this spacewalk directly from a NASA photograph. I enjoyed emphasising the chromatic gradient on the metal with nice green and purple hues.",
        image: "/images/art/large/Apollo_9_EVA.png"
    },
    {
        title: "Apollo 11: Eagle Lander",
        slug: "apollo-11-eagle-lander",
        description: "Apollo 11's lander was named the \"Eagle\" - and this is direct painting of a photograph of Neil Armstrong standing in front. The moon presents unique lighting: due to no atmosphere the light acts brightly and uniformly from a point source. This luminsosity was captured by keeping the astronaut quite dark whilst liberally adding white edge lighting, combined with white pencil for glare. It was exciting to interpret the bright golds and deep blood reds of the foil. I began with coloured fineliner outline, then filled in with gouache paint.",
        image: "/images/art/large/Eagle Lander.png"
    },
    {
        title: "Apple Tree",
        slug: "apple-tree",
        description: "This apple tree is drawn entirely from imagination, with oversized leaves and unusually bright apples. The yellow background is helpful to bind the dull browns of the trunk with the strong red of the fruit. It was painted using gouache paint with coloured pencil to add shine and variety to the apples themselves.",
        image: "/images/art/large/AppleTree.png"
    }
];

function getArtPage(art) {
    return `<div class = "artpage">
        <section>
        <h1>${art.title}</h1>
        <p>${art.description}</p>
        <img class="artScale" src="${art.image}"></img>
        </section>
    </div>`;
}

function getImage(art) {
    return `${art.image}`;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${artworks.length} results)</h1>
  ${artworks.map(getArtPage).join("")}
  <p class="footer">These ${artworks.length} pets were added recently. Check back soon for updates.</p>
`;
