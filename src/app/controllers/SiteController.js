const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../ulti/mongoose')

class SiteController {
    async index(req, res, next) {
        // try {
        //     const courses = await Course.find({});
        //     res.json(courses);
        // } catch (error) {
        //     next(error)
        // }

        Course.find({})
            .then(courses => {
                res.render('home', {courses: multipleMongooseToObject(courses)})
            })
            .catch(error => next(error));
    }

}

module.exports = new SiteController();
