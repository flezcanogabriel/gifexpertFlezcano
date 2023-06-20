import { useEffect, useState } from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';



export const GifGrid = ({ category }) =>  {

    const {images, isLoading} = useFetchGifs( category );
    
    // const [images, setImages] = useState([]);

    // useEffect( () => {
    //     getGifs( category )
    //     .then( newImages => setImages(newImages));
    // }, [])

    // no se debe colocar un llamado a una funcion en un funtional componet 
    // dado cada vez que se renderice el componente, se vuelve a ejecutar la funcion y se vuelve a realizar el llamando http
    // getGifs( category ); 

    return (
        <>
            <h3>{ category }</h3>
            { isLoading && <h2>CARGANDO..</h2>}
            <div className='card-grid'>
                { images.map( (image) => (
                    <GifGridItem 
                        key={image.id} 
                        {...image}/>
                    ))
                }
            </div>
        </>
    )

}
