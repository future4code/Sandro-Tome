import React, { useEffect, useState} from 'react'
import { CardFeed } from '../../components/CardFeed'
import Header from '../../components/Header'
import styled from 'styled-components'
import useProtectedPage from '../../hooks/useProtectedPage'
//import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { LinearProgress } from '@material-ui/core'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`

export const FeedPage = () => {
    useProtectedPage()
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        setLoading(true)
        axios.get(`${BASE_URL}/posts`, axiosConfig).then((response) =>{
            setPosts(response.data.posts)
            setLoading(false)
        })
    }, [])

    return (
      <div>
        <Header />
        {loading && <LinearProgress />}
        <FeedContainer>
          <h1>Feed</h1>
          {posts.map((post) => {
            return (<CardFeed post={post}/>)
          })}
        </FeedContainer>
      </div>
    );
}