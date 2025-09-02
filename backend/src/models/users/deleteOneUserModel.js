import pool from "../../middleware/connection.js";

const DeleteOneUserModel = {
    async deleteUser(id) {
        try {
            const query = 'DELETE FROM users WHERE id_user = $1 RETURNING *';
            const values = [id];
            const result = await pool.query(query, values);
            return result.rows[0];
        } catch (error) {
            console.error("Error to delete user" + error);
            throw error;
        }
    }
}
export default DeleteOneUserModel;