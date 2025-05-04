import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Button from "./button.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function App() {
  const showButtonHolder: boolean = true;
  type PostInfo = {
    title: string;
    body: string;
    child?: React.ReactNode;
  };
  const postInfo: PostInfo[] = [
    {
      title: "Ahmad Maher alomari",
      body: "This is the first body This is the first body This is the first body",
      child: <h2 style={{ marginBottom: "0px" }}>20</h2>,
    },
    {
      title: "Maher Mohamad elhave  ",
      body: "This is the first body This is the first body This is the first bodyThis is the first body This is the first body This is the first body",
    },
    {
      title: "Ihab same alsafadi",
      body: "This is the first body This is the first body This is the first bodyThis is the first body This is the first body This is the first body",
    },
    {
      title: "",
      body: "This is the first body This is the first body This is the first bodyThis is the first body This is the first body This is the first body",
    },
  ];

  const myPostInfo = postInfo.map((info, index) => (
    <Post key={index} title={info.title} body={info.body}>
      {info.child}
    </Post>
  ));
  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "80%" }}>
          <div className={"stylePost"}>{myPostInfo}</div>
          {ShowButtonHolder(showButtonHolder)}
        </div>
      </div>
    </>
  );
}

function ShowButtonHolder(showButtonHolder: boolean) {
  if (showButtonHolder == true) {
    return (
      <div className="styleButton">
        <div>
          <Button btnName="New">
            <FontAwesomeIcon icon={faStar} />
          </Button>
          <Button btnName="Most Read">
            <h4>sdaxs</h4>
          </Button>
        </div>
        <div>
          <Button btnName="featured articels">
            <h4>sdaxs</h4>
          </Button>
        </div>
      </div>
    );
  }
  return null;
}

export default App;
