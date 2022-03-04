import React from 'react'

type statusProps={
    status:'loading' | 'success' | 'error'
}
export const Status = (props:statusProps) => {
  let message;
  if(props.status=='loading') message='loading'
  else if(props.status=='success') message='success'
  else if(props.status=="error") message='error'
    return (
    <div>
        <h1>Status is {message}</h1>
    </div>
  )
}
