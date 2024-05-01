import AuthPageLayout from "./pages/AuthPageLayout";
import SignUpForm from "./components/SignUpForm";

const App = () => {
  return (
    <>
      <AuthPageLayout>
        <SignUpForm />
      </AuthPageLayout>
    </>
  );
};

export default App;
