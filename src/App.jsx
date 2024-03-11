
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import TopAnime from './components/TopAnime/TopAnime.jsx';
import DetailAnime from './components/DetailAnime/DetailAnime.jsx';

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
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
