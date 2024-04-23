import { fireEvent, render,screen } from "@testing-library/react"
import { GifItem } from "../../components/GifItem";

describe('pruebas con el componente gifitem', () => { 
    const title = "Imagen de prueba";
    const url = "https://upload.wikimedia.org/wikipedia/commons/7/71/1885Benz.jpg";

    test('match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
     });

     test('mostrar la imagen con el url y alt indicado', () => { 
        render(<GifItem title={title} url={url}/>);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('debe de mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
      })
 })