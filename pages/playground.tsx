import { NextPage } from 'next';
import LabelPromo from '../components/LabelPromo/LabelPromo';
import LabelStock from '../components/LabelStock/LabelStock';
import MainNavBarButton from '../components/MainNavBarButton/index';
const playground: NextPage = () => {
  return (<>
      <h1>playground</h1>
      <LabelPromo text={"En Oferta"} style={"onSale"} disabled={false} />
      <LabelStock text={"Stock"} style={"onStock"} disabled={false} />
      <MainNavBarButton text={"Categories or Help"} style={"MainNavBarButton"} disabled={false} onClick={Function} />
    </>
  )
}
export default playground; 