const mongoose= require('mongoose');

/**LOCAL BB */
// mongoose.connect('mongodb://localhost:27017/library');

//ATLAS//
// mongoose.connect('mongodb+srv://userone:userone@ictakfiles.gxk2j.mongodb.net/LIBRARYAPP?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/ProjectICTKWebsite?retryWrites=true&w=majority');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    course_title            : String,
    course_image            : String,
    course_short_desc       : String,
    course_long_Desc        : String,
    Reg_Status              : Number,
    Category                : String,
    Rating                  : Number,
    about_course            : String,
    dates                   : String
});

var Coursedata = mongoose.model('course',CourseSchema);

module.exports = Coursedata;