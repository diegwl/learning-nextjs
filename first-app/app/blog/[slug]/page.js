import React from 'react'

function Post({ params }) {
  return (
    <main>
        <h1>Blog Post</h1>
        <p>Post {params.slug}</p>
    </main>
  )
}

export default Post