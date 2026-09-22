import axios from 'axios';

const searchImages = async () => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID wcdOQ13qFhNSObqtEa0I-TJYNz-WFcV3R8FRhd5cDss'
    },
    params: {
      query: 'cats'
    }
  });

  console.log(response);
  
  return response;
};

export default searchImages;
