import pool from '../../middleware/connection.js'

const getAllCleaningsModels = {
    async allCleaning() {
        try {
            const query = 'SELECT * FROM cleaning';
            const result = await pool.query(query);
            return result.rows || null; 
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getAllCleaningsModels;