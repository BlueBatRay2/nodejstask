const crypto = require('crypto');

const computeHashAndSize = (stream) => new Promise((resolve, reject) => {
    const hash = crypto.createHash('sha1');
    let size = 0; // Initialize size

    stream.on('data', chunk => {
        hash.update(chunk);
        size += chunk.length; // Update size with chunk length
    });

    stream.on('end', () => resolve({digest: hash.digest('hex'), size}));
    stream.on('error', reject);
});


module.exports = { computeHashAndSize };
