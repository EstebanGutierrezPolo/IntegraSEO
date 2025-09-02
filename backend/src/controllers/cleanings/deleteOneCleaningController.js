import DeleteOneCleaningModel from "../../models/cleanings/deleteOneCleaningModel.js";

const DeleteOneCleaningController = {
    async deleteOneCleaning(req, res) {
        try{
            const cleaningId = req.params.id;
            const deleteResult = await DeleteOneCleaningModel.deleteOneCleaning(cleaningId);
            if(!deleteResult){
                return res.status(404).json({
                    status: 404,
                    message: "Cleaning not found",
                });
            }
            res.status(200).json({
                message: "Cleaning deleted successfully",
                data: deleteResult
            });
        } catch(error){
            console.error("Error deleting cleaning:", error);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}
export default DeleteOneCleaningController;