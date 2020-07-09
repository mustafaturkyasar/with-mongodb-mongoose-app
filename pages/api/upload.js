var multer = require("multer");

export const config = {
    api: {
        bodyParser: false,
    },
};

const storage2 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.filename}-${Date.now()}`);
    },
});

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + "-" + Date.now() + ".pdf");
    },
});
var upload = multer({ storage: storage });

export default async function getPeople(req, res) {

    // const { Id } = req.body;
    let Id = 10;
    //const path = req.file.path;
    upload.single  ("video") (req, {}, (err) => {

        res.send(req.file.path);

    });

}
