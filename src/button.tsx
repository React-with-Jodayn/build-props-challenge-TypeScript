import "./button.css";
type Props = {
  btnName: string;
  children: React.ReactNode;
};

export default function Button({ btnName, children }: Props) {
  return (
    <>
      <button className="btnStyle">
        {btnName}
        <span>{children}</span>
      </button>
    </>
  );
}
