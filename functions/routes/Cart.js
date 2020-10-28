let express = require('express');
let router = express.Router();
const Shop = require('../controllers/Shop');
const CouponRoute = require('../routes/Coupon.js');
const AddonsRoute = require('../routes/Addons.js');

router.use('/coupon', CouponRoute);

router.use('/addons', AddonsRoute);

router.post("/:packageId/:currency", (req, res) => {
    const { packageId, currency } = req.params;
    Shop.createCart(packageId, currency).then((cartId) => {
        res.json({ cartId });
    }).catch((error) => {
        res.status(error.status || 500).send(error)
    })
});

router.get('/:cartId', (req, res) => {
    const { cartId } = req.params;
    Shop.getCart(cartId).then((cartInfo) => {
        res.json(cartInfo);
    }).catch((error) => {
        res.status(error.status || 500).send(error);
    })
})

router.put("/:cartId", (req, res) => {
    const { cartId } = req.params;
    const { packageId, currency } = req.body;
    if(!packageId || !currency) res.status(401).json({ message: "Parameters missing." })
    Shop.updateCart(packageId, currency, cartId).then(() => {
        res.json({ packageId, currency, cartId });
    }).catch((error) => {
        res.status(error.status || 500).send(error);
    });
});

module.exports = router;