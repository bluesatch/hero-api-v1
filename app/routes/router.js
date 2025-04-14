// localhost:3000
// 1a
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000

// 2
router.use(express.static('public'))

// individual routes
router.use('/api/hero', require('./api/heroRoutes'))

// 3 
// router.get(path, callback function)
router.get('/', (req, res)=> {
    res.render('pages/home', {
        title: 'Home',
        name: 'My Hero Website'
    })
})

// 1b
module.exports = router