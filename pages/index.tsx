import { NextPage } from 'next';
import NavBar from '../components/Containers/NavBar/NavBar';
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer';
import ProductRow from '../components/Containers/ProductRow/ProductRow';
import BannerContainer from '../components/Containers/BannerContainer/index';
import { CarouselItem } from '../components/Containers/BannerContainer/BannerContainer';
import HeaderTop from '../components/Containers/HeaderTop/HeaderTop';

const Home: NextPage = () => {
  return (<>
    <HeaderTop />
    <NavBar />
    <BannerContainer >
      <CarouselItem
        src={"https://www.zotac.com/download/files/styles/org/public/news/images/vga_keyart_banner_1920-580_14.jpg?itok=8-xu3fMJ"}
      />
      <CarouselItem
        src={"https://fanaticosdelhardware.com/wp-content/uploads/2020/12/00-3060TiSeries_topbanner_1920x5801.jpg"}
      />
      <CarouselItem
        src={"https://www.zotac.com/download/files/styles/org/public/news/images/2018rtxgraphicscards_2060banner_1920x580.jpg?itok=1ubl0PUj"}
      />
    </BannerContainer>
      <ProductRow title={'Productos 1'} />
      <ProductRow title={'Productos 2'} />
      <ProductRow title={'Productos 3'} />
      <FooterFullContainer />
    </>)
}
export default Home; 