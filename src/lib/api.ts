import axios from 'axios';

const BASE_URL = 'https://nj.mrjtrade.uz';

export const consultation = async (
  name: string,
  phone: string,
  service: string,
  from: string
) => {
  try {
    // Send POST request with the form data
    const response = await axios.post(
      `${BASE_URL}/api/application?form=${from}`,
      {
        name,
        phone,
        service,
      },
      {
        headers: {
          'API-Key': 'ZQv#fC}Rhiht,g&TS[ptF!ayJHS@8Ihq', // Add the API key as 'API-Key' header
        },
      }
    );

    // Optionally, return response data or handle it further
    return response.data;
  } catch (error) {
    console.error('Error sending consultation request:', error);
    // Optionally, throw the error or handle it in some other way
    throw error;
  }
};
