import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  console.log(blog);
  return <div>{/* <h1>blog: {blog.title}</h1> */}</div>;
};

Blog.PropTypes = { blog: PropTypes.object.isRequired };
export default Blog;
