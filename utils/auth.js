const auth = (req, res, next) => {
    if (!req.sessions.logged_in) {
        res.redirect("/login");
    }else {
        next();
    }
};

module.exports = auth;