import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from './Blog'

test(`renders blog's title and author`, () => {
    const blog = {
        title: 'this is blog render testing',
        author: 'tester',
        url: 'url.com',
        likes: 100,
    }

    const component = render(<Blog blog={blog} />)

    const div = component.container.querySelector('.blog')

    expect(div).toHaveTextContent('this is blog render testing')
    expect(div).toHaveTextContent('tester')
    expect(div).not.toHaveTextContent('url.com')
    expect(div).not.toHaveTextContent('100')
})
test(`show blog details when view button clicked`, () => {
    const blog = {
        title: 'this is blog render testing',
        author: 'tester',
        url: 'url.com',
        likes: 100,
        user: { name: 'Lalit' },
    }

    const component = render(<Blog blog={blog} />)

    const clickButton = component.container.querySelector('.hideviewButton')
    fireEvent.click(clickButton)

    expect(component.container).toHaveTextContent('this is blog render testing')
    expect(component.container).toHaveTextContent('tester')
    expect(component.container).toHaveTextContent('url.com')
    expect(component.container).toHaveTextContent('100')
})

test(`clicking the like button twice calls eventhandler twice `, () => {
    const blog = {
        title: 'this is blog render testing',
        author: 'tester',
        url: 'url.com',
        likes: 100,
        user: { name: 'Lalit' },
    }

    const mockHandler = jest.fn()

    const component = render(<Blog blog={blog} handleLike={mockHandler} />)

    const viewButton = component.container.querySelector('.hideviewButton')
    fireEvent.click(viewButton)

    const likeButton = component.container.querySelector('.likeButton')
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)
})
