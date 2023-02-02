import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  // console.log(currentUser);
  // axios.get('/api/users/currentuser').catch((err) => {
  //   console.log(err.message);
  // });
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

// Function to be executed during server side rendering process
LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server!
    // Requests should be made to http://ingress-nginx.ingress-nginx...
    // http://SERVICENAME.NAMESPACE.svc.cluster.local
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );

    return data;
  } else {
    // We are on the browser!
    // Requests can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }

  return {};
};

export default LandingPage;
