import React from 'react'

function Title() {
    console.log("Title page rendered");
  return (
    <div>Title</div>
  )
}

export default React.memo(Title);