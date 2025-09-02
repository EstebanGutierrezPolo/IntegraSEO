import pool from '../../middleware/connection.js';

const UpdateOneUserModel = {
    async updateUser(id_user, userData){
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
                id_document_type,
                id_role,
                id_status
            } = userData;
            const query = `
            UPDATE users 
            SET first_name = $1,
                second_name = $2,
                first_surname = $3,
                second_surname = $4,
                email = $5,
                phone_number = $6,
                date_of_birth = $7,
                identification_number = $8,
                user_password = $9,
                hire_date = $10,
                id_document_type = $11,
                id_role = $12,
                id_status = $13
            WHERE id_user = $14
            RETURNING *;
            `;

            const values = [
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
                id_document_type,
                id_role,
                id_status,
                id_user // from param
            ];
            
            const result = await pool.query(query, values)
            return result.rows[0]|| null;
        } catch (error) {
            console.error("Error to update user" + error)
        }
    }
}

export default UpdateOneUserModel;