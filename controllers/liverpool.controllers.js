
const products = require('../data/products.json');

const search = async (req, res) => {
    const { productDisplayName } = req.body;
    const resultado = [];
    products.products.forEach(data => {
        const valor = data.productDisplayName.indexOf(productDisplayName);
        if (valor === -1) {
            resultado.push(data)
        }
        console.log(valor);
    })

    res.status(200).json({
        resultado
    });
}

module.exports = {
    search
}