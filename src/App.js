import { Route, Routes } from "react-router-dom";
import Authentication from "./components/authication/authentication.component";
import Nav from "./components/nav/nav.component";
import Home from "./routes/home/home.component";

const Shop = () => <h1>I'm at the shop</h1>;

const App = () => {
   return (
      <Routes>
         <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='auth' element={<Authentication />} />
         </Route>
      </Routes>
   );
};

export default App;
