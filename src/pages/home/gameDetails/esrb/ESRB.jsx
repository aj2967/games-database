import everyone from '../../../../assets/icons/ersbE.svg'
import tenPlus from '../../../../assets/icons/ersb10.svg'
import teen from '../../../../assets/icons/ersbT.svg'
import mature from '../../../../assets/icons/ersbM.svg'
import adults from '../../../../assets/icons/ersbA.svg'
import ratingPending from '../../../../assets/icons/ersbRP.svg'
import './styles.scss'

const ESRB = ({ rating }) => {

    let gameRating;

    switch (rating?.slug) {
        case 'everyone':
            gameRating = everyone;
            break;
        case 'everyone-10-plus':
            gameRating = tenPlus;
            break;
        case 'teen':
            gameRating = teen;
            break;
        case 'mature':
            gameRating = mature;
            break;
        case 'adults-only':
            gameRating = adults;
            break;
        case 'rating-pending':
            gameRating = ratingPending;
            break;
    }

  return (
      <div className='esrb'>
        <h4>ESRB Rating: {rating?.name}</h4>
        <img src={gameRating} alt="" />
    </div>
  )
}

export default ESRB