const prisma = require("../prismaClient");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: req.userId,
    },
  });
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    include: { comments: true },
  });
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  try {
    const post = await prisma.post.updateMany({
      where: { id: Number(req.params.id), authorId: req.userId },
      data: req.body,
    });

    if (post.count === 0)
      return res.status(403).json({ message: "Not allowed" });

    res.json({ message: "Post updated" });
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
};

exports.deletePost = async (req, res) => {
  const deleted = await prisma.post.deleteMany({
    where: { id: Number(req.params.id), authorId: req.userId },
  });

  if (deleted.count === 0)
    return res.status(403).json({ message: "Not allowed" });

  res.json({ message: "Post deleted" });
};
