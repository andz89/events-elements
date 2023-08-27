import { useState } from "react";
import { useDispatch } from "react-redux";

import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
    }
  };

  const canSave = Boolean(title) && Boolean(content);

  const submitClass = canSave
    ? "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium m-5 rounded-lg text-sm px-5 py-2.5     dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
    : "text-gray-400 bg-gray-700   focus:ring-4 focus:ring-blue-300 font-medium m-5 rounded-lg text-sm px-5 py-2.5     dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 cursor-not-allowed";
  return (
    <section className="w-[800px] flex flex-col bg-white justify-center p-2 mx-auto rounded my-5">
      <h2 className="font-semibold">Add a New Post</h2>
      <form className="flex flex-col bg-white justify-center p-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Post Title:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </div>

        {/* <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select> */}

        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Content:
        </label>
        <textarea
          rows="4"
          className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          name="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>

        <button
          type="button"
          className={submitClass}
          onClick={onSavePostClicked}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
