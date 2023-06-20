import { useState } from 'react';
import { AddCategory, GifGrid } from './componets';
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        // console.log(newCategory)
        // categories.push(newCategory); // muta el objeto - no usar
        // setCategories([...categories, 'Valorant'])
        if (categories.includes(newCategory)) return;
        setCategories( cat => [ newCategory, ...cat ] )

    }
    
    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = { onAddCategory }
             />
            { categories.map(( category ) => ( 
                <GifGrid 
                    key = { category }
                    category = { category }  /> 
                )) 
            }
        </>
    )
}
