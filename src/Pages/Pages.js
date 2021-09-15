import Navbar from '../components/Navbar'
import TotalLinks from '../components/TotalLinks'
import BrokenInternal from '../components/BrokenInternal'
import BrokenExternal from '../components/BrokenExternal'



function Pages()
{
    return (
    <div>
        <div><Navbar /></div>
        <TotalLinks />
        <BrokenInternal />
        <BrokenExternal />
    </div>);
}

export default Pages;