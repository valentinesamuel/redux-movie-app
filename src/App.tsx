import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import Spinner from "./components/spinners/circular-spinner/circular-spinner.component";
const Home = lazy(() => import('./routes/home/home.component'))
const Navigation = lazy(() => import('./routes/navigation/navigation.component'))
const SignUp = lazy(() => import('./routes/sign-up/sign-up.component'))
const DetailsPage = lazy(() => import('./routes/details-page/detailsPage.component'))
const UserMovies = lazy(() => import('./routes/user-movies/UserMovies.component'))
const SignIn = lazy(() => import('./routes/sign-in/sign-in.component'))


function App() {

  return (
    <Suspense fallback={<Spinner/>}>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path=":movieId" element={<DetailsPage />} />
        <Route path="userlist" element={<UserMovies />}/>
      </Route>
    </Routes>
    </Suspense>
  );
}

export default App;
