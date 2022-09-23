export const schema = gql`
  type Blog {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    blogs: [Blog!]! @skipAuth
    blog(id: Int!): Blog @skipAuth
  }

  input CreateBlogInput {
    title: String!
    body: String!
  }

  input UpdateBlogInput {
    title: String
    body: String
  }

  type Mutation {
    createBlog(input: CreateBlogInput!): Blog! @requireAuth
    updateBlog(id: Int!, input: UpdateBlogInput!): Blog! @requireAuth
    deleteBlog(id: Int!): Blog! @requireAuth
  }
`
