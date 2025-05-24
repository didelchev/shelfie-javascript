import { Router } from 'express';
import homeController from './controllers/home-controller.js';
import catalogController from './controllers/catalog-controller.js';

const routes = Router();

routes.use('/', homeController)
routes.use('/catalog', catalogController)


export default routes