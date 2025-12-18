const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/post.controller");

router.post("/", auth, controller.createPost);
router.get("/", controller.getPosts);
router.put("/:id", auth, controller.updatePost);
router.delete("/:id", auth, controller.deletePost);

module.exports = router;
