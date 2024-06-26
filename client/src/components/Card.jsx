import { Box, Card, CardContent, CardActions, Typography, Button, CardMedia } from "@mui/material";
import { NavLink } from "react-router-dom";

const MuiCard = (props) => {
  return (
    <Box>
      <Card elevation={3} className='w-80 h-96 flex flex-col justify-between transition duration-1000 ease-in-out transform hover:scale-[1.01] hover:-translate-y-1'>
        <CardMedia
          component="img"
          image={props.thumbnail}
          alt={props.title}
          className="aspect-video"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {props.description}
            </pre>
          </Typography>
        </CardContent>
        <CardActions>
          <NavLink to={props.learn_path}>
            <Button size="small">Learn More</Button>
          </NavLink>
          <NavLink to={props.question_path}>
            <Button size="small">Interview Questions</Button>
          </NavLink>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
