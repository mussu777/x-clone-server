import express from "express";

import userRoutes from "./user.route.js";
import postRoutes from "./post.route.js";
import commentRoutes from "./comment.route.js";
import notificationRoutes from "./notification.route.js";

const router = express.Router();

// Group all routes
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/notifications", notificationRoutes);

export default router;
