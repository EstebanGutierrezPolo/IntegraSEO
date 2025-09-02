import UpdateOneUserModel from '../../models/users/updateOneUserModel.js';

const UpdateOneUserController = {
    async updateOneUser (req, res){
        try {
            const id_user = parseInt(req.params.id, 10);
            const update = await UpdateOneUserModel.updateUser(id_user, req.body);
            if(!update){
                res.status(404).json({
                    status:404,
                    message: "User not found",
                })
            }
            res.status(200).json({
                status: 200,
                message: "User updated succesfully",
                data: update
        })

        } catch (error) {
            console.error("User could not be updated, internal error" + error);
            res.status(500).json({
                success: false,
                error: true,
                msg: "Internal server error, try later"
            })
        }
    }
}

export default UpdateOneUserController;