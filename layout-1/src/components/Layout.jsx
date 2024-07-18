/* eslint-disable react/prop-types */
import Header from './Header';
import Footer from './Footer';

function Layout(props){
    return (
        <>
        <header>
            <Header/>
        </header>
        <main>
            {props.children}
        </main> 
        <footer>
            <Footer/>
        </footer>  
        </>
    )
}


export default Layout;