const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are not signed in</h1>
  );
};

// Function to be executed during server side rendering process
LandingPage.getInitialProps = async (context, client, currentUser) => {
  return {};
};

export default LandingPage;
