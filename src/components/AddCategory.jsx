import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) {
            return;
        }
        onAddCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
             />
        </form>
    )
}