import UpdateOneCleaningModel from "../../models/cleanings/updateOneCleaningModel.js";

const UpdateOneCleaningController = {
    async updateOneCleaning(req, res) {
        try{
            const cleaningId = req.params.id;
            const update = await UpdateOneCleaningModel.updateOneCleaning(cleaningId, req.body);
            if(!update){
                res.status(404).json({
                    status: 404,
                    message: "Cleaning not found",
                });
            }
            res.status(200).json({
                message: "Cleaning updated successfully",
                data: update
                });            
        } catch (error) {
            console.error("Error updating cleaning:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default UpdateOneCleaningController;