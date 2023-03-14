import Router from 'next/router';
import { useEffect, useState, useRef } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const intervalRef = useRef(null);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    intervalRef.timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(intervalRef.timerId);
    };
  }, []);

  if (timeLeft < 0) {
    clearInterval(intervalRef.timerId);
    return <div>Order expired</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        stripeKey="pk_test_51GyhSUBVEY9pRgXUOkf0AsEicjgkjFr9znVhSysqTBEFqy6lMGuORtv3FV2yhbH96PPuuj8XKj0hoCQ6tKzBWimv00S9nDk8PF"
        amount={order.ticket.price * 100}
        email={currentUser.email}
      />
      {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
