import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios'
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai'

import './styles.scss'
import ESRB from './esrb/ESRB';
import Platforms from './platforms/Platforms';
import Gallery from './gallery/Gallery';
import AdditionalInfo from './additionalInfo/AdditionalInfo';
import GameSeries from './game-series/GameSeries';


const GameDetails = () => {

    const { id } = useParams();
    const [game, setGame] = useState()

    useEffect(() => {
        getGame();
    }, [id])

    const getGame = async () => {
        try {
            const res = await axios.get(`https://api.rawg.io/api/games/${id}`, {
                params: {
                    key: '8f8bdf81e9af4343b36cfea95f5cd267',
                }
            })
            console.log(res?.data);
            // console.log(res?.data?.results)
            setGame(res?.data)
    
        }
        catch (error) {
            console.log(error);
        }
    }

    const gameDescription = () => {
        return {__html: game?.description};
    }

    const GameContainer = styled.div`
        background: linear-gradient(0deg, rgba(40,41,47,1) 10%, rgba(40,41,47,0.7) 100%), url(${game?.background_image_additional});
        min-height: 100vh;
        max-height: 100vh;
        height: 100%;
        min-width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -100;
    `

    return (
        <div className='game-details'>
            <GameContainer>
                <div className="container flex">
                    <div className='game-sidebar'>
                        <div className='game-cover-container'>
                            <img src={game?.background_image} alt="" />
                        </div>
                        <div className='game-link'>
                            <a href={game?.website} target='_blank'>
                                Play
                            </a>
                        </div>
                        <div className='esrb-rating'>
                            <div>
                                <ESRB rating={game?.esrb_rating} />
                            </div>
                        </div>
                        <div>
                            <Platforms platforms={game?.platforms} />
                        </div>
                        <div className='tags'>
                            <h4>Tags</h4>
                            {/* tags array */}
                            {game?.tags.map(tag => (
                                <button key={tag.id}>{tag.name}</button>
                            ))}
                        </div>
                        <div className='stats'>
                                {/* playtime */}
                                {/* release date */}
                        </div>
                        <div>
                            {/* puchase links */}
                                {/* website */}
                                {/* stores array */}
                        </div>

                    </div>
                    <div className="game-detail">
                        <div className="game-overview">
                
                            <div className='game-title'>
                                {/* pagination */}
                                <small>
                                    <Link to='/'>Home</Link>
                                    &gt;
                                    <i>{game?.name}</i>
                                </small>
                                {/* title */}
                                <h1>{game?.name}</h1>
                            </div>
                    
                            <div className='game-rank'>
                                <div className='game-rank-left'>
                                    {/* achievments count */}
                                    {/* <div>
                                        <AiOutlineStar color='white' />

                                    </div> */}
                                    {/* <div>
                                        <table>
                                            <tr>
                                                <td>Beaten</td>
                                                <td>Dropped</td>
                                                <td>Owned</td>
                                                <td>Playing</td>
                                                <td>To Play</td>
                                            </tr>
                                            <tr>
                                                <td>{game?.added_by_status?.beaten}</td>
                                                <td>{game?.added_by_status?.dropped}</td>
                                                <td>{game?.added_by_status?.owned}</td>
                                                <td>{game?.added_by_status?.playing}</td>
                                                <td>{game?.added_by_status?.toplay}</td>
                                            </tr>
                                        </table>
                                    </div> */}
                                    <div className='user-ratings'>
                                        {game?.ratings?.map(rating => (
                                            <div>
                                                <b>{rating?.title}</b>
                                                <p>{rating?.percent}%</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div>

                                    </div>

                                </div>
                
                                <div className='game-rank-right'>
                                    <CircularProgressbar 
                                        value={game?.metacritic === undefined || null ? 0 : game?.metacritic} 
                                        text={game?.metacritic === undefined || null ? `N/A` : `${game?.metacritic}%`} 
                                    />
                                </div>
                            </div>
                        </div>
                    
                        <div className="game-description">
                            <h2>About {game?.name}</h2>
                            <div dangerouslySetInnerHTML={gameDescription()} />
                        </div>
                        
                        <div>
                            <AdditionalInfo data={game} />
                        </div>

                        <div>
                            <Gallery id={game?.id} />
                        </div>

                        <div className='game-series-component'>
                            <GameSeries id={game?.id} />
                        </div>




                    </div>
                </div>
            </GameContainer>



                {/* dlc/etc */}
                
                {/* additional info */}
                
                {/* Gallery screenshots */}

                {/* publisher section */}
                    {/* publisher */}
                    {/* creaters count */}
                    {/* developers array */}
                    {/* genres array */}
                    {/*  */}
                    {/*  */}

                {/* Game suggestions */}

                {/* reviews */}
        </div>
    )
}

export default GameDetails