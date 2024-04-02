import { render, screen, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'

describe('Pruebas en el componente <GifExpertApp/>', () => {
    const inputValue = 'Saitama'
    test('El componente se renderiza correctamente', () => {
        render(<GifExpertApp />)
    })

    test('Comprobar que al escribir en el input funciona', () => {
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Saitama' } })
        expect(input.value).toBe('Saitama')
    })

    test('Comprobar que si se manda una categoria dos veces, a la segunda no pase', () => {
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form)
        fireEvent.input(input, { target: { value: inputValue } })
        // fireEvent.submit(form)
        expect(input.value).toBe(inputValue)
        screen.debug()
    })

    test('debe agregar nueva categoria', () => {
        // Renderizamos el sujeto de pruebas y obtenemos el container
        const { container } = render(<GifExpertApp />)

        // Obtenemos el input y el form
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        // Disparo los eventos para añadir las categorias

        fireEvent.input(input, { target: { value: inputValue } })
        fireEvent.submit(form) // Se agrega 'Saitama'

        fireEvent.input(input, { target: { value: inputValue + '2' } })
        fireEvent.submit(form) // Se agrega 'Saitama2'

        // Utilizamos el container para buscar las categorias agregadas y verificamos que se hayan agregado solo 2
        expect(container.getElementsByClassName('card-grid').length).toBe(2)
        screen.debug()
    })
})

// probar sobre todo onAddCategory
// probar que pasa si escribes en el input
// probar que pasa si mandas una categoria que ya existe
