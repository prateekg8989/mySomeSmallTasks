const crypto = require('crypto');

const algorithm = 'aes-192-cbc';
const password = 'MY lms rebreanding application';
// Use the async `crypto.scrypt()` instead.
const key = crypto.scryptSync(password, 'salt', 24);
// The IV is usually passed along with the ciphertext.
const iv = Buffer.alloc(16, 0); // Initialization vector.

const decipher = crypto.createDecipheriv(algorithm, key, iv);

// Encrypted using same algorithm, key and iv.
const encrypted =
  '8e7a2105a92f1780de423b6499c48a6ccc7ba812f042700b6794c55f56218e82';
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);