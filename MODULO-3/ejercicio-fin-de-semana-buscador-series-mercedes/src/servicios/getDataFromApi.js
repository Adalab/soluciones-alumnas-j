const getDataFromApi = () => {
  return fetch('https://randomuser.me/api/?results=10')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      return data.results.map((user) => {
        // console.log(user);
        return {
          id: user.login.uuid,
          username: user.login.username,
          city: user.location.city,
          name: user.name.first + ' ' + user.name.last,
          email: user.email,
          country: user.location.country,
          gender: user.gender,
          image: user.picture.large,
        };
      });
    });
};
export default getDataFromApi;
