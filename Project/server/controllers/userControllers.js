import model from "../models/user.js";

const register = async (req , response)=>{
    //1.Get the data from the form
    const { name , age , textarea } = req.body;

    if(!name || !age ){
        return response.status(400).json({message : "PLZ fill all the details"});
    }

    try {
        //2.Create a new user
        const user = new model({
            name,
            age,
            textarea: textarea || "", // Optional field
        });

        const insertUser = await user.save();

        //3.Send the response
        return response.status(201).json({
            message:"User registered successfully",
            user: insertUser
        });
    }catch (error){
        console.error(`Error : ${error.message}`);
        if(error.code == "ValidataionError"){
            return response.status(400).json({message: error.message});
        }
        response.status(500).json({message: "Server Error"})
    }
}


const fetchdata = async (request , response)=> {
    try {
        const users = await model.find({});
        return response.status(200).json(users);
    }catch(error){
        console.error(`Error : ${error.message}`);
    }
}

export {fetchdata, register};
// 💗💕This is the controller file where we handle the logic of the application