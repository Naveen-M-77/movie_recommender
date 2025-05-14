const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f734c23290b011b4d7e03c3726646d97',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;