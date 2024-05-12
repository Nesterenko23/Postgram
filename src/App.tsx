import AuthPageLayout from "./pages/AuthPageLayout";
import SignUpForm from "./components/SignUpForm";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignInForm from "./components/SignInForm";
import MainPage from "./pages/MainPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import React from "react";
import { getCurrentUser } from "./utils/manageUsers";
import { useAppDispatch } from "./hooks/reduxHooks";
import { setCurrentUser } from "./redux/slices/currentUserSlice";

const App = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const currentUser = await getCurrentUser(user.uid);
        currentUser && dispatch(setCurrentUser(currentUser));
      } else {
        console.log("No current user");
      }
    });
  }, []);

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
