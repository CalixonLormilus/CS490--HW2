import { db } from 'src/lib/db'

export const blogs = () => {
  return db.blog.findMany()
}

export const blog = ({ id }) => {
  return db.blog.findUnique({
    where: { id },
  })
}

export const createBlog = ({ input }) => {
  return db.blog.create({
    data: input,
  })
}

export const updateBlog = ({ id, input }) => {
  return db.blog.update({
    data: input,
    where: { id },
  })
}

export const deleteBlog = ({ id }) => {
  return db.blog.delete({
    where: { id },
  })
}
