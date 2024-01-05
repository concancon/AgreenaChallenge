import { RequestHandler, Router } from "express";
import { authMiddleware } from "middlewares/auth.middleware";
import { UsersController } from "modules/users/users.controller";

const router = Router();
const usersController = new UsersController();

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *       - User
 *     summary: Create a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserDto'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserDto'
 *      400:a
 *        description: Bad request
 */
router.post("/", (usersController.create.bind(usersController)) as RequestHandler);

router.use("/addaddress", authMiddleware)
router.post("/addaddress", (usersController.addAddress.bind(usersController)) as RequestHandler)

export default router;
