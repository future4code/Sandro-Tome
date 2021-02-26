import React from 'react'
import Header from '../../components/Header'
import useProtectedPage from '../../hooks/useProtectedPage'

export const PostPage = () => {
    useProtectedPage()
    return (
        <div>
            <Header/>
            <h1>Post</h1>
        </div>
    )
}
