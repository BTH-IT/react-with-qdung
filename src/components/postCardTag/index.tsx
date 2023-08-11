/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import "./styles.css";
const PostCardTag = ({ children, ...props }: any) => {
  return (
    <a className="post-card_tag" {...props}>
      {children}
    </a>
  );
};

export default PostCardTag;
