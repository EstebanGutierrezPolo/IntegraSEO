import pool from "../../middleware/connection.js";

const createOneUserModel = {
    async createUser(userData) {
        try {
            const {
                first_name,
                second_name,
                first_surname,
                second_surname,
                email,
                phone_number,
                date_of_birth,
                identification_number,
                user_password,
                hire_date,
                last_login,
                id_document_type,
                id_role,
                id_status
            } = userData;

            const query = `INSERT INTO users 
            (first_name, second_name, first_surname, second_surname, email, phone_number, date_of_birth, identification_number, user_password, hire_date, last_login, id_document_type, id_role, id_status) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING *`;
            const values = [first_name, second_name, first_surname, second_surname, email, phone_number, date_of_birth, identification_number, user_password, hire_date, last_login, id_document_type, id_role, id_status];
            const result = await pool.query(query, values);
            return result.rows[0];
        }catch(error) {
            console.error("Error to create user" + error);
            throw error;
        }
    }
}
export default createOneUserModel;