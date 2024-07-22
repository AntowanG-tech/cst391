import { Router } from 'express';
import * as GenresController from './genres.controller';

const router = Router();
router
    .route('/genres')
    .get(GenresController.readGenres);

router
    .route('/genres/:author')
    .get(GenresController.readGenresByAuthor);

router
    .route('/genres/search/author/:search')
    .get(GenresController.readGenresByAuthorSearch);

router
    .route('/genres/search/description/:search')
    .get(GenresController.readGenresByDescriptionSearch);


router
    .route('/genres')
    .post(GenresController.createGenre);


router
    .route('/genres')
    .put(GenresController.updateGenre);



router
    .route('/genres/:genreId')
    .delete(GenresController.deleteGenre);


export default router;
