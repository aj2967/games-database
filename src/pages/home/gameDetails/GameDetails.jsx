import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios'
import styled from 'styled-components';

import './styles.scss'
import { getByPlaceholderText } from '@testing-library/react';


const GameDetails = () => {

    const { id } = useParams();
    const [game, setGame] = useState()

    useEffect(() => {
        // getGame();
    }, [])

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

    const GameContainer = styled.div`
        background: radial-gradient(circle, rgba(0,0,0,0.33879950495049505) 0%, rgba(0,0,0,1) 100%), url(${game?.background_image_additional});
        min-height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

    `

    return (
        <div className='game-details'>
            <GameContainer>
                <div className='game-sidebar'>
                    <div className='game-cover-container'>
                        <img src="" alt="" />
                    </div>
                    <div className='stats'>
                            {/* ersb rating */}
                            {/* platforms array */}
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
                    <div className="game-title">
                        <div>
                            {/* pagination */}
                            {/* title */}
                            {/* tags array */}
                        </div>
                        <div className='game-rank'>
                            <div>
                                {/* left side div */}
                                {/* achievments count */}
                                {/* rawg data: added by status */}
                                {/* rating */}
                                {/* rating top */}
                                {/* rating array */}
                                {/* ratings count */}

                            </div>
                            <div>
                                {/* right side div */}
                                <CircularProgressbar value={game?.metacritic} text={`${game?.metacritic}%`} />
                            </div>

                        </div>
                    </div>
                    <div className="game-description">
                        {/* description */}
                    </div>
                </div>

            </GameContainer>

            {/* Gallery screenshots */}

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