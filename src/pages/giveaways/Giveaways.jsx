import { useState, useEffect } from 'react';
import axios from 'axios';

const Giveaways = () => {
    const [list, setList] = useState();

    useEffect(() => {
        getGames();
    }, [])

    const getGames = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos/", {
                // method: 'POST',
                // headers: {
                    // 'Accept': 'application/json',
                    // 'Client-ID': 'Client ID',
                    // 'Authorization': 'Bearer access_token',
                // },
            });
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>Giveaways</div>
    )
}

export default Giveaways