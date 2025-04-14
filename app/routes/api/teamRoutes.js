const express = require('express')
const router = express.Router()

const dao = require('../../daos/api/teamDao')

// findAll
// locahost:3000/api/team
router.get('/', (req, res)=> {
    dao.findAll(res, dao.table)
})

router.get('/team/:team', (req, res)=> {
    dao.findHeroesByTeam(res, dao.table, req.params.team)
})

//sort 
router.get('/sort', (req, res)=> {
    dao.sortGeneral(res, dao.table)
})
// findById
router.get('/:id', (req, res)=> {
    dao.findById(res, dao.table, req.params.id)
})

module.exports = router