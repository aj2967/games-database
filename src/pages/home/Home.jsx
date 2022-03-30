import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Search from '../../components/search/Search'
import './styles.scss'

const Home = () => {

    const [games, setGames] = useState()

    useEffect(() => {
        getGames();
    }, [])

    const getGames = async () => {
        try {
            const res = await axios.get('https://api.rawg.io/api/games', {
                params: {
                    key: '8f8bdf81e9af4343b36cfea95f5cd267',
                    page_size: 2,
                    // ordering: 'released'
                }
            })
            // console.log(res);
            // console.log(res.data.results)
            setGames(res.data.results)
    
        }
        catch (error) {
            console.log(error);
        }
    }
    

  return (
    <div>
        <Search />
        <div className='game-container'>
            {games && games.map(game => (
                <li key={game?.id}>
                    <Link to={`/${game?.id}`} className='game'>
                        <img src={game?.background_image} alt={game?.name} />
                        <div>
                            <h4>{game?.name}</h4>
                        </div>
                    </Link>
                </li>
            ))}
        </div>
    </div>
  )
}

export default Home