import { Private, Router, Route, Set } from '@redwoodjs/router'
import BlogsLayout from 'src/layouts/BlogsLayout'
import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Private unauthenticated="home">
      <Route path="/contact" page={ContactPage} name="contact" />
      <Set wrap={BlogsLayout}>
        <Route path="/admin/blogs/new" page={BlogNewBlogPage} name="newBlog" />
        <Route path="/admin/blogs/{id:Int}/edit" page={BlogEditBlogPage} name="editBlog" />
        <Route path="/admin/blogs/{id:Int}" page={BlogBlogPage} name="blog" />
        <Route path="/admin/blogs" page={BlogBlogsPage} name="blogs" />
      </Set>
      </Private>
      <Set wrap={BlogLayout}>
      <Route path="/article{id:Int}" page={ArticlePage} name="article" />
      <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
