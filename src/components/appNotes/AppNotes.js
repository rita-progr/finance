import "./appNotes.css";
import { useState, useEffect } from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";
import axios from "axios";
import ProgressBar from "../progressBar/ProgressBar.js";
const AppNotes = () => {
  const [notes, setNotes] = useState([]);
  const [checkedNotes, setCheckedNotes] = useState({});
  //   useEffect(()=>{
  //     const storedNotes = localStorage.getItem("notes");
  //     if(storedNotes){
  //         setNotes(JSON.parse(storedNotes));
  //     }
  //   },[])
  //   useEffect(()=>{
  //     localStorage.setItem("notes", JSON.stringify(notes));
  //   }, [notes]);

  const handleNotes = (values) => {
    const newNotes = {
      id: Date.now(),
      text: values.note,
      checked: false,
    };
    setNotes([...notes, newNotes]);
  };
  const handleChecked = (id) => {
    setCheckedNotes((prevNotes) => ({ ...prevNotes, [id]: true }));
    setTimeout(() => {
      setNotes((notes) => notes.filter((note) => note.id !== id));
      setCheckedNotes((prevNotes) => ({ ...prevNotes, [id]: false }));
    }, 10000);
  };
  return (
    <div className="app-notes">
      <h2>Заметки</h2>
      <ProgressBar name="Заметки" hrefLeft={'/goals'} hrefRight={'/'}/>
      <Formik
        initialValues={{
          note: "",
        }}
        onSubmit={handleNotes}
      >
        <Form className="app-notes__list">
          <label htmlFor="text">Заметка</label>
          <Field type="text" name="note" className="field" placeholder = "Введите заметку"/>
          <button type="submit">Добавить</button>
        </Form>
      </Formik>
      <div className = "ourNotes">
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id}>
              <input
                type="checkbox"
                checked={checkedNotes[note.id]}
                onChange={() => handleChecked(note.id)}
              />
              <span
                style={{
                  textDecoration: checkedNotes[note.id]
                    ? "line-through"
                    : "none",
                  color: checkedNotes[note.id] ? "gray" : "black",
                }}
              >
                {note.text}
              </span>
            </li>
          );
        })}
      </ul>
      </div>
    </div>
  );
};
export default AppNotes;
