import Header from '../components/header'
import Footer from '../components/footer'
export default function Layout({children}){
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>    
    )
}