const LandingPage = ({ color }) => {
  console.log('I am in the component!', color);
  return <h1>Landing Page</h1>;
};

// Function to be executed during server side rendering process
LandingPage.getInitialProps = () => {
  console.log('I am on the server!');

  return { color: 'red' };
};

export default LandingPage;
