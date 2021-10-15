import Slider from 'react-slick'
import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Carousel extends Component {
  state = {imagesList: []}

  componentDidMount() {
    this.getCarousel()
  }

  getCarousel = async () => {
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const url = 'https://apis.ccbp.in/restaurants-list/offers'
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    this.setState({imagesList: data.offers})
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 4000,
      cssEase: 'linear',
    }

    const {imagesList} = this.state
    return (
      <div className="container">
        <Slider {...settings} className="carousel-container">
          {imagesList.map(each => (
            <div className="carousel">
              <img
                src={each.image_url}
                alt="offer"
                className="carousel-img"
                key={each.id}
              />
            </div>
          ))}
        </Slider>
      </div>
    )
  }
}

export default Carousel
