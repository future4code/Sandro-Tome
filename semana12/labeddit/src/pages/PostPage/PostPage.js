import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import styled from 'styled-components'
import useProtectedPage from '../../hooks/useProtectedPage'
import { LinearProgress } from '@material-ui/core'
import { BASE_URL } from '../../constants/urls'
import axios from 'axios'
import { CardFeed } from '../../components/CardFeed'

const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`

export const PostPage = () => {
    useProtectedPage()
    const [postDetail, setPostDetail] = useState(null)
    const [loading, setLoading] = useState(false)
    const params = useParams()
    

    useEffect(() => {
        const axiosConfig = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        setLoading(true)
        axios.get(`${BASE_URL}/posts/${params.postId}`, axiosConfig).then((response) =>{
            setPostDetail(response.data.posts)
            setLoading(false)
        })
    }, [])

    return (
      <div>
        <Header />
        {loading && <LinearProgress />}
        <FeedContainer>
          <h1>Post</h1>{/* A linha de baixo não esta lendo a props do Card */}
          {/* { postDetail !== null && <CardFeed post={postDetail}/> } */}
        </FeedContainer>
      </div>
    );
}
