import bcrypt from 'bcrypt';

(async () => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);
    const password = await bcrypt.hash('password', 10);
    console.log(password);
})();
