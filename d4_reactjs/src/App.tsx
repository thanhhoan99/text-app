import React from 'react'
import RenderList from './components/Renderlist'
import RenderList1 from './components/RenderList1';
import './App.css'
import RenderList2 from './components/RenderList2';
import ColorSelector from './components/ColorSelector';
import RatingSelector from './components/RatingSelector';
import ViewedProducts from './components/ViewedProducts';
import SortDropdown from './components/SortDropdown';


const data = [
  {id: 1, image: "/assets/dt1.png", title: "Ấn tượng đầu tiên", view: "140 lượt xem" },
  {id: 2, image: "/assets/dt2.png", title: "Cảm xúc đầu tiên", view: "120 lượt xem" },
  { id: 3,image: "/assets/dt3.png", title: "Kỷ niệm đầu tiên", view: "100 lượt xem" },
  { id: 4,image: "/assets/dt4.png", title: "Kỷ niệm đáng nhớ", view: "80 lượt xem" }
]
const products = [
  {
    id: 1,
    image: '/assets/cap-usb.png',
    title: 'Cáp chuyển đổi USB-C sang SD',
    price: '1.290.000đ',
    oldPrice: '1.790.000đ',
    discount: '25%',
  },
  {
    id: 2,
    image: '/assets/adapter.png',
    title: 'Adapter sạc Apple Type C 20W',
    price: '520.000đ',
    oldPrice: '',
    discount: '',
  },
  {
    id: 3,
    image: '/assets/cap-lightning.png',
    title: 'Cáp sạc Lightning 2m',
    price: '840.000đ',
    oldPrice: '',
    discount: '',
  },
  {
    id: 4,
    image: '/assets/airpods.png',
    title: 'AirPods 3',
    price: '890.000đ',
    oldPrice: '1.450.000đ',
    discount: '20%',
  },
];
const products2 = [
  {
    id: 1,
    image: '/assets/166.png',
    discount: '39%',
    price: '$1,422.7',
    oldPrice: '$1,925.5',
    percentOff: '18% off',
    title: 'LG White Front Load Steam Washer',
    sold: 10,
    rating: 4
  },
  {
    id: 2,
    image: '/assets/166.png',
    discount: '13%',
    price: '$96',
    oldPrice: '$85',
    percentOff: '18% off',
    title: 'Edifier Powered Bookshelf Speakers',
    sold: 15,
    rating: 4
  },
  {
    id: 3,
    image: '/assets/166.png',
    discount: '37%',
    price: '$62.99',
    oldPrice: '$45.9',
    percentOff: '18% off',
    title: 'Amcrest Security Camera in White Color',
    sold: 20,
    rating: 4
  },
  {
    id: 4,
    image: '/assets/166.png',
    discount: '27%',
    price: '$41.99',
    oldPrice: '$32.09',
    percentOff: '18% off',
    title: 'Grand Slam Indoor Of Show Jumping Novel',
    sold: 22,
    rating: 4
  },
  {
    id: 5,
    image: '/assets/166.png',
    discount: '6%',
    price: '$106.96',
    oldPrice: '$100.99',
    percentOff: '18% off',
    title: 'Sound Intone I65 Earphone White Version',
    sold: 10,
    rating: 4
  },
  {
    id: 6,
    image: '/assets/166.png',
    discount: '18%',
    price: '$670.2',
    oldPrice: '$657.8',
    percentOff: '18% off',
    title: 'Korea Long Sofa Fabric In Blue Navy Color',
    sold: 79,
    rating: 4
  }
];



function App() {
  return (
    <div style={{padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px'}}>
      <div className="list-row" style={{display: 'flex', gap: '20px'}}>
        {data.map((item, index) => (
          <RenderList 
            key={index}   
            image={item.image}
            title={item.title}
            view={item.view}
          />
        ))}
      </div>
      <br></br>
      <div className="container">
      <h2>Phụ kiện tương thích</h2>
      <div className="product-list" style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
        {products.map((item) => (
          <RenderList1
            key={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
    <br></br>
    <div className="container">
      <h2>Deal of the day</h2>
      <div style={{ color: 'red', fontWeight: 'bold' }}>End in: 6:17:17:39</div>
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
        {products2.map((item) => (
          <RenderList2 key={item.id} {...item} />
        ))}
      </div>
    </div>
    <br></br>
      <div style={{ padding: 20 }}>
      <ColorSelector />
    </div>
      <br></br>
      <div style={{ padding: 20 }}>
      <RatingSelector />
    </div>
    <br></br>
    <div style={{display:"flex", padding: 20 }}>
      <ViewedProducts />
    </div>
    <br></br>
     <div style={{ padding: 20 }}>
      <SortDropdown />
    </div>
    <br></br>
    <br></br>
    <br></br>
    </div>
  )
}

export default App