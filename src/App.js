import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";

import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";
import SignUp from "./routes/sign-up/sign-up.component";
import DetailsPage from "./routes/details-page/detailsPage.component";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="signin" element={ <SignIn/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path=":movieId" element={<DetailsPage />}>
          {/* <Route path=":sub_movieId" element={<p>sub movie</p>} /> */}
        </Route>
      </Route>
   </Routes>
  );
}

export default App;
