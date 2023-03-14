import { useEffect, useState, useRef } from 'react';

const OrderShow = ({ order }) => {
  const [timeLeft, setTimeLeft] = useState('');
  const intervalRef = useRef(null);

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

  return <div>Time left to pay: {timeLeft} seconds</div>;
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
