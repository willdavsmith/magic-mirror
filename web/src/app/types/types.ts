export interface Article {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface WeatherAPIResponse {
    name: string;
    weather: Weather[];
    main: Temperature;
}

export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface Temperature {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
}