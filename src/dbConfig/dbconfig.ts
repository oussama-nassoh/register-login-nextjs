import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'mydatabase',
};

export async function connectToMySQL() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Great! MySQL is connected bro!');
    return connection;
  } catch (error) {
    console.error('MySQL connection ERROR:', error);
    process.exit(1);
  }
}
