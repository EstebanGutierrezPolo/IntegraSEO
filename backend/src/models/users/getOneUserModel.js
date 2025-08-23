import pool from '../middleware/connection.js'

const getOneUserModels = {
    async getUser(id_user) {
        try {
            const query = 'SELECT * FROM users WHERE id_user = $1';
            const result = await pool.query(query, [id_user]);
            return result.rows[0] || null              
        } catch (error) {
            throw new Error('Database query failed: ' + error.message);
        }
    }
}

export default getOneUserModels;