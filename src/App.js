
import { useContext, useEffect } from 'react';
import './App.css';
// import { Blogs } from './components/Blogs';
// import { Header } from './components/Header';
// import { Pagination } from './components/Pagination';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import CategoryPage from './Pages/CategoryPage';
import TagPage from './Pages/TagPage';

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  // const [mode, setMode] = useState('light');
//searchParams-->current value of query parameters can be accessed
//setSearchParams-->value of parameters can be set

  const[searchParams,setSearchParams]= useSearchParams();
  const location =useLocation();

  // pathname: This is the path of the URL.
  // search: This is the query string (?) included in the URL.
  // hash: This is the result of the hash fragment (#) from the URL.

  // For example, if I have a URL, http://localhost:3000/products/school/?name=bags, the result from the useLocation object will be the following:
  // {pathname: ‘/products/school/’, search: ‘?bags’, hash: ‘’}

  console.log(location)
  useEffect(() => {
    const page= searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
       const tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
       fetchBlogPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split('/').at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page),null,category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search])
  

  return (
    <Routes>
      {/* colon means dynamic content */}
      <Route path='/' element={<Home/>} />
      <Route path='/blog/:blogId' element={<BlogPage/>} />
      <Route path='/tags/:tag' element={<TagPage/>} />
      <Route path='/categories/:category' element={<CategoryPage/>} />
    </Routes>
  );
}

export default App;
