export default function Card({code, image}){
  return `
  <div class="card">
    <img src="${image}" alt="Card: ${code}">
  </div>`
}