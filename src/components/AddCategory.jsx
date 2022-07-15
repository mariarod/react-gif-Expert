import { useState } from "react"



export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('One Punch');
    

    //Para que reciba lo que se escribe en el input
    const onInputChange = ({ target } ) =>  {
       
        setInputValue(target.value);
    }

     //Para que no recargue el formulario
    const onSubmit = (event ) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1) return;

    //tCategories(categories => [ inputValue, ...categories ]);
        setInputValue('');
        onNewCategory( inputValue.trim() );
    }
            return (
            
                <form onSubmit={ onSubmit } >
                    <input
                    type="text"
                    placeholder="Buscar gifs"
                    value={ inputValue }
                    onChange={ onInputChange }
                    />
                </form>
            )
}
