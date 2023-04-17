import {hero1} from '../../assets/data';

const Hero=()=>{
    return(
        <>
            <section className="hero">
                <div className="w-full h-auto md:h-[92vh] md:flex md:justify-between">
                    <div className="w-full h-full md:w-1/2">
                        {hero1.map((item)=>(
                            <div className="box relative h-[92vh] sm:mt-16 w-full">
                                <img src={item.cover} alt='cover' className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;