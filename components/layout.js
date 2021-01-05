import Header from '../components/header'
export default function Layout({children}){
    return (
        <div>
            <Header></Header>
            {children}
            <footer>
                Footer
            </footer>
        </div>    
    )
}