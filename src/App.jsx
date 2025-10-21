import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import Home from "./pages/Home";
import About from "./pages/About";
import Awareness from "./pages/Awaerness";
import Matryrs from "./pages/Matryrs";
import MartyrsDetails from "./pages/MartyrsDetails";
import StoryPage from "./pages/Story";
import NotFound from './pages/NotFound';

export default function App() {
  const router = createBrowserRouter([
    {path: '', element: <MainComponent />, children: [
    {path: '/', element: <Home />},
    {path: 'about', element: <About />},
    {path: 'awareness', element: <Awareness />},
    {path: 'story', element: <StoryPage />},
    {path: 'matryrs', element: <Matryrs />},
    {path: 'matryr/:id', element: <MartyrsDetails />}
  ]}
  ],
  {path: '*', element: <NotFound />})
  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}