
import { Outlet } from 'react-router-dom'

import Footer from '../Pages/Shared/Footer/Footer'
import Header from '../Pages/Shared/Header/Header'

export default function Main() {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
