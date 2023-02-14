import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeElectronics/Banner';
import CategoriesBanner from '../components/HomeElectronics/CategoryBanner';
import RecentProducts from '../components/HomeOne/RecentProducts';
import OfferStyleOne from '../components/Common/OfferStyleOne';
import FacilitySlider from '../components/Common/FacilitySlider';
import Partner from '../components/Common/Partner';
import RecentBlogPost from '../components/Common/RecentBlogPost';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';
import PopularProducts from '../components/HomeOne/PopularProducts';
import BestSellingProducts from '../components/HomeOne/BestSellingProducts';
import Testimonials from '../components/HomeElectronics/Testimonials';
import BlogPost from '../components/HomeElectronics/BlogPost';

import axios from 'axios';
import baseUrl from '../utils/baseUrl';

const Index = ({user,products,store}) => {

  return (
    <>
      <TopHeader user={user} />

      <Navbar user={user} store={store} />

      <MainBanner />

      <CategoriesBanner />

      <RecentProducts products={products.slice(0,6)} />

      <OfferStyleOne />

      <PopularProducts products={products.slice(0,6)} />

      <FacilitySlider />

      <BestSellingProducts products={products.slice(2,8)} />

      <div className='testimonials-section'>
        <Testimonials />
      </div>

      <Partner />

      <RecentBlogPost />

      <InstagramFeed />
      
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const page = ctx.query.page ? ctx.query.page : '1';

  const payload = {
    params: {
      page,
      limit: 100,
    }
  };

  const url = `${baseUrl}/api/v1/products`;

  const response = await axios.get(url, payload);
  const { products, totalPages } = response.data;

  return {
    props: {
      products,
      totalPages,
    },
  };
}

export default Index;
