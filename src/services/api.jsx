import axios from "axios";

let api = axios.create({
    headers: {
        'Client-ID': 'ehkwa0x7klfqiqilo438zyi2si673w'
    }
})

// const getGames = async () => {
//         try {
//             const res = await axios.post('https://id.twitch.tv/oauth2/token?client_id=ehkwa0x7klfqiqilo438zyi2si673w&client_secret=ui2oljn91rr8cktjby5aw9zqhcin1n&grant_type=client_credentials')
//             console.log(res.data.access_token);
    
//             const getGamesList = async token => {
//                 try {
//                     const res = await axios.get(`${corsProxy}https://api.igdb.com/v4/games`, {
//                         headers: {
//                             'Accept': 'application/json',
//                             'Client-ID': 'ehkwa0x7klfqiqilo438zyi2si673w',
//                             'Authorization': `Bearer ${token}`
//                         },
//                         data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
//                     })
//                     console.log(res);
//                 }
//                 catch (error) {
//                     console.log(error);
//                 }
//             }
//             getGamesList(res.data.access_token);
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }

export default api;