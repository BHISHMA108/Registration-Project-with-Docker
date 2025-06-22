import { useState } from "react";
import axios from "axios";


function Homepage() {
    const [submit, setSubmit] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [textarea, setTextarea] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit(true);

        const userData = {
            name: name, 
            age: age,
            textarea: textarea
        }
        
        try{
            const response = await axios.post('http://localhost:777/api/users/register', userData);
            // Clear all inputs
            setName("");
            setAge("");
            setTextarea("");

            alert("Form Submitted Successfully!")
        }catch (error){
            console.error("Error submitting form:", error);
            alert("Failed to submit the form. Please try again.");
        }

    };

    return (
        <div className="bg-white text-black align-center flex flex-col justify-center items-center h-screen w-full">
            <h1 className="md:text-6xl text-4xl text-semibold">Welcome to the HomePage</h1>
            <br />
            <h2 className="md:text-3xl text-xl">Please Register Here to get Started!</h2>

            <form 
            onSubmit={handleSubmit} 
            className="flex flex-col justify-left items-left gap-5 mt-10 border-2 p-5 rounded-lg">
                <div className="flex md:flex-row flex-col justify-left items-center gap-7">
                    <p>Enter the Name</p>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text" 
                        placeholder="Man" 
                        className="border-black border-2 rounded" 
                    />
                </div>

                <div className="flex md:flex-row flex-col justify-left items-center gap-4">
                    <p>How old are you?</p>
                    <input
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        type="number" 
                        placeholder="101" 
                        className="border-black border-2 rounded"  
                    />
                </div>

                <div className="flex md:flex-row flex-col justify-left items-center gap-2">
                    <p>Enter the thoughts <br />coming to your <br />mind</p>
                    <input
                        value={textarea}
                        onChange={(e) => setTextarea(e.target.value)}
                        type="text" 
                        placeholder="I have great faith in God" 
                        className="border-black border-2 rounded flex flex-row justify-right items-right"  
                    />
                </div>
                
                <div className="flex flex-row justify-center">
                    <button 
                        type="submit" 
                        className="border-2 border-black px-3 rounded-lg bg-blue-200 hover:bg-blue-300 transition duration-300 ease-in-out"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Homepage;