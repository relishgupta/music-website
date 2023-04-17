import { Routes,Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Layout from "./components/layout/layout";
import Discover from "./routes/discover/discover";
import Browser from "./routes/browser/browser";
import Charts from "./routes/charts/charts";
import Artists from "./routes/artists/artists";

const App=()=>{
    return(
        <Router>
            <Routes>
                <Route path='/' element=
                {
                    <Layout>
                        <Discover />
                    </Layout>
                }/>
                <Route  path='/browser' element=
                {
                    <Layout>
                        <Browser />
                    </Layout>
                }/>
                <Route  path='/charts' element=
                {
                    <Layout>
                        <Charts />
                    </Layout>
                }/>
                <Route  path='/artists' element=
                {
                    <Layout>
                        <Artists />
                    </Layout>
                }/>
            </Routes>
        </Router>
)}

export default App;