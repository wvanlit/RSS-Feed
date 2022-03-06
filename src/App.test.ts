import 'reflect-metadata'
import { render } from '@testing-library/svelte'
import { expect } from 'chai'
import App from './App.svelte'

describe('<App>', () => {
  it('renders text', () => {
    const { getByText } = render(App)
    const text = getByText(/RSS Feed Viewer/i)
    expect(document.body.contains(text))
  })
})
