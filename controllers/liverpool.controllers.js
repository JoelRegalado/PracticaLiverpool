
const products = require('../data/products.json');

const search = async (req, res) => {
    const productDisplayName = req.query.productDisplayName;
    const resultado = [];
    products.products.forEach(data => {
        let valor = data.productDisplayName.indexOf(productDisplayName);
        if (valor != -1) {
            resultado.push(data)
        }
    });
    res.status(200).json({
        resultado
    });
}

module.exports = {
    search
}