import Blog from 'src/components/Blog/Blog'

export const QUERY = gql`
  query FindBlogById($id: Int!) {
    blog: blog(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Blog not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ blog }) => {
  return <Blog blog={blog} />
}
