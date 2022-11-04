import "./MyButton.css";

interface MyButtonProps {
  text: string;
}

export const MyButton: React.FC<MyButtonProps> = ({ text }) => (
  <button className="my-button">{text}</button>
);

export default MyButton;
