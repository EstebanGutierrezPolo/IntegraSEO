import getOneCleaningModels from "../../models/cleanings/getOneCleaningModel.js";

const GetOneCleaningController = {
    async getOneCleaning (req, res){
        try {
            const id_cleaning = req.params.id;
            const cleaning = await getOneCleaningModels.getOneCleaning(id_cleaning);
            res.status(200).json({  
                success: true,
                msg: "Cleaning retrieved successfully", 
                cleaning
            });
        } catch (error) {
            console.error('GetOneCleaning Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default GetOneCleaningController;