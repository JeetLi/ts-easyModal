import { FC } from "react";

interface UserProps {
  open: boolean;
  setOpen: (arg0: boolean) => void;
}

const Modal: FC<UserProps> = ({ open, setOpen }) => (
  <div className={`overlay animated ${open ? "show" : ""}`}>
    <div className="modal">
      <svg
        onClick={() => setOpen(false)}
        height="200"
        viewBox="0 0 200 200"
        width="200"
      >
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      <h3>Это Модальное окно</h3>
    </div>
  </div>
);
export default Modal;
