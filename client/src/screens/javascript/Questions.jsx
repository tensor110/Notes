import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import axios from 'axios'
import JSQuestions from "../../data/JSQues";
import Filter from "../../components/Filter";
import Search from "../../components/Search";
import AddQuestion from "../../components/AddQuestion";
import Navbar from '../../components/Navbar'

const Questions = () => {
  const [questions, setQuestions] = useState([]);
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
      const fetchQuestions = async () => {
        try {
          const response = await axios.get("https://notes-backend-pearl.vercel.app/questions");
          const data = response.data
          const query = searchQuery.toLowerCase();
          const filtered = data.filter((item) => {
                const matchesDifficulty = !selectedDifficulty || item.difficulty === selectedDifficulty;
                const matchesSearchQuery = item.question.toLowerCase().includes(query);
                return matchesDifficulty && matchesSearchQuery;
              });
          setQuestions(filtered);
        } catch (error) {
          console.error("Error fetching questions:", error);
        }
      };
      fetchQuestions();
    }, [searchQuery, selectedDifficulty]);

  return (
    <>
      <Navbar />
      <Filter
        onFilter={filterQuestionsByDifficulty}
        onClearFilter={clearFilter}
        selectedDifficulty={selectedDifficulty}
      />
      <Search
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      {questions.map((item, index) => (
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
      <div className="absolute bottom-5 right-10 z-20 bg-blue-600 rounded-full">
        <AddQuestion />
      </div>
    </>
  );
};
export default Questions;
