const Course = require('../models/Course');
const { mongooseToObject } = require('../../ulti/mongoose')

class CourseController {
    show(req, res, next) {
        //[GET] /coueses/:slug

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //[GET]
    create(req, res, next) {
        res.render('courses/create')
    }

    //[POST]
    store(req, res, next) {
        // const formData = req.body;
        // formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
        // const course = new Course(formData);
        // course.save()
        //     .then(() => res.redirect('/'))
        //     .catch(error => {

        //     });
        res.json(req.body)
    }
}

module.exports = new CourseController();
