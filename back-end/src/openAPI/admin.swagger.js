// Swagger Schemas

/**
 * @swagger
 * components:
 *   schemas:
 *     Update Status:
 *       type: object
 *       required:
 *         - delivered
 *       properties:
 *         delivered:
 *           type: boolean
 *       example:
 *         delivered: true     
 */

// Swagger tags

/**
* @swagger
* tags:
*   - name: Admin
*     description: The sales endpoint
*/

// Swagger endpoint

/**
 * @swagger
 * /admin/sales/{id}:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Get the sale by id
 *     tags: [Admin]
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
 * /admin/sales:
 *   get:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Returns the list of all the sales
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: The list of the sales
 *       500:
 *         description: Server error. Please, contact support or try again later.
 */

/**
 * @swagger
 * /admin/sales/{id}:
 *   put:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Update sale status
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Status'
 *     responses:
 *       200:
 *         description: The status was successfully updated
 *       500:
 *         description: Update profile failed. Please, contact support or try again later.
 */
