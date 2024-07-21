const getGoals = (req, res) => {
    res.status(200).json({ message: 'GET Goal'});
}

module.exports = {
    getGoals,
}