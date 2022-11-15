import * as React from "react"
import "./SectionOne.css"
import {} from './SectionElements' 
import LinedHeader from "../../LinedHeader/index.jsx"
/* ------------------------------------------------------------------------ */
/* TASK: MAKE THIS CSS INTO A STYLED COMPONENT CSS LIKE LINED HEADER  USES  */
/* ------------------------------------------------------------------------ */

const SectionOne = () => {
    return (
        <div className = "section-header">
            <LinedHeader>Lorem ipsum dolor sit amet</LinedHeader> 
            <div className = "flex center flow-col">
                <p> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien pellentesque habitant morbi tristique senectus et. Mollis aliquam ut porttitor leo a diam sollicitudin. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Morbi quis commodo odio aenean sed adipiscing diam. Et leo duis ut diam quam. Non nisi est sit amet. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Scelerisque felis imperdiet proin fermentum leo. Morbi tristique senectus et netus et. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Ac odio tempor orci dapibus ultrices in iaculis nunc sed. Hac habitasse platea dictumst quisque sagittis purus sit. Nunc vel risus commodo viverra maecenas. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Hac habitasse platea dictumst vestibulum. Nibh praesent tristique magna sit amet purus gravida.
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Integer feugiat scelerisque varius morbi enim nunc. Nibh tortor id aliquet lectus proin. Ipsum dolor sit amet consectetur adipiscing elit ut. In hac habitasse platea dictumst quisque. Erat nam at lectus urna duis convallis. Turpis egestas sed tempus urna et pharetra. A diam sollicitudin tempor id. Tempus imperdiet nulla malesuada pellentesque. Praesent semper feugiat nibh sed pulvinar. Massa sapien faucibus et molestie ac feugiat. Neque laoreet suspendisse interdum consectetur libero id. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Cursus vitae congue mauris rhoncus aenean. Egestas maecenas pharetra convallis posuere morbi leo. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Eget nulla facilisi etiam dignissim diam quis.
                </p>
            </div>
            <div className = "flex vertical-center">
                <button id="learn">Learn More About The Saratoga Ladies</button>
            </div>
        </div>
    )
}

export default SectionOne;