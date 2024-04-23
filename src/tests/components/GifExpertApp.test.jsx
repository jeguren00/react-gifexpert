import { fireEvent, render,screen } from "@testing-library/react"
import { GifExpertApp, onAddCategory } from "../../GifExpertApp";


describe('pruebas en GifExpertApp', () => {
    const inputValue = 'fallout';
    test('to match snapshot', () => { 
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
     });

     test('añadir una categoria al input', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});
        expect(input.value).toBe(inputValue);    
    });

});