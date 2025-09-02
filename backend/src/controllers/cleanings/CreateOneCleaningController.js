import CreateOneCleaningModel from "../../models/cleanings/CreateOneCleaningModel.js";

const CreateOneCleaningController = {
    async createOneCleaning(req, res) {
        try {
            const result = await CreateOneCleaningModel.createOneCleaning(req.body);
            
            return res.status(201).json({ 
                message: "Cleaning created successfully", 
                id: result 
            });
        } catch (error) {
            console.error("Error creating cleaning:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
};

export default CreateOneCleaningController;