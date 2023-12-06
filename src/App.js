import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";

import LogIn from './components/logIn';
import AddUser from './components/addUser';
import Home from './components/home';
import NewsDetail from './components/newsDetail';
import Favourite from "./components/favourite";
import { Provider } from "react-redux";
import {store} from "./redux/store"; 

function App() {
  const routes = createRoutesFromElements(
    <>
      <Route path="/" element={<LogIn />} />
      <Route path="/create-user" element={<AddUser />} />
      <Route path="/home" element={<Home />} />
      <Route path="/news-detail/:id" element={<NewsDetail/>} />
      <Route path="/favourites" element={<Favourite/>}/>
    </>
  );

  const router = createBrowserRouter(routes);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
