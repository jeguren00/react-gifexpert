import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../hooks/useFetchGifs"

describe('pruebas con el hook useFetchGifs', () => { 
    test('debe regresar el estado inicial', () => { 
        
        const {result} = renderHook( () => useFetchGifs('fallout'));
        const {images, isLoading} = result.current;
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
     });

     test('debe retornar un array de imagenes y isLoading es falso', async() => { 
        
        const {result} = renderHook( () => useFetchGifs('fallout'));
        await waitFor(
            () => expect(result.current.images.length  ).toBeGreaterThan(0),
        );
        const {images, isLoading} = result.current;
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();


     });
})