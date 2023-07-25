import React from 'react'
import Preview from '../components/Preview'
import SliderSlick from '../components/SliderSlick'
import '../style/home.scss'
import CarrouselImages from '../components/CarrouselImages'
import Cards from '../components/Cards'
import ArrowButton from '../components/ArrowButton'

function Home() {

  let images = ['/isuzu.jpeg', '/f250.jpeg', '/isuzu2.jpeg', '/led trucks.jpeg'];
  let logos = ['/sliderimage/slider2.jpg', '/sliderimage/slider3.jpg', '/sliderimage/slider4.jpg', '/sliderimage/slider5.jpg', '/sliderimage/slider6.jpg', '/sliderimage/slider7.jpg', '/sliderimage/slider8.jpg',];
  let cards = [
    {
      icon: '/truck-blue.png',
      title: 'Highly Customizable',
      body: 'Mobile billboards provide the ability to change your campaign schedules and design routes. You can discover which route is most effective and leverage market opportunities to get the attention of your potential customers!'
    },
    {
      icon: '/static.png',
      title: 'Cost Effective',
      body: 'Compared to traditional media, mobile advertising has the lowest cost per impression that is shown to increase sales.'
    },
    {
      icon: '/megafono.png',
      title: 'Reach Your Target Audience',
      body: 'Mobile billboards can’t be turned off, fast forwarded, thrown out or ignored.'
    },
  ];

  return (

    
    <>
      <SliderSlick />
      <div className='section-2'>
        <div className='section-2__container'>
          <h1 className='section-2__container__title-1'>Our trucks in action</h1>
          <h2 className='section-2__container__title-2'>Mobile billboards are viewed by 95% of people that pass by them and are read by 85% of people. Almost TWICE the attention that static billboards receive!</h2>
          <ArrowButton text={'Send'} link={'/#1'} styles={{ alignment:'left', color: '#0061FE', fontSize: '20px'}} />

          <div className='section-2__container__three-element-slider'>
            <CarrouselImages arrayImages={images} />
          </div>
        </div>
      </div>
      <div className='section-3'>
        <div className="section-3__container">
          <h1 className='section-3__container__title-1'>Features</h1>
          <h1 className='section-3__container__title-2'>What We Do</h1>

          <Cards cards={cards} />
        </div>
      </div>

      <div className="section-4">
        <div className='section-4__container'>
          <div>
            <img src="/assets/mapa2.png" className='section-4__container__map2' alt="" />
          </div>
          <div>
            <h1 className='section-4__container__title'>Quick fact</h1>

            <p className='section-4__container__subtitle'> “Individual vehicle advertising generates between 30,000 to 70,000 daily vehicle impressions”</p>
            
            <ArrowButton text={'Send'} link={'/'} styles={{ alignment:'right', color: '#0061FE', fontSize: '20px'}} />
          </div>
        </div>
      </div>

      <div className='section-5'>
        <Preview/>
      </div>

      <div className="section-6"></div>

      <div className="section-7">
        <h1 className='section-7__title'>
          Preview your AD on our truck
        </h1>
        <p className='section-7__subtitle'> You can change the truck </p>

        <div className='section-7__logo-carrousel-container'>
          <div className="section-7__logo-carrousel-container__container">
            <CarrouselImages arrayImages={logos} slidesPerView={4}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home