import { browse } from "../../assets/data"
import CardSm from "../sidebar/card_sm";

const Chart = () => {
  return (
    <>
      <section className='treading hero mt-8 sm:mt-20'>
        <h1 className='text-5xl font-bold mb-5 text-primary'>Charts</h1>
        <div className='grid grid-cols-1 gap-5'>
          {browse.map((item, id) => (
            <div className='box card hero' key={id}>
              <CardSm cover={item.cover} name={item.name} tag={item.tag} i={id} show={true} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Chart;