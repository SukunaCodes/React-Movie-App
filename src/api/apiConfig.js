const apiConfig = {
    baseURL: "https://api.themoviedb.org/3/",
    apiKey: 'Get from TMDB website',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;