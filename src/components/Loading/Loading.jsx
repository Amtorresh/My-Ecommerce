import { FadeLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
      <FadeLoader color="red"/>
    </div>
  )
}

export default Loading