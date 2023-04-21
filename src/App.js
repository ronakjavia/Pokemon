import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import SearchIcon from './search.svg'
import './App.css'

const App = () => {
  const [allPokemon, setAllPokemon] = useState([])
  const [loadMore, setLoadMore] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20',
  )
  const [search, setSearch] = useState('')

  const getAllPokemon = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)

    const createPokemonObj = (result) => {
      result.map(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`,
        )

        const data = await res.json()

        setAllPokemon((currentList) => [...currentList, data])
      })
    }

    createPokemonObj(data.results)
  }

  useEffect(() => {
    getAllPokemon()
  }, [])

  return (
    <>
      <div className="app-container">
        <h1>Pokemon App</h1>

        <div className="pokemon-container">
          <div className="all-container">
            {allPokemon.map((pokemon, li) => (
              <Card
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                height={pokemon.height}
                weight={pokemon.weight}
                base_exp={pokemon.base_experience}
                key={li}
              />
            ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemon()}>
            Load More
          </button>
        </div>
      </div>
    </>
  )
}

export default App
