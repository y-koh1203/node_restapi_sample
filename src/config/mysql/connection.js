import env from '../env/env';

const connection_config = {
    host     : env.DB_HOST,
    user     : env.DB_USERNAME,
    password : env.DB_PASSWORD,
    database : env.DB_DATABASE
}

export default connection_config;