const BASE_URL = 'https://pokeapi.co/api/v2'

export interface PokemonListItem {
  name: string
  url: string
}

export const fetchPokemonList = async (
  limit: number = 20
): Promise<PokemonListItem[]> => {

  const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}`)
  const data = await response.json()

  const { results } = data
  return results
}

export const fetchPokemonDetail = async (name: string) => {
  const response = await fetch(`${BASE_URL}/pokemon/${name}`)
  return await response.json()
}

export const fetchPokemonSpecies = async (name: string) => {
  const response = await fetch(`${BASE_URL}/pokemon-species/${name}`)
  return await response.json()
}