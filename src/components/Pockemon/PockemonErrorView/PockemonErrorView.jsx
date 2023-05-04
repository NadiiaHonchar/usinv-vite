import errorImage from "../img/stock-photo-blue-balloon-on-260nw-1600368790.jpg";
export function PockemonErrorView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} width="300" alt="sad" />
      <p>{message}</p>
    </div>
  );
}
