import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
const CreateNote =(props)=>{
    const [isExpanded, setExpanded] = React.useState(false);
    const [note,setNote]=useState({

        title:"",
        content:"",

    });
const InputEvent=(event)=>{
    const{name,value}=event.target;
    setNote((prevData)=>{
        return{
            ...prevData,
            [name]:value,
        };
    });
}
const addEvent=(event)=>{
    props.passNote(note);
    setNote({
        title:"",
        content:"",
    });
    event.preventDefault();
};
function expand() {
    setExpanded(true);
  }

    return(
        <>
<form className="create-note">
{isExpanded && (
    <input 
    type="text"
    value={note.title}
    onChange={InputEvent}
    name="title"
     placeholder="Title"
      />
)}
    <textarea 
    rows={isExpanded ? 3 : 1}
    value={note.content}
     onChange={InputEvent}
     name="content"
     onClick={expand}
     placeholder="write a note..."
      />
 <button
  onClick={addEvent}> 
    <AddCircleIcon  className="plussign"/>
</button>

</form>
        </>
    )
}
export default CreateNote;