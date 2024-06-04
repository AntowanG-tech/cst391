import { Router } from 'express';
import { getAlbums } from './albums.controller';

const router = Router();
router
   .route('/albums')
   .get(getAlbums);

import default router;