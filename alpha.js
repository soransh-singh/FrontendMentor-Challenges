/*
  1) load json file.
  2) loop data.
  3) made html template.
*/

async function loadChallenges(){
  const response = await fetch('./challenges.json')
  const challenges = await response.json()
  console.log(challenges);
}

window.addEventListener('load', () => {
  console.log('page is fully loaded');
  loadChallenges()
});
