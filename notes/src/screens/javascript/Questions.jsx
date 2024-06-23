import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import JSQuestions from "../../data/JSQues";
import Filter from "../../components/Filter";
import Search from "../../components/Search";

const Questions = () => {
  const [expanded, setExpanded] = useState(-1);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState(JSQuestions);

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

    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
    };

    useEffect(() => {
      const query = searchQuery.toLowerCase();
      const filtered = JSQuestions.filter((item) => {
        const matchesDifficulty = !selectedDifficulty || item.difficulty === selectedDifficulty;
        const matchesSearchQuery = item.question.toLowerCase().includes(query);
        return matchesDifficulty && matchesSearchQuery;
      });
      setFilteredQuestions(filtered);
    }, [searchQuery, selectedDifficulty]);


  return (
    <>
      <Filter
        onFilter={filterQuestionsByDifficulty}
        onClearFilter={clearFilter}
        selectedDifficulty={selectedDifficulty}
      />
      <Search
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      {filteredQuestions.map((item, index) => (
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
              bgcolor: "black",
              color: "white",
            }}
          >
            <Typography className="bg-black">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails className="bg-gray-700 text-white overflow-x-auto">
            <Typography component="pre">{item.answer}</Typography>
            <ReactMarkdown style={{ display: "flex" }}>
              {item.image}
            </ReactMarkdown>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
export default Questions;
