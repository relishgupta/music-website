import Header from '../header/header';
// import Footer from '../footer/footer';

const Layout=({children})=>{
    return(
        <div>
            <Header />
            <main className="mt-[4%]">{children}</main> 
        </div>
    )
}
export default Layout;