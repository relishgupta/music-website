import Title from '../sidebar/title.jsx'
import Slider from "react-slick"
import CardLg from '../sidebar/card_lg.jsx';
import { trending } from '../../assets/data.js';

const Trending = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
        <section className='trending hero'>
            <Title title="Trending" />
            <Slider {...settings}>
              {trending.map((item, i) => (
                <div className='box card hero m-5' key={i}>
                  <div className='mr-5'>
                    <CardLg cover={item.cover} name={item.name} tag={item.tag} />
                  </div>
                </div>
              ))}
            </Slider>
        </section>
  )
}

export default Trending;
