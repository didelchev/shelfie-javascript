import { Router } from 'express';
import testController from './testController.js';


const routes = Router();

routes.use('/', testController)


export default routes