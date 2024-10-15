const apiKey = 'IYEYHpOKSI1jZzvpcaKvYnGfiMHPzhWy'


export default function getGifs ({keyword = 'azul'} = {}) {
  
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data = []} = response
        if (Array.isArray(data)) {
            const gifs = data.map(image => {
              const {title, id, images} = image
              const { url } = images.original
              return { title, id, url }
            })
              
          return gifs
        }
      })
}