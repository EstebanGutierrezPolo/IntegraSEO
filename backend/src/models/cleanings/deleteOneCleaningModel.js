import pool from "../../middleware/connection.js";

const DeleteOneCleaningModel = {
    async deleteOneCleaning(cleaningId) {
        try {
            const query = `DELETE FROM cleaning WHERE id_cleaning = $1 RETURNING *;`;
            const values = [cleaningId];
            const result = await pool.query(query, values);
            return result.rows[0] || null;
        }catch (error) {
            console.error("Error in DeleteOneCleaningModel:", error);
            throw error;
        }
    }
}
export default DeleteOneCleaningModel;