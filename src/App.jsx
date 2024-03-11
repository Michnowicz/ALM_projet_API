
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import TopAnime from './components/TopAnime/TopAnime.jsx';

function App() {

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<TopAnime/>,
    },
  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
