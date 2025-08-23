import getAllCleaningsModels from "../../models/cleanings/getAllCleaningModels.js"

const GetAllCleaningsController = {
    async getAllCleaning(req, res) {
        try {
            const cleanings = await getAllCleaningsModels.allCleaning();
            res.status(200).json({ 
                success: true,
                msg: "Cleanings retrieved successfully", 
                cleanings
            });
        } catch (error) {
            console.error('GetAllCleanings Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default GetAllCleaningsController;