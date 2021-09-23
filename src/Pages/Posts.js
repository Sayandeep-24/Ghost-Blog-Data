import Navbar from '../components/Navbar'
import WithoutMeta from '../components/WithoutMeta'
import LongMeta from '../components/LongMeta'
import LongUrl from '../components/LongUrl'
import WithoutImage from '../components/WithoutImage'
import ShortPosts from '../components/ShortPosts'
import LongPosts from '../components/LongPosts'



function Posts()
{
    return (
    <div>
        <div><Navbar page='posts'/></div>
        <div className='posts-container'>
            <div><WithoutMeta /></div>
            <div><LongMeta /></div>
            <div><LongUrl /></div>
            <div><WithoutImage /></div>
            <div><ShortPosts /></div>
            <div><LongPosts /></div>
        </div>
    </div>);
}

export default Posts;