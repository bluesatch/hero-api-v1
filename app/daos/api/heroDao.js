const con = require('../../config/dbconfig')

const heroDao = {
    table: 'hero',
    ...require('../daoCommon')
}

module.exports = heroDao