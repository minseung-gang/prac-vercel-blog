import type { NextApiRequest, NextApiResponse } from "next";
import { createPost } from "../../../../lib/posts";
import { format } from "date-fns";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, title, content } = req.body;
  try {
    await createPost({
      id,
      title,
      content,
      date: format(new Date(), "yyyy-MM-dd"),
    });
    res.status(200).json({ message: "create success" });
  } catch (err) {
    res.status(500).json({ error: `create failed ${err}` });
  }
}
