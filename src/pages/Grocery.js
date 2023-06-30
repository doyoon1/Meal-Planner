import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Grocery.css";

function Grocery() {
  const [itemText, setItemText] = useState("");
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState("");
  const [updateItemText, setUpdateItemText] = useState("");
  const handleCancel = () => {
    setUpdateItemText("");
    setIsUpdating("");
  };

  //fetch data from database
  useEffect(() => {
    const getItemList = async () => {
      try {
        const res = await axios.get("http://localhost:5500/api/items");
        setListItems(res.data);
        console.log("render");
      } catch (err) {
        console.log(err);
      }
    };
    getItemList();
  }, []);

  //add item to the database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5500/api/item", {
        item: itemText,
      });
      setListItems((prev) => [...prev, res.data]);
      setItemText("");
    } catch (err) {
      console.log(err);
    }
  };

  //update item from database
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const currentItem = listItems.find((item) => item._id === isUpdating);

      const updatedText =
        updateItemText.trim() === "" ? currentItem.item : updateItemText;

      const res = await axios.put(
        `http://localhost:5500/api/item/${isUpdating}`,
        { item: updatedText }
      );
      console.log(res.data);

      const updatedItemIndex = listItems.findIndex(
        (item) => item._id === isUpdating
      );
      const updatedItem = { ...listItems[updatedItemIndex], item: updatedText };
      const updatedListItems = [...listItems];
      updatedListItems[updatedItemIndex] = updatedItem;

      setListItems(updatedListItems);
      setUpdateItemText("");
      setIsUpdating("");
    } catch (err) {
      console.log(err);
    }
  };

  const renderUpdateForm = () => (
    <form
      className="update-form"
      onSubmit={(e) => {
        updateItem(e);
      }}
    >
      <input
        className="update-new-input"
        type="text"
        placeholder="Edit item"
        onChange={(e) => {
          setUpdateItemText(e.target.value);
        }}
        value={updateItemText}
      />
      <button className="update-new-item" type="submit">
        Done
      </button>
      <button className="cancel-new-item" onClick={handleCancel}>
        Cancel
      </button>
    </form>
  );

  //delete item from database
  const deleteItem = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItems = listItems.filter((item) => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="grocery-container">
        <h1>Grocery list</h1>
        <form className="form" onSubmit={(e) => addItem(e)}>
          <input
            type="text"
            placeholder="Add an item"
            onChange={(e) => {
              setItemText(e.target.value);
            }}
            value={itemText}
          ></input>
          <button type="submit">Add</button>
        </form>
        <div className="grocery-list-items">
          {listItems.map((item) => (
            <div className="grocery-item">
              {isUpdating === item._id ? (
                renderUpdateForm()
              ) : (
                <>
                  <p className="item-content">{item.item}</p>
                  <button
                    className="update-item"
                    onClick={() => {
                      setIsUpdating(item._id);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-item"
                    onClick={() => {
                      deleteItem(item._id);
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Grocery;
