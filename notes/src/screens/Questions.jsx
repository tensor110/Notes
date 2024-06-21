import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from 'react-markdown';
import { useState } from "react";
import JSQuestions from '../data/JSQues'
import Filter from "../components/Filter";

const Questions = () => {
  const [expanded, setExpanded] = useState(-1);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

//   To open only one question at a time 
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : -1);
  };

//   To set a specific difficulty problem 
  const filterQuestionsByDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
  };

//   To clear the filters 
  const clearFilter = () => {
    setSelectedDifficulty(null);
  };

//   To filter a specific difficulty problems
  const filteredQuestions = selectedDifficulty
    ? JSQuestions.filter((item) => item.difficulty === selectedDifficulty)
    : JSQuestions;

  const markdownText = `
    ![Hoisting Example](https://images.pexels.com/photos/26159411/pexels-photo-26159411/free-photo-of-a-street-with-cars-parked-in-front-of-buildings.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)
    
    Here is some text explaining the image.
  `;

  return (
    <>
     <Filter
        onFilter={filterQuestionsByDifficulty}
        onClearFilter={clearFilter}
        selectedDifficulty={selectedDifficulty}
      />
    {
      filteredQuestions.map((item, index)=>(
        <Accordion
        key={index}
        expanded={expanded === index}
        onChange={handleChange(index)}
        className="m-1"
      >
        <AccordionSummary
          aria-controls={`panel${item.index}-content`}
          id={`panel${item.index}-header`}
          expandIcon={<ExpandMoreIcon />}
          sx={{
            bgcolor: 'black',
            color: 'white',
          }}
        >
          <Typography className="bg-black">{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-700 text-white overflow-x-auto">
          <Typography component='pre'>
            {item.answer}
          </Typography>
          <ReactMarkdown style={{display: 'flex'}}>
            {item.image}
          </ReactMarkdown>
        </AccordionDetails>
      </Accordion>
      ))
    }
    </>
  );
};
export default Questions;
