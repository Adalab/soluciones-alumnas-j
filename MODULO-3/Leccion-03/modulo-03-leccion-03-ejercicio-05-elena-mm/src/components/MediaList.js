import React from 'react';
import MediaCard from './MediaCard';


const pic1URL = 'https://images.unsplash.com/photo-1595114720921-5a56692ed4ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60';
const pic2URL = 'https://images.unsplash.com/photo-1595089911462-6d66664ca5c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60';
const pic3URL = 'https://images.unsplash.com/photo-1595111714200-0d597e920388?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60';
/* Componente de clase */
class MediaList extends React.Component {
    render() {
        return (
            <ul>
                <li>
                <MediaCard 
                    name="Elena Valenzuela"
                    date="1 de enero de 2019"
                    img={pic1URL}
                    text="Hola! Soy una chica maravillosa y muy positiva."
                    likes="34523463"
                    heart="💚"
                />
                </li>
                <li>
                <MediaCard 
                    name="Amanda Palma"
                    date="20 de diciembre de 2018"
                    img={pic2URL}
                    text="Hola! Soy una chica divertidísima y muy alegre."
                    likes="345734763"
                    heart="💚"
                />
                </li>
                <li>
                <MediaCard 
                    name="Sandra Tapia"
                    date="13 de agosto de 2020"
                    img={pic3URL}
                    text="Hola! Soy una chica amable y agradable."
                    likes="34773455"
                    heart="💚"
                />
                </li>
            </ul>
        )
    }
}





/* Componente funcional */
// Lo paso a funcional para practicar
// const MediaList = () => {
//     return (
//         <ul>
//             <li>
//             <MediaCard 
//                 name="Elena Valenzuela"
//                 date="1 de enero de 2019"
//                 img={pic1URL}
//                 text="Hola! Soy una chica maravillosa y muy positiva."
//                 likes="34523463"
//                 heart="💚"
//             />
//             </li>
//             <li>
//             <MediaCard 
//                 name="Amanda Palma"
//                 date="20 de diciembre de 2018"
//                 img={pic2URL}
//                 text="Hola! Soy una chica divertidísima y muy alegre."
//                 likes="345734763"
//                 heart="💚"
//             />
//             </li>
//             <li>
//             <MediaCard 
//                 name="Sandra Tapia"
//                 date="13 de agosto de 2020"
//                 img={pic3URL}
//                 text="Hola! Soy una chica amable y agradable."
//                 likes="34773455"
//                 heart="💚"
//             />
//             </li>
//         </ul>
//     )
// }



export default MediaList;