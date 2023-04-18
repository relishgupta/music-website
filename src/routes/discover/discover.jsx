import Hero from "../../components/home/hero";
import New from "../../components/home/new";
import Recommend from "../../components/home/recommend";
import Trending from "../../components/home/trending";

import LayoutSidebar from "../../components/layoutSidebar/layoutSidebar";

const Discover = () => {
  return (
    <>
      <Hero />
      <LayoutSidebar>
        <Trending />
        <New />
        <Recommend />
      </LayoutSidebar>
    </>
  )
}

export default Discover;