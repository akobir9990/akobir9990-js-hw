let url = 'https://jsonplaceholder.typicode.com/posts';

const fetchURL = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error');
    }
}


