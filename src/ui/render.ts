export function renderPokemon(pokemons: any[]) {
  const app = document.getElementById('app') as HTMLDivElement

  if (!app) throw new Error("No se encontró #app")

  app.innerHTML = ""

  pokemons.forEach(pokemon => {
    const card = document.createElement('div')
    card.classList.add('card')

    card.innerHTML = `
      <h2>${pokemon.name.toUpperCase()}</h2>
      <img src="${pokemon.sprites.front_default}" />
    `

    app.appendChild(card)
  })
}