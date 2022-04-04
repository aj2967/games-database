import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import Carousel, { CarouselItem } from '../../../../components/carousel/Carousel';
import missingImg from '../../../../assets/images/missingImg.jpg'
import './styles.scss'

const GameSeries = ({ id }) => {
    
    let navigate = useNavigate();

    const [series, setSeries] = useState()

    useEffect(() => {
        getSeries();
        if (series?.length === 0) {
            return null;
        }
    }, [id])

    const getSeries = async () => {
        try {
            const res = await axios.get(`https://api.rawg.io/api/games/${id}/additions`, {
                params: {
                    key: '8f8bdf81e9af4343b36cfea95f5cd267',
                    // page_size: 1,
                    // page: 1
                }
            })
            console.log(res?.data?.results);
            setSeries(res?.data?.results)
    
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className={series?.length > 0 ? 'game-series' : 'hide'}>
            <h2>More From The Series</h2>
            <div className='series-carousel'>
                <Carousel>
                    {series?.map((additions, i) => (
                        <CarouselItem key={i}>
                            <div className='game' onClick={() => navigate(`/games/${additions?.id}`)}>
                                {<img src={additions?.background_image || missingImg} alt="" />}
                                {/* <h4>{additions?.name}</h4> */}
                            </div>
                            {/* <NavLink to={`/${additions?.id}`}>
                            </NavLink> */}
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>
                
        </div>
    )
}

export default GameSeries