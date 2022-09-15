export default function Card({code, image, name, score}){
  return `
  <h2>${name}</h2>
  <div class="card">
    <img src="${image}" alt="Card: ${code}">
  </div>
  <p>Score: ${score}</p>
  `
}