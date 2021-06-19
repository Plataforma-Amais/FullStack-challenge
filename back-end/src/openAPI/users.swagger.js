// Swagger Schemas

/**
 * @swagger
 * components:
 *   schemas:
 *     User Register:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         name:
 *           type: string
 *           description: The user name
 *         email:
 *           type: string
 *           description: The user email
 *         password:
 *           type: string
 *           description: The user password
 *       example:
 *         id: 3
 *         name: Gabi dal Silv
 *         email: gabidalsilv@gmail.com
 *         password: 'G@bidalsilva123456789'
 * 
 *     Update Profile:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The user name
 *       example:
 *         name: Gabi dal Silv
 */

// Swagger tags

/**
* @swagger
* tags:
*   - name: User
*     description: The user endpoint
*/

// Swagger endpoints

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Register new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User Register'
 *     responses:
 *       201:
 *         description: The user was successfully created
 *       500:
 *         description: Register failed. Please, contact support or try again later.
 */

/**
 * @swagger
 * /user/edit:
 *   put:
 *     security:
 *      - apiKeyAuth: []
 *     summary: Update name user profile
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Profile'
 *     responses:
 *       200:
 *         description: The user was successfully updated
 *       500:
 *         description: Update profile failed. Please, contact support or try again later.
 */
