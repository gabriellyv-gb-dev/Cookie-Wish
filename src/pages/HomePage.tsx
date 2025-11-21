
// components
import AppHeader from '../components/AppHeader';
import AppMain from '../components/AppMain';
import AppFooter from '../components/AppFooter';


// static



// page function
export default function HomePage() {
   

    // jsx return
    return(
        <>
            {/* header */}
            <AppHeader />
            
            {/* main with cookie */}
            <AppMain/>
            
            {/* footer */}
            <AppFooter />
        </>
    )
}