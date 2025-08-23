import pool from "../../middleware/connection.js";

const getOneCleaningModels = {
    async getOneCleaning(id_cleaning){
        try {
            console.log(id_cleaning)
            const query = 'SELECT * FROM cleaning WHERE id_cleaning = $1';
            const result = await pool.query(query, [id_cleaning]);
            return result.rows[0] || null;
                       
        } catch (error) {
            console.error('GetUser Error:', error);
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getOneCleaningModels;