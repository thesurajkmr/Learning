import React, {useState} from "react";


type AuthUser={
    name:string
    email:string
}
export const User = () => {

    const [user, setuser] = useState<null | AuthUser>(null)
    // these two are the possible types an user can have
    // either null or AuthUser
    const handleLogin=()=>{

        console.log("Logged In");
        setuser({
            name:'Suraj',
            email:'example@mail.com'
        })
    }
    const handleLogout=()=>{
        console.log("Logged Out");
        setuser(null)
        
    }
  return (
    <>
      <div>
        <button onClick={handleLogin}>Log In</button>
        <button onClick={handleLogout}>Log Out</button>
        <div>User name is {user?.name}</div>
        {/* this optional chaining because user can be null. Typescript magic */}
        <div>User name is {user?.email}</div>
      </div>
    </>
  );
};
