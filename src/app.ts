import { renderPokemon } from './ui/render'

export async function initApp() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  const data = await response.json()

  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url)
      return await res.json()
    })
  )

  renderPokemon(detailedPokemons)
}