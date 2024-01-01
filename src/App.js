// import LoginContainer from "./containers/LoginContainer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CSubjectContainer from "./containers/Features/CSubjectContainer";
// import RegistrationContainer from "./containers/RegistrationContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import SDisplayContainer from "./containers/Features/SDisplayContainer";
import ESContainer from "./containers/Features/ESContainer";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<ESContainer />} path="/editSubject" />
          {/* <Route element={<LoginContainer />} path="/" /> */}
          {/* <Route element={<RegistrationContainer />} path="/registration" /> */}
          <Route element={<CSubjectContainer />} path="/createsubject" />
          <Route element={<SDisplayContainer />} path="/" />
        </Routes>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
