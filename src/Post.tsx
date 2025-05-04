import "./Post.css";
type PostProps = {
  title?: string;
  body: string;
  children?: React.ReactNode;
};
export default function Post({ title, body, children }: PostProps) {
  return (
    <div>
      {title == null || title == "" ? (
        <></>
      ) : (
        <div className={"postStyle"}>
          <div>{children}</div>
          <h3>{title}</h3>
          <hr />
          <h6>{body}</h6>
        </div>
      )}
    </div>
  );
}
