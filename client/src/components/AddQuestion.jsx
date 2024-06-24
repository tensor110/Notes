import { Tooltip, IconButton, Link } from "@mui/material";
import {NavLink} from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const AddQuestion = () => {
  return (
    <Tooltip
      title="Add a question"
      placement="right"
      arrow
      enterDelay={200}
      leaveDelay={200}
    >
      <NavLink to='/form'>
        <IconButton>
          <AddIcon sx={{ color: "white" }} />
        </IconButton>
      </NavLink>
    </Tooltip>
  );
};
export default AddQuestion;
