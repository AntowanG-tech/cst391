import { Request, Response, Router } from 'express';
import * as AuthorsController from './authors.controllers';

const router = Router();
router
    .route('/authors')
    .get(AuthorsController.readAuthors);

export default router;
