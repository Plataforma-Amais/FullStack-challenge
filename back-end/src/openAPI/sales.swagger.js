// Swagger Schemas

/**
 * @swagger
 * components:
 *   schemas:
 *     Create Sale:
 *       required:
 *         - sale
 *         - delivery
 *         - salePrice
 *       properties:
 *         sale:
 *           type: array
 *           items:
 *              type: object
 *              properties:
 *                productId:
 *                  type: string
 *                  value:
 *                     type: number
 *                quantity:
 *                  type: string
 *                  value:
 *                     type: number
 *
 *         delivery:
 *            type: object
 *            properties:
 *              address:
 *                type: string
 *              number:
 *                type: string  
 *         salePrice:
 *           type: number
 *       example:
 *          sale:
 *              - productId: 2
 *                quantity: 2
 *              - productId: 3
 *                quantity: 5
 *          delivery:
 *             address: "Rua dos devs"
 *             number: "1"
 *          salePrice: 27.45
 *         
 */

// Swagger tags

/**
* @swagger
* tags:
*   - name: Sales
*     description: The sales endpoint
*/

// Swagger endpoint

/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Get the sale by id
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The sale id
 *     responses:
 *       200:
 *         description: The sale by id
 *       404:
 *         description: The sale was not found
 */

/**
 * @swagger
 * /sales/create:
 *   post:
 *     summary: Create a new sale
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Sale'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       500:
 *         description: Register failed. Please, contact support or try again later.
 */

/**
 * @swagger
 * /sales:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Returns the list of all the sales
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: The list of the sales
 *       500:
 *         description: Server error. Please, contact support or try again later.
 */
