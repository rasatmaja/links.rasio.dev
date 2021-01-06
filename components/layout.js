import Header from '../components/header'
import Footer from '../components/footer'
export default function Layout({children}){
    return (
        <div className="bg-primary-light dark:bg-primary-dark text-gray-700 dark:text-gray-200 min-h-screen transition-colors duration-500">
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>    
    )
}