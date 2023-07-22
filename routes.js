const express = require('express');//routing
const router = express.Router(); //routing
const fs = require('fs');//file stream
const multiparty = require('multiparty');//used to get access to file
const db = require('./db'); //db functions
const hash = require('./hash'); //hash

router.post('/upload', async (req, res, next) => {
    const form = new multiparty.Form();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return next(err);
        }

        //no file uploaded, error out
        if (!files || !files.file || !files.file[0]) {
            return res.status(400).send('No file uploaded');
        }

        //grab first file
        const file = files.file[0];
        const stream = fs.createReadStream(file.path, { encoding: 'binary' });

        try {
            const {digest, size} = await hash.computeHashAndSize(stream);

            console.log(`Hash: ${digest}, Size: ${size}`);

            let result = await db.findUploadByHash(digest);
            if (!result) {
                await db.insertUpload(digest, size);
                result = await db.findUploadByHash(digest);
            }

            res.json(result);
        } catch (err) {
            next(err);
        }
    });
});

module.exports = router;
