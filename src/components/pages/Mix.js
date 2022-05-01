import React from 'react'
import Card from '../Card'
import Burger from '../../photos/chinese/burger.jpg'
import Noodles from '../../photos/chinese/noodels.jpg'
import Momos from '../../photos/chinese/momos.jpg'
import SpringRoll from '../../photos/chinese/SpringRoll.jpg'
import ChilliPotato from '../../photos/chinese/chillipotato.jpg'

function Pizza() {

    const content = [
        {
            name: "Ramen Burger",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Farfalle Noodles",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Chilly Momo",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Spring Roll",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Chilly Potato",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
    ]

    return (
        <div className='flex justify-center py-10 mx-4'>
            <div className='grid md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:space-y-0 lg:gap-x-28 lg:gap-y-20 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-20  xl:my-16 xl:space-y-0 space-y-16'>
                <Card
                    name={content[0].name}
                    about={content[0].description}
                    location={Burger}
                />
                <Card
                    name={content[1].name}
                    about={content[1].description}
                    location={Noodles}
                />
                <Card
                    name={content[2].name}
                    about={content[2].description}
                    location={Momos}
                />
                <Card
                    name={content[3].name}
                    about={content[3].description}
                    location={SpringRoll}
                />
                <Card
                    name={content[4].name}
                    about={content[4].description}
                    location={ChilliPotato}
                />
            </div>
        </div>
    )
}

export default Pizza
