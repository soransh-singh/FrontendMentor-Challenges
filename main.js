/*
  1) load json file.
  2) loop data.
  3) made html template.
*/

const CHALLENGES = "https://raw.githubusercontent.com/soransh-singh/FrontendMentor-Challenges/main/challenges.json"

async function loadChallenges(){
  const response = await fetch(CHALLENGES)
  const challenges = await response.json()
  return challenges
}

window.addEventListener('load', async () => {
  const main = document.querySelector("main")
  const challenges = await loadChallenges()
  const card = challenges.map((challenge) => {
    return `
    <div class="project">
      <img src="${challenge.img}" alt="" class="project__image">
      <h3 class="project__name">${challenge.name}</h3>
      <p class="project__description">
        ${challenge.description}
      </p>
      <div class="project__link">
        <a href="${challenge.link.live}" class="project__live-site">live preview</a>
        <a href="${challenge.link.code}" class="project__code">code</a>
      </div>
    </div>
    `
  })
  for (var i = 0; i < card.length; i++) {
    main.innerHTML += card[i];
  }

});
