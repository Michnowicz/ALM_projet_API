
import './App.css'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import TopAnime from './components/TopAnime/TopAnime.jsx';
import DetailAnime from './components/DetailAnime/DetailAnime.jsx';
import TopManga from './components/TopManga/TopManga.jsx';
import DetailManga from './components/DetailManga/DetailManga.jsx';
import Characters from './components/Characters/Characters.jsx';
import Favourite from './components/Favourite/Favourite.jsx';
import { useEffect, useState } from 'react';
import { useLocalStorage } from "@uidotdev/usehooks";

function App() {

  const [favCharacter, setFavCharacter] = useState([])
  const [favAnime, setFavAnime] = useLocalStorage("favAnime", []);
  const [favManga, setFavManga] = useLocalStorage("favManga", []);

  const pages = createBrowserRouter([
    {
      path:"/",
      element:<TopAnime favAnime={favAnime} setFavAnime={setFavAnime}/>,
    },
    {
      path:"/anime/:id",
      element:<DetailAnime/>,
    },
    {
      path:"/manga",
      element:<TopManga favManga={favManga} setFavManga={setFavManga}/>,
    },
    {
      path:"/manga/:id",
      element:<DetailManga/>,
    },
    {
      path:"/characters",
      element:<Characters favCharacter={favCharacter} setFavCharacter={setFavCharacter} />,
    },
    {
      path:"/favourite",
      element:<Favourite favAnime={favAnime} favManga={favManga} favCharacter={favCharacter}/>,
    },

  ])

  return (
    <>
      <RouterProvider router={pages}/>
    </>
  )
}

export default App
