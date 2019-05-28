import { Pool } from 'pg';
import { ForbiddenError } from 'apollo-server';

class PostgresAPI extends Pool {
  constructor(config) {
    super(config);
    this.on('connect', () => {
      console.log('connected to the database');
    });
  }

  createUser = async ({email, password, salt} = {}) => {
    // TODO check for uniqueness before creating an count
    const user = await this.query(
        `
        INSERT INTO user_details(email, password, salt) 
        VALUES($1, $2, $3)
        RETURNING user_id, email
        `,
        [email, password, salt]
    )
    .then((res) => res.rows[0])
    .catch((err) => err.message);
    return this.userReducer(user)
  };

  getAllUsers = async () => {
    const user = await this.query(`SELECT * FROM user_details`)
    .then((res) => res.rows)
    .catch(err => console.error(err.message, err.stack));
    return user.map((user) => this.userReducer(user));
  };

  getUser = async (id) => {
    const user = await this.query(`SELECT * FROM user_details WHERE user_id=$1`, [id])
    .then((res) => res.rows[0])
    .catch(err => console.error(err.message, err.stack));
    return this.userReducer(user)
  };

  userReducer = (user) => {
    if (typeof user === "string") {
      throw new ForbiddenError(user);
    }
    const { user_id, email } = user;
    return {
      id: user_id,
      email,
    }
  };
}

export default PostgresAPI;
