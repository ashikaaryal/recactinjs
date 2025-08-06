
import './App.css'
import Card from './Components/Card';
 import Conditional from './Components/Conditional';
 import Navbar from './Components/Navbar';
 import Props from './Components/Props';
import Nav from './Components/Nav';
import Daraz from './Components/Daraz';
import Movies from './Data/Movies';
import CompA from './Components/CompA';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Movie from './Pages/Movie';




function App() {
  return (
    <>
      {/* <h1>Registration</h1>
      <form>
        <label htmlFor="name">Firstname:</label>
        <input type="text" id="name" placeholder="Enter your first name" />

        <label for="name">Lastname:</label>
        <input type="text" id="name" placeholder="Enter your last name" /> <br />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" placeholder="Enter your email" />

        <label htmlFor="phone">Phone:</label>
        <input type="number" id="phone" placeholder="Enter your phone" /> <br />

        <label htmlFor="gender">Gender:</label>
        <input type="" name="gender" value="Male" />Male
        <input type="" name="gender" value="Female" />Female

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" placeholder="Enter your address" /> <br />


        <button type="submit">Submit</button>



      </form> */}

<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/movie" element={<Movie/>} />
  {/* <Route path="/" element={<Home/>} /> */}

</Routes>
</BrowserRouter>
<div className="app">
{/* <Card title="Singham" img="https://th.bing.com/th/id/OIP.R5XYSdJWB-BCUkLL37Uu8QHaFj?w=249&h=187&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3/>" />
<Card title="The God" img="https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_.jpg"/>
<Card title="Avengers" img="https://th.bing.com/th/id/OIP.phT7TlCkoLsLCZc8okmSKwHaNK?w=130&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"/>
<Card title="Ashique" img=""/>
<Card title="Goblin" img=" https://th.bing.com/th/id/OIP.PrfsCafPW5QN0WZmblfmNQAAAA?w=128&h=150&c=6&o=7&dpr=1.5&pid=1.7&rm=3"/>
<Card title="Titanic" img=""/>
<Card title="Unko Sweater" img=""/>
<Card title="Hii papa" img=""/> */} 

{/* {Movies.map((item,i)=>{
  return <Card
              title={item.title}
              release={item.relaese}
              director={item.director}
              img={item.image}
  />;
}
)} */}
<CompA data = "This is data from component 1"/>
</div>
{/* <Conditional/> */}
{/* <Props title="Lumbini City College"/> */}


{/* <Nav/>
<div className='daraz-cart'>
  <Daraz img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSokHT9lwJu6F-eE_aCNTN28F5CKcc276gsg&s" title="Airpods 4 with Active Noise Cancellation" price="2500" delete="2500"/>
    <Daraz img="https://www.soothys.in/cdn/shop/files/55_Dark_Classic.png?v=1742493730&width=533" title="Amul Fruit N Nut Choclate 40g"/>
  <Daraz img="https://wottagirl.com/cdn/shop/files/1_d8826312-29d2-4f9e-8515-56f83f53b4eb.png?v=1708690365" title="Wottagirl Cupid Heart Perfume for Women "/>
  <Daraz title="Iphone 14 in Nepal" img="https://fatafatsewa.com/storage/media/5006/iphone-14-blue.jpg"/>
  <Daraz title="Skin Fruits Spots & Tan Clear Papaya Face Wash – Joy Personal Care" img="https://joypersonalcare.com/cdn/shop/files/Papaya.jpg?v=1745230548&width=1445"/>
  <Daraz title="Coke Sakto (per bottle) " img="https://pickupsticksbistro.com/cdn/shop/products/B2C44D99-997A-49F6-8926-4BDC0B39345A_1024x1024@2x.jpg?v=1614066733"/>
  <Daraz title="Silk Sarii" img="https://www.desicloset.co.za/cdn/shop/files/50604-29007.jpg?v=1711012117"/>
  <Daraz title="Laptop" img="https://g2u-wp-prod.s3-ap-southeast-2.amazonaws.com/wp-content/uploads/2025/01/shutterstock_2328203513.jpg"/>
  <Daraz title="Wireless Headphones - Buy Bluetooth Headphones " img="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_650_pp_renders_main_banner.124.png?v=1740735495"/>
  <Daraz title="Arctic Fox APEX EON USB Wired Gaming Mouse with DP" img="https://arcticfox.com/cdn/shop/files/1_f87f08be-bf1b-4065-ae81-21d7c1ad0f69.jpg?v=1699270558"/>
  <Daraz title="Durable and Stylish School Bags for Kids - Perfect for Every school bag export" img="https://s.alicdn.com/@sc04/kf/Hb20d896a88fc4eecb88cf0f7bf469f17O/2025-New-Multifunctional-Waterproof-Kids-Backpacks-Primary-School-Bag-School-Bags-for-Girls-Boys.jpg"/>
  <Daraz title="Break Resistant Glass Water Bottle​, 750ml | Upto 45% Off – Glasafe" img="https://www.glasafe.com/cdn/shop/files/hzjqpehrzldyvt8glfmo.webp?v=1746174149"/>
  <Daraz title="Athleisure Shoes for Men | Redtape" img="https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg?v=1751015717"/>
  <Daraz title="Shoetopia Girls Colourblocked Lightweight Skate Shoes" img="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22041064/2023/2/18/10700a6d-74a7-4e8b-afab-585f09869b6e1676726159705ShoetopiaGirlsPinkColourblockedSkateShoes1.jpg"/>
  <Daraz title="Barcelona 2010-11 Jersey Home Retro - Club Jerseys" img="https://clubjerseys.in/wp-content/uploads/2023/05/274206815_1161747201234650_832625257145225706_n.jpg"/>
  <Daraz title="Real Madrid Chinese Dragon Black Special Edition Shirt 2023/24" img="https://www.futkit.com/cdn/shop/files/real-madrid-chinese-dragon-black-special-edition-shirt-2023-24-clothing-215.webp?v=1736860993"/>

</div> */}

    </>
  )
}


export default App;

