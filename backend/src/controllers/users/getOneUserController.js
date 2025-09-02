import getOneUserModels from "../../models/users/getOneUserModel.js"


const GetOneUserController = {
    async getOneUser(req, res) {
        try {
            const id_user = req.params.id;
            const user = await getOneUserModels.getUser(id_user);
            if (!user) {
                return res.status(404).json({
                success: false,
                msg: "User not found"
                });
            }
            
            res.status(200).json({  
                success: true,
                msg: "User retrieved successfully", 
                user
            });
        } catch (error) {
            console.error('GetAllUsers Error:', error);
            res.status(500).json({ 
                success: false,
                error: true, 
                msg: "Internal server error, try later" 
            });
        }
    }
}

export default GetOneUserController;