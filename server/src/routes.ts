import {Router} from 'express';
import orphanagesController from '../src/controllers/OrphanagesController';


const routes = Router();

routes.post('/orphanages', orphanagesController.create);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;