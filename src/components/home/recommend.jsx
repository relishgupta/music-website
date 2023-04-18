import Title from '../sidebar/title.jsx'
import { recommend } from '../../assets/data.js';
import CardSm from '../sidebar/card_sm.jsx';

const Recommend = () => {
  return (
        <section className='recommend hero'>
            <Title title="Recommend" />
            <div className='grid grid-cols-2 gap-5'>
              {recommend.map((item, id) => (
                <CardSm cover={item.cover} name={item.name} tag={item.tag} key={id} />
              ))}
            </div>
        </section>
  )
}

export default Recommend;
