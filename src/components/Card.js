import React from 'react'

function Card(props) {
    return (
        <div className=''>
            <div className='w-[350px] h-[475px] rounded-lg bg-slate-100 drop-shadow-2xl'>
                {/* image */}
                <div className='flex justify-center'>
                    <img className='h-60 w-[100%] rounded-lg' src={props.location} alt="" />
                </div>
                {/* text */}
                <div className='text-center my-2 mx-3'>
                    <h2 className='text-3xl font-bold font-mono '>{props.name}</h2>
                    <p className='font-extralight my-2'>{props.about}</p>
                    {/* button */}
                    <div className='my-4'>
                        <button onClick={() => {
                            alert("Order Successfully😊😊😊")
                        }} className='bg-red-600 text-white font-mono px-3 py-1 rounded-md  hover:scale-110'>Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
