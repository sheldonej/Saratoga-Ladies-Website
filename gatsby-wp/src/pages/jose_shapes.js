import React from "react"
import Layout from "../components/layout"
import "../components/jose_shapes.css"

const IndexPage = () => (
  <Layout>
    <div style = {{ display: "flex", flexWrap: "wrap"}}>
      <div className="quadOne">
        <div className="diamond"> </div>
      </div>

      <div className="quadTwo">
        <div className="circle"> </div>
      </div>

      <div className="quadThree">
      <div className="rectangle"> 
            <div className="text">Long block of text that continues for a while </div>
        </div>
      </div>
    

      <div className="quadFour">
        <div className="random"> 
          <div className="text">Centered Text</div>
        </div>
      </div>
    </div>

    <h1 style ={{ textAlign: "center"}}> TEST</h1>
    <p style ={{ textAlign: "center"}}>Jose Idrovo </p>
  </Layout>
)

export default IndexPage
