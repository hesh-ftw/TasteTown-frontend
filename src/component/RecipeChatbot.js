import { useState } from "react";
import axios from "axios";
import { colors } from "@mui/material";

function RecipeChatbot() {
  const [inputs, setInputs] = useState({
    ingredients: "",
    cuisines: "",
    dietRestrictions: "",
  });

  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("http://localhost:8080/chatbot", inputs);
       
      //extract the text form the response object 
      const textResponse =res.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      console.log(res.data);
      setResponse(textResponse);

    } catch (error) {
      setResponse("Error fetching recipe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black p-5">
      <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-200 text-center mb-4">  Ask recipe from TasteTown AI! </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          
            type="text"
            name="ingredients"
            placeholder="Enter ingredients"
            value={inputs.ingredients}
            onChange={handleChange}
            className="w-full p-2  rounded bg-gray-700  "
        
            required
          />
          <input
            type="text"
            name="cuisines"
            placeholder="Enter preferred cuisine"
            value={inputs.cuisines}
            onChange={handleChange}
            className="w-full p-2   rounded rounded bg-gray-700 "
          />
          <input
            type="text"
            name="dietRestrictions"
            placeholder="Enter dietary restrictions"
            value={inputs.dietRestrictions}
            onChange={handleChange}
            className="w-full p-2 rounded rounded bg-gray-700 "
          />
          <button
            type="submit"
            className="w-full bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
          >
            {loading ? "Generating Recipe..." : "Get Recipe"}
          </button>
        </form>

        {response && (
          <div className="whitespace-pre-line text-gray-200 p-4 mt-4 p-4 bg-gray-700 rounded " >
            <h2 className="  "sx={{color:'black'}}>===============Recipe===============</h2> <br/>
            <p className="">{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipeChatbot;
