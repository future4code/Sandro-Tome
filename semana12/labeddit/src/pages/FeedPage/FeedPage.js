import React from 'react'
import { CardFeed } from '../../components/CardFeed'
import Header from '../../components/Header'
import styled from 'styled-components'
import useProtectedPage from '../../hooks/useProtectedPage'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`

export const FeedPage = () => {
    useProtectedPage()
    return (
      <div>
        <Header />
        <FeedContainer>
          <h1>Feed</h1>
          <CardFeed />
        </FeedContainer>
      </div>
    );
}
