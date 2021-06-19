// Swagger Schemas

/**
 * @swagger
 * components:
 *   schemas:
 *     User Login:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         email: user@test.com
 *         password: test123
 */

// Swagger tags

/**
* @swagger
* tags:
*   - name: Login
*     description: The login endpoint
*/

// Swagger endpoints

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User Login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Login'
 *     responses:
 *       200:
 *         description: Login successfully.
 *       500:
 *         description: Login failed. Please, contact support or try again later.
 */
