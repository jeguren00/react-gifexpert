import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../components";

describe('pruebas con componente addcategory', () => {
    const inputValue = "fallout";

    test('match con el snapshot', () => { 
        const onAddCategory = jest.fn();
        const {container} = render(<AddCategory onAddCategory={onAddCategory} />);

        expect(container).toMatchSnapshot();
     });


    test('debe de cambiar del input', () => { 
        render(<AddCategory onAddCategory={() => {}} />);
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: inputValue}});

        expect(input.value).toBe(inputValue);
     });

     test('debe de llamar onAddCategory si el input recibe un valor ', () => {
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onAddCategory).toHaveBeenCalled();
        expect(onAddCategory).toHaveBeenCalledTimes(1);
        expect(onAddCategory).toHaveBeenCalledWith(inputValue);
     });

     test('no debe de llamar la funcion si el input esta vacio', () => { 
        const onAddCategory = jest.fn();
        render(<AddCategory onAddCategory={onAddCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: ''}});
        fireEvent.submit(form);
        expect(onAddCategory).toHaveBeenCalledTimes(0);
      });

 })