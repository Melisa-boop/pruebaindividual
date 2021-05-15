const express = require( `express` );

const router = express.Router();
const actorRouter = require( `./actorRouter` );
const moviesRouter=require(`./moviesRouter`);

// Index
router.get( `/`, ( _req, res ) =>
{
	res.set( `Content-Type`, `text/html` );
	return res.status( 200 ).send( `<h1 style="text-align:center;">Index API<h1>` );
} );

router.use( `/actores`, actorRouter );
router.use(`/movies`, moviesRouter )

module.exports = router;
