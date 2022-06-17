import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import "./AddPost.css";
import { FileUploader } from "react-drag-drop-files";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { addPost } from "../../redux/reducers/postsReducer";
const AddPost = () => {
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [des, setDes] = useState("");
  const [lesson, setLesson] = useState(0);
  const [image, setImage] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [textError, setTextError] = useState("");
  const [lessonError, setLessonError] = useState("");

  const titleValid = (event: any) => {
    event.preventDefault();
    setTitle(event.target.value);
    if (event.target.value.length === 0) {
      setTitleError("Заполните поле");
    } else {
      setTitleError("");
    }
  };
  const textValid = (event: any) => {
    event.preventDefault();
    setText(event.target.value);
    if (event.target.value.length === 0) {
      setTextError("Заполните поле");
    } else {
      setTextError("");
    }
  };
  const lessonValid = (event: any) => {
    event.preventDefault();
    setLesson(event.target.value);
    if (event.target.value.length === 0) {
      setLessonError("Заполните поле");
    } else {
      setLessonError("");
    }
  };
  useEffect(() => {
    if (titleError || textError || lessonError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [titleError, textError, lessonError]);
  const onCancelClick = () => {
    setTitle("");
    setText("");
    setLesson(0);
    setImage("");
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    const postData = {
      title,
      text,
      lesson_num: lesson,
      image,
    };
    dispatch(addPost(postData));
    onCancelClick();
  };

  const fileTypes = ["JPG", "JPEG", "PNG", "SVG"];

  const onChangeImage = (info: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(info);
    reader.onload = function () {
      const dataUrl = reader.result;
      if (dataUrl && typeof dataUrl === "string") {
        const base64 = dataUrl.split(",")[1];
        setImage(base64);
      }
    };
  };
  return (
    <div
      className={classNames(
        { ["addPostWrapper"]: isLightTheme },
        { ["addPostWrapper dark"]: !isLightTheme }
      )}
    >
      <div className="addPostTitle ">Add Post</div>

      <form className="addPostForm">
        <div className=" formTitle"> CREATE A NEW POST</div>
        <label>
          <div className="labelAddPostForm">Title </div>
          <Input onChange={titleValid} value={title} />
          {titleError && <div className="err">{titleError}</div>}
        </label>

        <label>
          <div className="labelAddPostForm">Lesson</div>
          <Input onChange={lessonValid} value={lesson} type={"number"} />
          {lessonError && <div className="err">{lessonError}</div>}
        </label>
        <label>
          <div className="labelAddPostForm">Publish at</div>
          <Input type="date" />
        </label>
        <div>
          <div className="labelAddPostForm"> Image</div>
          <FileUploader
            handleChange={onChangeImage}
            name="file"
            types={fileTypes}
          >
            {image ? (
              <img
                src={`data:image/jpeg;base64, ${image}`}
                alt={"product"}
                className={image}
              />
            ) : (
              <div className="dragAndDrop">{"Drag & drop or browse file"}</div>
            )}
          </FileUploader>
        </div>
        <label>
          <div className="labelAddPostForm">Description</div>
          <textarea
            onChange={(event: any) => setDes(event.target.value)}
            value={des}
          ></textarea>
        </label>
        <label>
          <div className="labelAddPostForm">Text</div>
          <textarea onChange={textValid} value={text}></textarea>
          {textError && <div className="err">{textError}</div>}
        </label>
        <div className="btnAddPostFooter">
          <Button btnText={"Delete"} className="btnAddPost delete" />
          <div>
            {" "}
            <Button
              onClick={onCancelClick}
              btnText={"Cancel"}
              className="btnAddPost cancel"
            />
            <Button
              onClick={onSubmit}
              btnText={"Add"}
              className="btnAddPost add"
              disabled={!formValid}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
