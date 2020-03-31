import multer from "multer";

// SET STORAGE
let imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        const userId = req.body.userId
        cb(null, `uploads/user-images/${userId}`);
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname + "-" + Date.now());
    }
});

let imageUpload = multer({
    storage: imageStorage,
    transformation: [{ width: 200, height: 200, crop: "limit" }],
    fileFilter: function (req, file, callback) {
        var ext = file.mimetype;
        if (ext !== 'image/png' && ext !== 'image/jpg' && ext !== 'image/gif' && ext !== 'image/jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits: { fileSize: 1024 * 1024 }
}).single('image')

export { imageUpload };
