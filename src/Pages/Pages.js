import Navbar from '../components/Navbar'
import TotalLinks from '../components/TotalLinks'
import BrokenInternal from '../components/BrokenInternal'
import BrokenExternal from '../components/BrokenExternal'

function Pages()
{
    return (
    <div>
        <div><Navbar /></div>
        <div className='pages-container'>
            <TotalLinks />
            <BrokenInternal />
            <BrokenExternal />
        </div>
    </div>);
}

export default Pages;