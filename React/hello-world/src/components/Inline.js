import React from 'react'

const heading={
    fontSize: '72px',
    color: 'red'
}
function Inline() {
  return (
    <div>
      <h1 className="error">error</h1>
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* cannot be acessed in the child component */}

        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline