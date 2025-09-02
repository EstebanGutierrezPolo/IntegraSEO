import pool from "../../middleware/connection.js";

const CreateOneCleaningModel = {
    async createOneCleaning(cleaningData) {
        const {
            observations,
            supervisor_comments,
            id_cleaning_type,
            id_user,
            id_zone,
        } = cleaningData;

        const query = `
            INSERT INTO cleaning 
            (observations, supervisor_comments, id_cleaning_type, id_user, id_zone) 
            VALUES ($1, $2, $3, $4, $5) RETURNING *
        `;

        const values = [
            observations,
            supervisor_comments,
            id_cleaning_type,
            id_user,
            id_zone
        ];

        try {
            const result = await pool.query(query, values);
            return result.rows[0].id;
        } catch (error) {
            console.error("Error in CreateOneCleaningModel:", error);
            throw error;
        }
    }
}

export default CreateOneCleaningModel;