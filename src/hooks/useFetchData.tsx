import { useEffect, useState } from 'react';
import { type Dish } from '../types/Dish';

export default function useFetchData() : Dish[] { 
    const  URL = 'https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json';

    const [data, setData] = useState<Dish[]>([]);

    useEffect(() => { 
        fetch(URL)
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error al obtener datos:', error));
    }, []);

    return data;

}