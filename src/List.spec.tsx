import { render, waitForElementToBeRemoved, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import List from "./components/List";



describe('List Component', () => {
    it('Should render list items', async () => {
        const { getByText, rerender, queryByText } = render(<List initialItems={['Iri', 'Viri', 'Ficari']} />)

        expect(getByText('Iri')).toBeInTheDocument()
        expect(getByText('Viri')).toBeInTheDocument()
        rerender(<List initialItems={['Fusti']} />)

        expect(await screen.getByText('Fusti')).toBeInTheDocument()
        expect(screen.queryByText('Iri')).not.toBeInTheDocument()
    });

    it('Should be able to add new items to the list', async () => {
        const { getByTestId, getByPlaceholderText, findByText } = render(<List initialItems={[]} />)

        const addButton = getByTestId('button')
        const addedItem = getByPlaceholderText('Novo Item')

        await userEvent.type(addedItem, 'Mardel')
        await userEvent.click(addButton)
        expect(await findByText('Mardel')).toBeInTheDocument()

    })

    it('Shoul be able to remove from the list', async () => {
        const { getAllByTestId, queryByText } = render(<List initialItems={['Iri', 'Viri', 'Ficari']} />)

        const removeButton = getAllByTestId('removeButton')
        userEvent.click(removeButton[0])
        await waitForElementToBeRemoved(() => {
            return queryByText('Iri')
        })
    })



})