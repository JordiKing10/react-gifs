const apiKey = 'MlZXprVjMlMjZkXtb7BPuDUUCYtW8kQj'

export default function getSingleGif({id} = []){
    const apiUrl = `https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}`

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
        const {data = []} = response
        const { id, title, source } = data;
        const { url } = data.images.downsized_medium
        return { id, title, source, url };
        })
}