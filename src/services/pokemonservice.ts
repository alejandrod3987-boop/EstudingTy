import {
  fetchPokemonDetail,
  fetchPokemonSpecies,

} from '../api/pokemonApi'
import type { PokemonListItem } from '../api/pokemonApi'

export interface Pokemon {
  name: string
  image: string
  description: string
}

interface Language {
  name: string
}

interface FlavorEntry {
  flavor_text: string
  language: Language
}

export const buildPokemon = async (
  { name }: PokemonListItem
): Promise<Pokemon> => {

  const detail = await fetchPokemonDetail(name)
  const species = await fetchPokemonSpecies(name)

  const {
    sprites: {
      other: {
        "official-artwork": { front_default }
      }
    }
  } = detail

  const { flavor_text_entries }: { flavor_text_entries: FlavorEntry[] } = species

  const entry = flavor_text_entries.find(
    ({ language }) => language.name === 'es'
  )

  const description = entry
    ? entry.flavor_text.replace(/\f/g, ' ')
    : 'Sin descripción disponible'

  return {
    name,
    image: front_default,
    description
  }
}