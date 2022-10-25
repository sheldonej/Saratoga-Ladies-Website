import "./shapepagecss.css"
import Seo from "../components/seo"
import * as React from "react"
import {Square, TextAr, CenteredTextAr, Circle,} from '../components/Shapesjs'

const shapearrangement = () => (

    <div class="arrange">
        <Square background = {"blue"} />
        <TextAr background = {"yellow"} text ={"Text Area"}/>
        <CenteredTextAr background = {"purple"} text ={"Text Area"}/>
        <Circle background = {"grey"}/>
    </div>

)

export const Head = () => <Seo title="shapePage"/>
export default shapearrangement