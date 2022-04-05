import './styles.scss'

const AdditionalInfo = ({ data }) => {
  return (
    <div className='additional-info'>
        <h2>Additional Info</h2>
        <div>
            <div>
                <b>Release Date</b>
                <p>{data?.released}</p>
            </div>
            <div>
                <b>Playtime</b>
                <p>{data?.playtime} Hours</p>
            </div>
            <div>
                <b>Genre</b>
                {data?.genres?.map((genre, i) => (
                    <p key={i}>{genre?.name}</p>
                ))}
            </div>
            <div>
                <b>Publisher</b>
                <p>{data?.publishers[0]?.name}</p>
            </div>
            <div className='developers'>
                <b>Developer</b>
                {data?.developers?.map((developer, i) => (
                    <p key={i}>{developer?.name}</p>
                ))}
            </div>
        </div>
    </div>
  )
}

export default AdditionalInfo