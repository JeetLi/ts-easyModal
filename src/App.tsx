import { useState, FC } from "react";
import "./index.scss";
import Modal from "./components/Modal";



const App: FC = () => {
  const [open, setOpen] = useState(false);
  console.log(setOpen);
  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {/* {open && <Modal open={open} setOpen={setOpen} />} */}
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default App;
