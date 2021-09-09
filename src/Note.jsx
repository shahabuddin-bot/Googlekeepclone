import React from "react";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
const Note=(props)=>{
const deleteNote=(event)=>{
    props.deleteItem(props.id);
}
    return(
        <>
<div className="note">
<h1>{props.title}</h1>
<br />
<p> {props.content}</p>
<button onClick={deleteNote}className="">
<DeleteOutlinedIcon className="deleteicon" />
</button>

</div>
        </>
    );
};
export default Note;