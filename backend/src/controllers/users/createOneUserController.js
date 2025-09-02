import createOneUserModel from '../../models/users/createOneUserModel.js';

const CreateOneUserController = {
    async CreateOneUser(req, res) {
        try {
            const create = await createOneUserModel.createUser(req.body);
            if (!create) {
                return res.status(400).json({
                    status: 400,
                    message: "User could not be created",
                })
            }
            return res.status(201).json({
                status: 201,
                message: "User created successfully",
                data: create
            })
        } catch (error) {
            console.error("User could not be created, internal error" + error);
            res.status(500).json({
                success: false,
                error: true,
                msg: "Internal server error, try later"
            })
        }
    }
}

export default CreateOneUserController;