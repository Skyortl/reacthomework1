import './City.css';

function City(props) {
    const city = {
        cityName: 'Kriviy Rih',
        countryName: 'Ukraine',
        creationYear: 1919,
        imageUrls: ['https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_1139829482.jpg', 
        'https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-shutterstock_642707170.jpg',
        'https://cdn.thecrazytourist.com/wp-content/uploads/2018/08/ccimage-Church_KrivoiRog_023-2EN-1024x683.jpg']
    } 
    return (
        <div>
            <p>City name: {city.cityName}</p>
            <p>Country name: {city.countryName}</p>
            <p>Creation year: {city.creationYear}</p>
            <div className="cityImages">
            {city.imageUrls.map(value => <img src={value} alt="City"/>)}
            </div>
        </div>
    );
}

export default City;