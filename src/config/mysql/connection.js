import env from '../env/env';

const connection = {
    host     : env.DB_HOST,
    user     : env.DB_USERNAME,
    password : env.DB_PASSWORD,
    database : env.DB_DATABASE
}

export default connection;