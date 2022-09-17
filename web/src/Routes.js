import { Router, Route, Set } from '@redwoodjs/router'

import BlogsLayout from 'src/layouts/BlogsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogsLayout}>
        <Route path="/blogs/new" page={BlogNewBlogPage} name="newBlog" />
        <Route path="/blogs/{id:Int}/edit" page={BlogEditBlogPage} name="editBlog" />
        <Route path="/blogs/{id:Int}" page={BlogBlogPage} name="blog" />
        <Route path="/blogs" page={BlogBlogsPage} name="blogs" />
      </Set>
      <Set wrap={BlogLayout}>
      <Route path="/article{id:Int}" page={ArticlePage} name="article" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
