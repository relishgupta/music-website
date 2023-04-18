import Title from '../sidebar/title.jsx'
import { news } from '../../assets/data.js';
import CardLg from '../sidebar/card_lg.jsx';

const New = () => {
  return (
        <section className='new hero'>
            <Title title="New" />
            <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-1  gap-5'>
              {news.map((item, i) => (
                <div className='box card hero' key={i}>
                  <CardLg cover={item.cover} name={item.name} tag={item.tag} />
                </div>
              ))}
            </div>
        </section>
  )
}

export default New;
