import React, { useState } from "react";
import { useEffect } from "react";
import Input from "./Input";
import TextArea from "./TextArea";

const BlogForm = (props) => {
  const [clickedFormButton, setClickedFormButton] = useState(false);
  const validateTitle = (title) => {
    if (title) {
      return { isValid: true, msg: "" };
    } else {
      return { isValid: false, msg: "Title is required" };
    }
  };

  const validateContent = (content) => {
    if (content) {
      return { isValid: true, msg: "" };
    } else {
      return { isValid: false, msg: "Content is required" };
    }
  };

  const validateCategory = (category) => {
    if (category) {
      return { isValid: true, msg: "" };
    } else {
      return { isValid: false, msg: "Category is required" };
    }
  };

  let defaultValues = {
    title: props.blog ? props.blog.title : "",
    category: props.blog ? props.blog.category : "",
    content: props.blog ? props.blog.content : "",
  };

  defaultValues = {
    ...defaultValues,
    hasTitleError: !validateTitle(defaultValues.title).isValid,
    hasCategoryError: !validateCategory(defaultValues.category).isValid,
    hasContentError: !validateContent(defaultValues.content).isValid,
  };

  const [title, setTitle] = useState(defaultValues.title);
  const [hasTitleError, setTitleError] = useState(defaultValues.hasTitleError);

  const [category, setCategory] = useState(defaultValues.category);
  const [hasCategoryError, setCategoryError] = useState(
    defaultValues.hasCategoryError
  );

  const [content, setContent] = useState(defaultValues.content);
  const [hasContentError, setContentError] = useState(
    defaultValues.hasContentError
  );

  const submitHandler = (event) => {
    event.preventDefault();
    setClickedFormButton(true);
    if (!hasTitleError && !hasCategoryError && !hasContentError) {
      const blog = {
        title,
        category,
        content,
      };
      props.onFormSubmit(blog);
    }
  };

  useEffect(() => {
    // bug fix re render states on props update
    const newTitle = props.blog ? props.blog.title : "";
    const newCategory = props.blog ? props.blog.category : "";
    const newContent = props.blog ? props.blog.content : "";
    const newTitleError = !validateTitle(newTitle).isValid;
    const newCategoryError = !validateCategory(newCategory).isValid;
    const newContentError = !validateContent(newContent).isValid;

    setTitle(newTitle);
    setTitleError(newTitleError);
    setCategory(newCategory);
    setCategoryError(newCategoryError);
    setContent(newContent);
    setContentError(newContentError);
  }, [props]);

  return (
    <React.Fragment>
      <form className="w-100 container" onSubmit={submitHandler}>
        <Input
          label="Title"
          value={title}
          setValue={setTitle}
          hasError={hasTitleError}
          setError={setTitleError}
          validate={validateTitle}
          clickedFormButton={clickedFormButton}
        />
        <Input
          label="Category"
          value={category}
          setValue={setCategory}
          hasError={hasCategoryError}
          setError={setCategoryError}
          validate={validateCategory}
          clickedFormButton={clickedFormButton}
        />
        <TextArea
          label="Content"
          value={content}
          setValue={setContent}
          hasError={hasContentError}
          setError={setContentError}
          validate={validateContent}
          clickedFormButton={clickedFormButton}
          rows="5"
        />
        <div className="row">
          <input
            class="btn btn-primary px-5 mr-3"
            type="submit"
            value="Submit"
          />
          <button class="btn btn-danger px-5" onClick={props.onFormCancel}>
            Cancel
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default BlogForm;
