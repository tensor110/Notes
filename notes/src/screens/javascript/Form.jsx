import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit, watch } = useForm();
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const handleTopic = (event) => {
    const value = event.target.value;
    setTopic(value);
    console.log(value);
  };
  const handleDifficulty = (event) => {
    const value = event.target.value;
    setDifficulty(value);
    console.log(value);
  };
  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  // useEffect(()=>{
  //   const subscription = watch((value)=>{
  //     console.log(value)
  //   })
  //   return () => subscription.unsubscribe()
  // }, [watch])
  // const watchForm = watch()
  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-2 w-2/3"
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex gap-5 w-1/2">
          <label htmlFor="topic" className="text-white font-light w-fit">
            Select Topic
          </label>
          <select
            id="topic"
            {...register("topic")}
            value={topic}
            onChange={handleTopic}
            className="outline-none w-1/2"
          >
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
          </select>
        </div>
        <div className="flex gap-5 w-1/2">
          <label htmlFor="difficulty" className="text-white font-light w-fit">
            Select Difficulty
          </label>
          <select
            id="difficulty"
            {...register("difficulty")}
            value={difficulty}
            onChange={handleDifficulty}
            className="outline-none w-1/2"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <label htmlFor="" className="text-white font-light">
            Question
          </label>
          <input
            type="text"
            {...register("question")}
            id=""
            placeholder="Question"
            className="text-white font-light bg-gray-500 outline-none px-2 py-1 rounded"
          />
        </div>
        <div className="flex flex-col gap-1 w-1/2">
          <label htmlFor="" className="text-white font-light">
            Answer
          </label>
          <textarea
            {...register("answer")}
            id=""
            placeholder="Answer"
            className="text-white font-light bg-gray-500 outline-none px-2 py-1 rounded overflow-auto"
            rows={10}
            cols={60}
          ></textarea>
        </div>
        <button type="submit" className="bg-white w-1/3 py-1 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
