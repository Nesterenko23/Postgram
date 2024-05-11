import AuthPageLayout from "./pages/AuthPageLayout";
import SignUpForm from "./components/SignUpForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import MainPage from "./pages/MainPage";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <AuthPageLayout />,
      children: [
        {
          path: "/auth/signUp",
          element: <SignUpForm />,
        },
        {
          path: "auth/signIn",
          element: <SignInForm />,
        },
      ],
    },
    {
      element: <MainPage />,
      path: "/",
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
