import DeleteOneUserModel from '../../models/users/deleteOneUserModel.js';;

const DeleteOneUserController = {
    async deleteOneUser(req, res) { 
        try {
            const id = req.params.id;
            const deleted = await DeleteOneUserModel.deleteUser(id);
            if (!deleted) {
                return res.status(404).json({
                    status: 404,
                    message: "User not found",
                })
            }
            return res.status(200).json({
                status: 200,
                message: "User deleted successfully",
                data: deleted
            })
        } catch (error) {
            console.error("User could not be deleted, internal error" + error);
            res.status(500).json({
                success: false,
                error: true,
                msg: "Internal server error, try later"
            })
        }
    }
}

export default DeleteOneUserController;