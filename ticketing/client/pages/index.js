import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  axios.get('/api/users/currentuser').catch((err) => {
    console.log(err.message);
  });
  return <h1>Landing Page</h1>;
};

// Function to be executed during server side rendering process
// LandingPage.getInitialProps = async () => {
//   const response = await axios.get('/api/users/currentuser');

//   return response.data;
// };

export default LandingPage;
