import { NextPage } from 'next';
import LabelPromo from '../components/LabelPromo/LabelPromo';
const playground: NextPage = () => {
  return (<>
      <h1>playground</h1>
      <LabelPromo text={"En Oferta"} style={"onSale"} disabled={false} />
    </>
  )
}
export default playground; 