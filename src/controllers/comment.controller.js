const prisma = require("../prismaClient");

exports.addComment = async (req, res) => {
  const comment = await prisma.comment.create({
    data: {
      content: req.body.content,
      postId: Number(req.params.postId),
      userId: req.userId,
    },
  });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: { postId: Number(req.params.postId) },
  });
  res.json(comments);
};
