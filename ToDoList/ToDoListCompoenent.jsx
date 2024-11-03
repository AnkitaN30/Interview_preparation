import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const ToDoListComponent = ()=>{
    const [text, setText] = useState("");
    const [isEdit,setIsEdit] = useState(false);
    const [todoArray, setToDoListItem] = useState([]);
    const [editedItem,setEditedItem]=useState({});
  

  const AddItem = () => {
    if (text !== "") {
      if(!isEdit){
      const newItem = {
        id: uuidv4(),
        item: text,
        done: false,
      };
      setToDoListItem([...todoArray, newItem]);
    }
    else{
     const editedArr = todoArray?.map(objItem=>{
        if(objItem.id === editedItem.id){
          return {...objItem,item:text};
        }
        else {
          return objItem
        }
      })
      setToDoListItem(editedArr);
      setIsEdit(!isEdit);
    }
      setText("");
    }
  };

  const handleDelete = (deletedItem)=>{
    const filteredList = todoArray.filter(objItem=> objItem.id !== deletedItem.id);
    setToDoListItem(filteredList);
  }

  const handleEditItem = (editItem)=>{
    setIsEdit(!isEdit);
    setText(editItem.item);
    setEditedItem(editItem);
  }

    return (
      <>
        <h1>To Do list</h1>
        <div className="adder">
          <input
            type="text"
            placeholder="Add item to your list"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button type="submit" onClick={() => AddItem()}>
            {isEdit ? "EditItem" : "AddItem"}
          </button>
        </div>

        <ul>
          {todoArray &&
            todoArray?.map((obj) => {
              return (
                <>
                  <li key={obj.id}>
                    {obj.item}
                    <button onClick={() => handleEditItem(obj)}>Update</button>
                    <button onClick={() => handleDelete(obj)}>Delete</button>
                  </li>
                </>
              );
            })}
        </ul>
      </>
    );
}

export default ToDoListComponent;