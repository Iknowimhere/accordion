import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
export const SingleQuestion = ({ id,info, title,activeId,toggleQuestion }) => {
  const isActive=id===activeId;
  return (
    <div className='question'>
      <header>
        <h2>{title}</h2>
        <button className="question-btn" onClick={()=>toggleQuestion(id)}>{isActive?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
      </header>
      {isActive && <p>{info}</p>}
    </div>
  );
};
