module.exports = {
    app: {
        port: process.env.PORT || 4000,
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'chu',
        password: process.env.MYSQL_PASSWORD || 'l0.DqgeWXkHHQQ5g',
        database: process.env.MYSQL_DB || 'empresa'
    }
}