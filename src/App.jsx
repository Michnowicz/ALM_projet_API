
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import TopAnime from './components/TopAnime/TopAnime.jsx';
import DetailAnime from './components/DetailAnime/DetailAnime.jsx';
import TopManga from './components/TopManga/TopManga.jsx';
import DetailManga from './components/DetailManga/DetailManga.jsx';
import Characters from './components/Characters/Characters.jsx';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<TopAnime/>,
    },
    {
      path:"/anime/:id",
      element:<DetailAnime/>,
    },
    {
      path:"/manga",
      element:<TopManga/>,
    },
    {
      path:"/manga/:id",
      element:<DetailManga/>,
    },
    {
      path:"/characters",
      element:<Characters/>,
    },

  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
