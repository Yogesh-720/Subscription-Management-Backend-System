import {Router} from 'express';
import {authorize} from "../middlewares/auth.middleware.js";
import {
    createSubscription,
    getAllSubscriptions,
    getSubscription,
    getUserSubscriptions
} from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get('/', getAllSubscriptions);

subscriptionRouter.get('/:id', getSubscription);

subscriptionRouter.post('/', authorize , createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
    res.send({title: 'UPDATE Subscription details'});
});

subscriptionRouter.delete('/:id', (req, res) => {
    res.send({title: 'DELETE Subscription'});
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.put('/:id/cancel', (req, res) => {
    res.send({title: 'CANCEL Subscriptions'});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
    res.send({title: 'GET upcoming renewals'});
});

export default subscriptionRouter;