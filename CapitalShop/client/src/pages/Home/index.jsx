import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './index.module.scss'
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles.css';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Row, Col } from 'antd'
import { useGetProductsByNameQuery } from '../../services/ProductsApi';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button} from 'antd';
import {Link} from 'react-router-dom'


const Home = () => {
  const { data: products, refetch } = useGetProductsByNameQuery()
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('def')

  const filteredData = products ? products.data.filter((product) => {
    return product.title.trim().toLowerCase().includes(searchQuery.trim().toLowerCase())
  }) : []


  const sortedData = sortBy ? filteredData.slice().sort((a, b) => {
    if (sortBy === 'asc') {
      return a.price - b.price;
    }
    else {
      return b.price - a.price
    }
  }) : filteredData
  return (
    <>
      <Swiper style={{marginTop:'83px'}}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/hero/h1_hero2.jpg" />
        </SwiperSlide>
      </Swiper>

      <section style={{ marginTop: '100px' }} id={styles.fashion}>
        <div className="container">
          <div className={styles.fashion}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img width={'400px'} height={'300px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items1.jpg" alt="" />
                <h3>Men's Fashion</h3>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img width={'400px'} height={'300px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items2.jpg" alt="" />
                <h3>Women's Fashion</h3>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={24} lg={8}>
                <img width={'400px'} height={'300px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/items3.jpg" alt="" />
                <h3>Baby Fashion</h3>
              </Col>
            </Row>
          </div>
        </div>
      </section>



      <section style={{ marginTop: '100px' }}>
        <div className="container">
          <h3> Sort by Price and Search By Title</h3>
          <TextField id="outlined-basic" label="search" variant="outlined" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <InputLabel id="demo-simple-select-label">Sort By Price</InputLabel>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sortBy}
              label="Sort by Price"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value={'def'}>Default</MenuItem>
              <MenuItem value={'asc'}>Low to High</MenuItem>
              <MenuItem value={'desc'}>High to Low</MenuItem>
            </Select>
          </FormControl>
        </div>
      </section>

      <section style={{ marginTop: '60px' }} id={styles.trending}>
        <div className="container">
          <div className={styles.trending}>
            <h3>Trending This Week</h3>
            <hr />
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              {sortedData && sortedData.map((product) => {
                return <Col className="gutter-row" span={6} xs={24} md={12} lg={6} key={product._id}>
                  <img width={'300px'} src={product.image} alt={product.title} />
                  <h2>{product.title}</h2>
                  <h4>{product.price}</h4>
                  <Button danger onClick={async () => {
                    if (window.confirm("Are you sure delete?")) {
                      await deleteOne(product._id)
                      refetch()
                    }
                  }}>Delete</Button>
                  <Button><Link to={`/products/${product._id}`}>Detail</Link></Button>
                </Col>
              })}
            </Row>
          </div>
        </div>
      </section>


      <section style={{ marginTop: '100px' }} id={styles.testimonial}>
        <div className="container">
          <div className={styles.testimonial}>
            <h3>Customer Testimonial</h3>
            <p>Everybody is different, which is why we offer styles for every body. Laborum fuga incidunt laboriosam voluptas iure, delectus dignissimos facilis neque nulla earum.</p>
            <div className={styles.testH}>
              <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/founder-img.png" alt="" />
              <span>Petey Cruiser</span>
            </div>
          </div>
        </div>
      </section>


      <section style={{ marginTop: '100px' }} id={styles.like}>
        <div className="container">
          <div className={styles.like}>
            <h4>You may like</h4>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img width={'300px'} height={'320px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest8.jpg" alt="" />
                <h5>Cashmere Tank + Bag</h5>
                <h6>$98.00</h6>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img width={'300px'} height={'320px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest6.jpg" alt="" />
                <h5>Cashmere Tank + Bag</h5>
                <h6>$98.00</h6>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img width={'300px'} height={'320px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest5.jpg" alt="" />
                <h5>Cashmere Tank + Bag</h5>
                <h6>$98.00</h6>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img width={'300px'} height={'320px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg" xs={24} md={12} lg={6} alt="" />
                <h5>Cashmere Tank + Bag</h5>
                <h6>$98.00</h6>
              </Col>
            </Row>
          </div>
        </div>
      </section>

      <section style={{ marginTop: '100px' }} id={styles.news}>
        <div className="container">
          <div className={styles.news}>
            <h4>Latest News</h4>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <img width={'380px'} height={'280px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog1.jpg" alt="" />
                <h3>What Curling Irons Are The Best Ones</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <img width={'380px'} height={'280px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog2.jpg" alt="" />
                <h3>Vogue's Ultimate Guide To Autumn/ Winter 2019 Shoes</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={8}>
                <img width={'380px'} height={'280px'} src="https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/blog3.jpg" alt="" />
                <h3>What Curling Irons Are The Best Ones</h3>
                <p>Consectetur adipisicing elit. Laborum fuga incidunt laboriosam voluptas iure, delectus..</p>
              </Col>
            </Row>

          </div>
        </div>
      </section>

      <section  style={{ marginTop: '100px' }} id={styles.delivery}>
        <div className="container">
          <div className={styles.delivery}>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services1.svg" alt="" />
                <h3>Fast & Free Delivery</h3>
                <p>Free delivery on all orders</p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services2.svg" alt="" />
                <h3>Secure Payment</h3>
                <p>Free delivery on all orders</p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services3.svg" alt="" />
                <h3>Money Back Guarantee</h3>
                <p>Free delivery on all orders</p>
              </Col>

              <Col className="gutter-row" span={6} xs={24} md={12} lg={6}>
                <img src="https://preview.colorlib.com/theme/capitalshop/assets/img/icon/services4.svg" alt="" />
                <h3>Online Support</h3>
                <p>Free delivery on all orders</p>
              </Col>
            </Row>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home