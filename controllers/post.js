const getPost = (req, res) => {
    res.json({
        type: 'controller 2.0',
        server: 'ExpressJs',
        lenguaje: 'JavaScript',
    });
};

module.exports = {
    getPost,
};
