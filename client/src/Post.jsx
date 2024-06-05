import React from 'react'
import { formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';

export default function Post({ _id,title, summary, cover, content, createdAt, author }) {
  return (
    <div className="post">
      <Link to={`/post/${_id}`}>
      <div className="image">
        <img src={"http://localhost:4000/" + cover} alt="" />
      </div>
      </Link>
      <div className="text">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <span className="author">{author.username}</span>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className='summary'>{summary}</p>
      </div>
    </div>
  )
}
