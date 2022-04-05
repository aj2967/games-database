import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';

import { genres, platform, metacritic, pageSize, ordering } from './filters/Filters';
import FilterPanel from './filters/FilterPanel';
import Loading from '../../components/loading/Loading';
import './styles.scss'


const Home = () => {

    const [games, setGames] = useState()
    const [count, setCount] = useState(null)
    const [userInput, setUserInput] = useState('')
    const [totalPages, setTotalPages] = useState(1)
    
    const [searchParam, setSearchParam] = useState(null)
    const [pageSizeParam, setPageSizeParam] = useState(10)
    const [pageParam, setPageParam] = useState(1)
    const [genreParam, setgenreParam] = useState(null)
    const [platformParam, setPlatformParam] = useState(null)
    const [metacriticParam, setMetacriticParam] = useState(null)
    const [orderingParam, setOrderingParam] = useState(null)

    
    useEffect(() => {
        getGames();
    },
    [searchParam, genreParam, platformParam, metacriticParam, pageParam, pageSizeParam, orderingParam])

    useEffect(() => {
        setPageParam(1)
    }, [searchParam, pageSizeParam, genreParam, platformParam, metacriticParam, orderingParam])
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pageParam])

    const getGames = async () => {
        try {
            const res = await axios.get('https://api.rawg.io/api/games', {
                params: {
                    key: '8f8bdf81e9af4343b36cfea95f5cd267',
                    page_size: pageSizeParam,
                    page: pageParam,
                    search: searchParam,
                    genres: genreParam,
                    platforms: platformParam,
                    metacritic: metacriticParam,
                    ordering: orderingParam
                }
            })
            setGames(res?.data?.results)
            setCount(res?.data?.count)

            const findTotalPages = res?.data?.count / pageSizeParam;
            setTotalPages(Math.ceil(findTotalPages))
    
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleSearch = e => {
        e.preventDefault();
        setSearchParam(userInput);
    }

    // const handleFilterReset = () => {
    //     setPageSizeParam(10);
    //     setgenreParam(null);
    //     setPlatformParam(null);
    //     setMetacriticParam(null);
    // }

    const handlePageChange = (e, value) => {
        setPageParam(value)
    }
    
    return (
        <div>
            <div className='search'>
                <form className='search-form' onSubmit={handleSearch}>
                    <input onChange={e => setUserInput(e.target.value)} type="text" placeholder='Search for games'/>
                </form>
            </div>


            <div className='filters'>
                <FilterPanel
                    filterName={'Genre'}
                    options={genres}
                    selectedOption={selected => setgenreParam(selected)}
                />
                <FilterPanel
                    filterName={'Platform'}
                    options={platform}
                    selectedOption={selected => setPlatformParam(selected)}
                />
                <FilterPanel
                    filterName={'Metacritic'}
                    options={metacritic}
                    selectedOption={selected => setMetacriticParam(selected)}
                />
                <FilterPanel
                    filterName={'Games'}
                    options={pageSize}
                    selectedOption={selected => setPageSizeParam(selected)}
                />
                <FilterPanel
                    filterName={'Sort'}
                    options={ordering}
                    selectedOption={selected => setOrderingParam(selected)}
                />
            </div>


            <div className='count'>
                {count && <h2>{count} Games Found</h2>}
            </div>


            <div className='game-container'>
                {!games ? <Loading /> : (
                    games?.map(game => (
                        <li key={game?.id}>
                            <Link to={`/${game?.id}`} className='game'>
                                <img src={game?.background_image} alt={game?.name} />
                                <div>
                                    <h4>{game?.name}</h4>
                                </div>
                            </Link>
                        </li>
                    )))
                }
            </div>


            <div className='pagination'>
                {games && (
                    <Pagination 
                        page={pageParam}
                        onChange={handlePageChange}
                        count={totalPages}
                        color="primary" 
                    />
                )}
            </div>
        </div>
    )
}

export default Home