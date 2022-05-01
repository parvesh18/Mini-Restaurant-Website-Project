import React from 'react'
import Card from '../Card'
import MaslaDosa from '../../photos/south/masalaDosa.jpg'
import Idaly from '../../photos/south/idaly.webp'
import Fish from '../../photos/south/fish.jpg'
import Dhokla from '../../photos/south/dhokla.jpg'
import Vada from '../../photos/south/vada.jpg'


function Pizza() {

    const content = [
        {
            name: "Masla Dosa",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Panner Idli",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Fryed Fish",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Dhokla",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
        {
            name: "Vada",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tenetur deleniti amet nulla fuga tempore necessitatibus repellendus dicta omnis, excepturi doloribus magnam earum.",
        },
    ]

    return (
        <div className='flex justify-center py-10'>
            <div className='grid md:grid-cols-2 md:gap-x-16 md:gap-y-12 md:space-y-0 lg:gap-x-28 lg:gap-y-20 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-20 grid-flow-row xl:my-16 xl:space-y-0 space-y-16'>
                <Card
                    name={content[0].name}
                    about={content[0].description}
                    location={MaslaDosa}
                />
                <Card
                    name={content[1].name}
                    about={content[1].description}
                    location={Idaly}
                />
                <Card
                    name={content[2].name}
                    about={content[2].description}
                    location={Fish}
                />
                <Card
                    name={content[3].name}
                    about={content[3].description}
                    location={Dhokla}
                />
                <Card
                    name={content[4].name}
                    about={content[4].description}
                    location={Vada}
                />
            </div>
        </div>
    )
}

export default Pizza
