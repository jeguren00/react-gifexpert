import { getGifs } from "../../helpers/getGifs"

describe('pruebas en getGifs', () => { 
    test('debe retornar un array de gifs', async()  => { 
        const gifs = await getGifs('fallout');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
     })
 })