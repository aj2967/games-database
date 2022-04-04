import CircularProgress from '@mui/material/CircularProgress';

import './styles.scss'

const Loading = () => {
  return (
    <div className='loading'>
        <CircularProgress color='primary' />
    </div>
  )
}

export default Loading