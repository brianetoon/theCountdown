import { Handler } from '@netlify/functions';

const handler: Handler = async (event, context) => {
  const targetDate = new Date('March 21, 2025 09:00:00 GMT-0600'); // Mountain Time
  const now = new Date();
  const diffTime = targetDate.getTime() - now.getTime();
  
  // Calculate time components
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffTime / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffTime / (1000 * 60)) % 60);

  const response = {
    statusCode: 200,
    body: JSON.stringify({ days, hours, minutes })
  };

  return response;
};

export { handler };