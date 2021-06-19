// Swagger tags

/**
* @swagger
* tags:
*   - name: Products
*     description: The products endpoint
*/

// Swagger endpoints

/**
 * @swagger
 * /products:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the produts
 *       500:
 *         description: Server error. Please, contact support or try again later.
 */
