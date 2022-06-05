import { NextPage } from 'next';
import LabelPromo from '../components/LabelPromo/LabelPromo';
import LabelStock from '../components/LabelStock/LabelStock';
import MainNavBarButton from '../components/MainNavBarButton/index';
import ButtonArrow from '../components/ButtonArrow/index';
import LabelBreaker from '../components/LabelBreaker/index';

const playground: NextPage = () => {
  return (<>
      <h1>playground</h1>
      <LabelPromo text={"En Oferta"} style={"onSale"} disabled={false} />
      <LabelStock text={"Stock"} style={"onStock"} disabled={false} />
      <LabelBreaker text={""} style={"horizontalBreaker"} disabled={false} />
      <MainNavBarButton text={"Categories or Help"} style={"MainNavBarButton"} disabled={false} onClick={Function} />
      <ButtonArrow text={"<>"} style={"buttonArrow"} disabled={false} onClick={Function} />
    </>
  )
}
export default playground; 