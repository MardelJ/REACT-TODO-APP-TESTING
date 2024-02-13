import { render, waitForElementToBeRemoved, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ToDo from "./ToDo";



describe('ToDo Component Test Suite', () => {


    it('Should be able to add a ToDo', async () => {
        // Selecting the component to be rendered so that i can perform tests over it
        const renderTodo = () => render(<ToDo initialItems={[]} />)

        const { findByText, getByTestId } = renderTodo()
        //Expected behaviour: 
        /**
         * Receive a input and add it to the the ToDo List
         */

        //Getting the button to add
        const addToDoButton = getByTestId('addToDoButton')
        //Getting the input field
        const inputToDoField = getByTestId('inputField')

        //using userEvent to simulating the user interactions with the app
        //using await because the user input usually expects a refresh to load the page, so to ensure that or simulate the state mutation i used await
        await userEvent.type(inputToDoField, "Ir a Namaacha")
        await userEvent.click(addToDoButton)

        expect(await findByText("Ir a Namaacha")).toBeInTheDocument()

    })

    it('Should be able to render the ToDo List', () => {

        const renderTodo = () => render(<ToDo initialItems={['Acordar', 'Dormir']} />)

        const { getAllByTestId, getByText } = renderTodo()

        const elements = getAllByTestId('toDo')

        expect(elements).toHaveLength(2)

        expect(getByText('Acordar')).toBeInTheDocument()
        expect(getByText('Dormir')).toBeInTheDocument()
    })

})