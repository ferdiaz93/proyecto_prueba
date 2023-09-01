const getAll = async (req, res) => {
    res.json({ message: "TODAS LAS CAMISETAS" });
};

const create = async (req, res) => {
    res.json({ message: "CREANDO CAMISETA" });
};

module.exports = {
    getAll,
    create,
};