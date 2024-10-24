import PropTypes from "prop-types";
const Blog = ({ blog }) => {
  const { title, cover_image, name, picture, read_time } = blog;
  console.log(blog);
  return (
    <div>
      <img src={cover_image} alt={`its ${title}`} />
      <div className="flex">
        <div className="">
          <img src={picture} alt={`${name} author`} />
          <h5>{name}</h5>
        </div>
        <div className="">
          <span>${read_time} long</span>
        </div>
      </div>
      <h1>blog: {title}</h1>
    </div>
  );
};

Blog.propTypes = { blog: PropTypes.object.isRequired };
export default Blog;
