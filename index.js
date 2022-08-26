const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    console.log(res);
    displayImage(res.data);
    form.elements.query.value = '';
})

const removeImage = () => {

    const img = document.querySelectorAll('img');
    img.forEach(img => img.remove());

}
const displayImage = (shows) => {
    removeImage();
    for (let result of shows) {
        if (result.show.image){
            
        const img = document.createElement('IMG');
        
    img.src = result.show.image.medium;
    
    document.body.append(img);
    
} else {

    
}
    }
}

