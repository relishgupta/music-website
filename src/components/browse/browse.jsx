import CardLg from "../sidebar/card_lg";
import { browse } from "../../assets/data";

const Browse = () => {
  return (
    <>
      <section className='treading hero mt-8 sm:mt-20'>
        <h1 className='text-5xl font-bold mb-5 text-primary'>Browse</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 sm:grid-cols-1'>
          {browse.map((item, i) => (
            <div className='box card hero' key={i}>
              <CardLg cover={item.cover} name={item.name} tag={item.tag} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
export default Browse;
