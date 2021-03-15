import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from '@material-ui/icons/Comment';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50vw",
    margin: '20px 0px 20px 0px'
  },
  expand: {
    marginLeft: "auto",
    
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const CardFeed = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const handleGoToPostPage = () => {
    history.push(`/post/${props.post.id}`);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.post.title}
        subheader={props.post.username}
      />
      <CardContent>
        <Typography variant="body1" color="textPrimary" component="p">
          {props.post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <ThumbUpAltIcon />
        </IconButton>
        <p>{props.post.votesCount}</p>
        <IconButton>
          <ThumbDownAltIcon />
        </IconButton>
        <IconButton>
          <ShareIcon />
        </IconButton>
        <IconButton className={classes.expand} onClick={handleGoToPostPage}>
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};