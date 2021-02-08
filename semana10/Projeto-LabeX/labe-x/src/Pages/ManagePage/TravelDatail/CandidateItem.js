import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { IconButton, ListItem, ListItemSecondaryAction, ListItemText } from "@material-ui/core";
import axios from 'axios';

const CandidateItem = (props) => {
    const decideCandidate = (approve) => {
      const body = {
        approve: true
      }
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sandro-epps/trips/${props.travelId}/candidates/${props.candidate.id}/decide`, body, {
        headers: {
          auth: window.localStorage.getItem('token')
        }
      })
    }

    const approveCandidate = () => {
      console.log("aprovado")
      decideCandidate(true)
    }

    const reproveCandidate = () => {
      console.log("reprovado")
      decideCandidate(false)
    }

    return <ListItem>
    <ListItemText primary={props.candidate.name} />
    <ListItemSecondaryAction>
      <IconButton onClick={approveCandidate}>
        <ThumbUpIcon />
      </IconButton>
      <IconButton onClick={reproveCandidate}>
        <ThumbDownIcon />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>;
}
 
export default CandidateItem