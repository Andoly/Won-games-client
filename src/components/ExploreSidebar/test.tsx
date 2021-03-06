import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import items from './mock'

import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'

describe('<ExploreSidebar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /system/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })
  it('should render inputs', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })
  it('shoud render the filter button', () => {
    renderWithTheme(<ExploreSidebar items={items} onFilter={jest.fn()} />)
    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })
  it('shoud check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={jest.fn()}
      />
    )
    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()

    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })
  it('shoud filter with initial values', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSidebar
        items={items}
        initialValues={{ windows: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ windows: true, sort_by: 'low-to-high' })
  })
  it('shoud filter with checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('checkbox', { name: /windows/i }))
    userEvent.click(screen.getByRole('checkbox', { name: /linux/i }))
    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({
      windows: true,
      linux: true,
      sort_by: 'low-to-high'
    })
  })
  it('shoud altern between radio options', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('radio', { name: /low to high/i }))
    userEvent.click(screen.getByRole('radio', { name: /high to low/i }))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })
})
