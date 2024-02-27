import "./styles.css";
import { useState } from "react";
import data from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleclick(getid) {
    setSelected(getid === selected ? null : getid);
  }
  function handleMultiSelection(getid) {
    let cpyMultiple = [...multiple];
    const findIndexofcurrentId = cpyMultiple.indexOf(getid);
    console.log(findIndexofcurrentId);
    if (findIndexofcurrentId === -1) {
      cpyMultiple.push(getid);
    } else {
      cpyMultiple.splice(findIndexofcurrentId, 1);
    }
    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable multiple selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id}>
              <div
                className="title"
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(item.id)
                    : () => handleSingleclick(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              <div>
                {enableMultiSelection
                  ? multiple.indexOf(item.id) !== -1 && (
                      <div className="content">{item.answer}</div>
                    )
                  : selected === item.id && (
                      <div className="content">{item.answer}</div>
                    )}
                {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? (
                  <div className="content">{item.answer}</div>
                ) : null} */}
              </div>
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};
export default Accordion;
