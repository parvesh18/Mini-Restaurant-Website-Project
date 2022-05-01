import React from 'react'
import Card from '../Card'
import Pizza1 from '../../photos/pizza/pizza1.jpg'
import Pizza2 from '../../photos/pizza/pizza2.jpg'
import Pizza3 from '../../photos/pizza/pizza3.jpg'
import Pizza4 from '../../photos/pizza/pizza4.jpg'
import Pizza5 from '../../photos/pizza/pizza5.jpg'

function Pizza() {

    const content = [
        {
            name: "Pepperoni Pizza",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Cheese Pizza",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Onion Pizza",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Cheese Pizza",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Corn Pizza",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
    ]

    return (
        <div className='flex justify-center py-10'>
            <div className='grid md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:space-y-0 lg:gap-x-28 lg:gap-y-20 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-20 grid-flow-row xl:my-16 xl:space-y-0 space-y-16'>
                <Card
                    name={content[0].name}
                    about={content[0].description}
                    location={Pizza1}
                />
                <Card
                    name={content[1].name}
                    about={content[1].description}
                    location={Pizza2}
                />
                <Card
                    name={content[2].name}
                    about={content[2].description}
                    location={Pizza3}
                />
                <Card
                    name={content[3].name}
                    about={content[3].description}
                    location={Pizza4}
                />
                <Card
                    name={content[4].name}
                    about={content[4].description}
                    location={Pizza5}
                />
            </div>
        </div>
    )
}

export default Pizza
