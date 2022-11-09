import React from 'react'

export const Home = (props) => {

    console.log(props)

  return (
    <>
        <h1 className="title" id="1">BIENVENIDO {props.user}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet alias animi, natus harum repellendus totam, ea tempora vitae perspiciatis quasi error, nostrum ipsum explicabo commodi et debitis quas aperiam quaerat.
        </p>
    </>
    
  )


  
}
