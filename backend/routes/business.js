const express = require('express');
const router = express.Router();
const businessController = require('../controller/business.js')
const storeController = require('../controller/stores')

router.route('/')
    .get(businessController.getBusinesses)
    .post(businessController.createBusiness);

router
    .route('/:id')
    .get(businessController.getBusiness)
    .delete(businessController.deleteBusiness)
    .put(businessController.updateBusiness);

router
    .route('/:id/stores')
    .get(storeController.getStores)
    .post(storeController.createStore)

router
    .route('/:id/store/:id')
    .get(storeController.getStore)
    .put(storeController.updateStore)
    .delete(storeController.deleteStore)

module.exports = router;