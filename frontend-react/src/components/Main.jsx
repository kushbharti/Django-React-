import React from 'react'
import Button from './Button'



const Main = () => {
 
  return (
    <>
        <div className='container'>
            <div className="p-5 text-center bg-light-dark rounded">
                <h1 className='text-light'>Stock Prediction Portal</h1>
                <p className='text-light lead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <Button text='Explore More' class='btn btn-info' url='/dashboard' /> 
            </div>
        </div>

    </>
  )
}


export default Main




