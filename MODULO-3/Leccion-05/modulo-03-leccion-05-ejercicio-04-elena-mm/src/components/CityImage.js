import React from 'react';

class CityImage extends React.Component {
constructor(props) {
    super(props);
    this.cities = {
        Praga: 'https://d2bgjx2gb489de.cloudfront.net/gbb-blogs/wp-content/uploads/2018/03/17111740/Prague-city-skyline-and-Charles-Bridge-92523139-870x400.jpg',
        Boston: 'https://www.telegraph.co.uk/content/dam/Travel/2018/June/Skyline-iStock-894559888-xlarge.jpg',
        'Buenos Aires': 'https://i1.wp.com/theorangebackpack.nl/wp-content/uploads/2019/03/andrea-leopardi-694660-unsplash-scaled.jpg?fit=2560%2C1707&ssl=1',
        Sydney: 'https://static.ffx.io/images/$zoom_0.1576%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_110/t_crop_custom/q_86%2Cf_auto/77eaec079e928d8b9e4e0dd1660e57185a5cc769',
        Tokio: 'https://news.laingbuisson.com/wp-content/uploads/sites/3/2019/10/Tokyo-Japan-eds.jpg'
    };
}   
    render() {
        return (
            <img src={this.cities[this.props.city]} alt={this.props.city}/>
        )
    }
}

export default CityImage;