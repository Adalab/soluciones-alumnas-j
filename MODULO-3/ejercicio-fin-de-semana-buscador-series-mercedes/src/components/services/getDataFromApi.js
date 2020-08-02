const getDataFromApi = () => {
  return fetch('http://api.tvmaze.com/search/shows?q=girls') //girls={input.value}
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.map((dataShow) => {
        // console.log(dataShow.show);

        return {
          id: dataShow.show.id,
          image: dataShow.show.image,
          name: dataShow.show.name,
          score: dataShow.score,
          status: dataShow.show.status,
        };
      });
    });
};
export default getDataFromApi;
