export const environment = {
    getBaseUrl(endPoint : string) : string{
        return `https://api.themoviedb.org/3/${endPoint}?api_key=fad58114a9f93b203b3cc75d52196bea`;
    },
    urlImage : 'https://image.tmdb.org/t/p/original'
};
