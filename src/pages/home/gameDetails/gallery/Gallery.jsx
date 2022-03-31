import { useState, useEffect } from 'react'
import axios from 'axios'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight} from 'react-icons/fa';

import './styles.scss';
import { buildStyles } from 'react-circular-progressbar';

const Gallery = ({ id }) => {
    const [gallery, setGallery] = useState();
    const [current, setCurrent] = useState(0);
    const length = gallery?.length;

    useEffect(() => {
        getGallery();
    }, [])

    const getGallery = async () => {
        try {
            const res = await axios.get(`https://api.rawg.io/api/games/${id}/screenshots`, {
                params: {
                    key: '8f8bdf81e9af4343b36cfea95f5cd267',
                    page_size: 1
                }
            })
            console.log(res);
            // console.log(res?.data?.results)
            setGallery(res?.data?.results)
    
        }
        catch (error) {
            console.log(error);
        }
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    if (!Array.isArray(gallery) || gallery.length <= 0) {
        return null;
    }

  return (
    <div className='gallery'>
        <h2>Gameplay Screenshots</h2>
        <div className='slider'>
            <FaArrowAltCircleLeft className='arrow-left' onClick={prevSlide} />
            <FaArrowAltCircleRight className='arrow-right' onClick={nextSlide} />
            {gallery?.map((img, i) => (
                <div className={i === current ? 'slide active': 'slide'} key={i}>
                    {i === current && (
                        <img src={img?.image} alt="Screenshots" />
                    )}                
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Gallery