import TotalPosts from './components/TotalPosts'
import TotalPages from './components/TotalPages'
import TotalAuthors from './components/TotalAuthors'
import TotalTags from './components/TotalTags'
import PublishedPosts from './components/PublishedPosts'
import PostsChart from './components/PostsChart'

function App() {
  return (
    <div className='container'>
      <div className='upper-box'>
        <TotalPosts />
        <TotalPages />
        <TotalAuthors />
        <TotalTags />
      </div>
      <div className='lower-box'>
        <PublishedPosts />
        <PostsChart />
      </div>
    </div>
  );
}

export default App;
