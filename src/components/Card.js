export default function Card({code, image, name, score}){
  return `
  <h2>${name}</h2>
  <div class="card">
    ${image ? 
      `<img src="${image}" alt="Card: ${code}">` :
      '<div aria-roledescription="placeHolder" class="bg-gray-500 rounded-lg w-[226px] h-[314px] border-2 border-black rounded"></div>'
    }
  </div>
  <p>Score: ${score}</p>
  `
}