import React from 'react';
import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";
import FetchedPosts from "./components/FetchedPosts/FetchedPosts";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./store/actions";
import './style.scss';

function App() {
    const dispatch = useDispatch();
    const value = useSelector( state => state.theme.value);
    const themeHandler = () => {
        const newTheme = document.querySelector('#theme').classList.contains('light')
            ? 'dark'
            : 'light';
        dispatch(changeTheme(newTheme));
    };
  return (
      <div
          className={value}
           id="theme"
      >
    <div

        className="container pt-3"
    >
        <div className="header">
            <h1>React-Redux App</h1>
            <button
                className="btn btn-info"
                onClick={themeHandler}
            >
                Сменить тему
            </button>
        </div>
        <hr />
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Синхронные посты</h2>
                <Posts />
            </div>
            <div className="col">
                <h2>Асинхронные посты</h2>
                <FetchedPosts />
            </div>
        </div>
        </div>
      </div>
  );
}

export default App;
