import { useState } from 'react';

export const AddCategory = ( { onNewCategory } ) => {

    const [ inputValue, setInputValue ] = useState()

    const onInputChange = ( event ) => { // se puede desestruccurar a target
        setInputValue( event.target.value );
    }

    const onSubmit = ( event ) => { 
        event.preventDefault();
        if (inputValue.trim().length <= 0) return;
        // setCategories(cat => [inputValue, ...cat])
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gif"
                value={ inputValue }
                // se puede realizar igual a onSubmit
                onChange={ ( event ) => onInputChange( event ) }
            />
        </form>
    )
}


// DEFINIR PROP TYPES PARA INPUT