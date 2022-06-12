import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignOut from "./routes/sign-out/sign-out.component";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="sigin" element={ <SignIn/>} />
        <Route path="sigout" element={ <SignOut/>} />
      </Route>
   </Routes>
  );
}

export default App;
