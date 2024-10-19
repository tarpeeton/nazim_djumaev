import axios from 'axios'
const BASE_URL = 'https://nj.mrjtrade.uz'





// {
//     "name":"Familya imya",
//     "phone":"+998 88 823 93 99",
//     "service":"Nazivaniya usluga"
// }




export const consultation = async (
    name: string,
    phone: string,
    service: string,
    from: string
  ) => {
    try {
      // Send POST request with the form data
      const response = await axios.post(`${BASE_URL}/api/application?form=${from}`, {
        name,
        phone,
        service,
      })
  
      // Optionally, return response data or handle it further
      return response.data
    } catch (error) {
      console.error('Error sending question:', error)
      // Optionally, throw the error or handle it in some other way
      throw error
    }
  }