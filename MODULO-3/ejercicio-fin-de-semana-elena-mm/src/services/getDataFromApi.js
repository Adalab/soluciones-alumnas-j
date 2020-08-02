const placeholderImage = 'https://www.onekind.scot/wp-content/uploads/Fox-fox-controlling-wpcf_805x805.jpg'

const getDataFromApi = (query) => {
    return fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then((response) => response.json())
      .then((data) => {
        // sólo quiero la propiedad "show" (no score)
        return data.map((show) => {
          return {
            id: show.show.id,
            image: show.show.image ? show.show.image.medium : placeholderImage, // if no image -> placeholder
            name: show.show.name,
            score: show.show.rating.average ? show.show.rating.average : 'no rating', //rating.average, no "score"
            status: show.show.status,
          };
        });
      });
  };
  export default getDataFromApi;