import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import JSQuestions from '../data/JSQues'
import { useState } from "react";
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
        className="m-4"
      >
        <AccordionSummary
          aria-controls={`panel${item.index}-content`}
          id={`panel${item.index}-header`}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>{item.question}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {item.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
      ))
    }
    </>
  );
};
export default Questions;
