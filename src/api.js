import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID dsSgn6wI2MGKqt0pOk-aa8zstobPMSmVhZJhutXpatA'
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;