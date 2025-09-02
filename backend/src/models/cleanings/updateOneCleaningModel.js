import pool from "../../middleware/connection.js";

const UpdateOneCleaningModel = {
    async updateOneCleaning(cleaningId, cleaningData) {
        try {
            const { 
                observations,
                supervisor_comments,
                id_cleaning_type,
                id_user,
                id_zone,
                } = cleaningData;
            const query = `
                UPDATE cleaning 
                SET observations = $1,
                    supervisor_comments = $2,
                    id_cleaning_type = $3,
                    id_user = $4,
                    id_zone = $5
                WHERE id_cleaning = $6
                RETURNING *;
            `;
            const values = [
                observations,
                supervisor_comments,
                id_cleaning_type,
                id_user,
                id_zone,
                cleaningId
            ];
            const result = await pool.query(query, values);
            return result.rows[0] || null;
        } catch (error) {
            console.error("Error in CreateOneCleaningModel:", error);
            throw error;
        }
    }
}

export default UpdateOneCleaningModel;