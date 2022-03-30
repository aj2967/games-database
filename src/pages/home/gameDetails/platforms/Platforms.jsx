

const Platforms = ({ platforms }) => {
  return (
    <div>
        <h4>Platforms:</h4>
        {platforms?.map(platform => (
            <p key={platform?.platform?.id}>
                {platform?.platform?.name}
            </p>
        ))}
    </div>
  )
}

export default Platforms