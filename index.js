/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function freelanceObj() {
    const name = NAMES[Math.floor(Math.random() * OCCUPATIONS.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const pricerange = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
  
    
  return {name, occupation, pricerange}

  }

const freelancers = Array.from({ length: NUM_FREELANCERS }, freelanceObj);

function getAverageRate(freelancers) {
  if (freelancers.length === 0) return 0;
  const totalRate = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
  return totalRate / freelancers.length;
}

const freelancersArray = freelanceObj();

function FreelancerCard(freelancer) {
  const $figure = document.createElement('figure');
  $figure.classList.add("freelancer");
  $figure.innerHTML= `
  <blockquote>${freelancer.occupation}</blockquote>
  <price>${freelancer.pricerange}</price>
  <figcaption>${freelancer.name}</figcaption>
  `;
  
  return $figure;
}

function FreelancerCards() {
   const $container = document.createElement("article");
   $container.classList.add("freelancers");
   

    const $cards = freelancers.map(FreelancerCard);
    $container.replaceChildren(...$cards);

return $container;
}


function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Available Freelancers</h1>
    <FreelancerCards></FreelancerCards>
  `;
  $app.querySelector("FreelancerCards").replaceWith(FreelancerCards(freelancers));
}
render();
