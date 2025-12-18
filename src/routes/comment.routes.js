const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/comment.controller");

router.post("/:postId", auth, controller.addComment);
router.get("/:postId", controller.getComments);

module.exports = router;
