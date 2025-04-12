import Hero from './Hero'
import ProductCategory from './ProductCategory' 
import CardSlider from './CardSlider'
import LatestAdded from './LatestAdded'
import About from './About'
const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCategory />
      <CardSlider />
      <LatestAdded />
      <About />
    </div>
  )
}

export default Home