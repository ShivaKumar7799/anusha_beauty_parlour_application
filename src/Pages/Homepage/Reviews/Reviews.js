import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image12 from "../../../Assets/Images/image12.jpg"
const peopleReviews = [
  {
    id : 1,
    name : "Radha",
    title : "Excellent Services",
    comment : "I had an absolutely wonderful experience."
  },
  {
    id : 2,
    name : "Bhavani",
    title : "Awesome",
    comment : "The spa is clean and comfortable, I would like to thank you for your wonderful work."
  },
  {
    id : 3,
    name : "Soumya",
    title : "Never seen before, Lovely experience",
    comment : "I have never seen anyone as beautiful as you You make my heart melt."
  },

]

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: "100%", bgcolor: 'background.paper' }}>
      { peopleReviews.map((review,index) => <>
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={Image12} />
        </ListItemAvatar>
        <ListItemText
          primary={review.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {review.name}
              </Typography>
              {review.comment}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </> ) }
    </List>
  );
}