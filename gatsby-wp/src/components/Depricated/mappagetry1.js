import Seo from "../components/seo"
import * as React from "react"
import LeafletMap from "../components/googlemapcomp"
import Layout from "../components/layout"

const mapemb = () => (
    <Layout>
        <section style={{ "margin": "0.5rem 1rem" }}>
            <p>Displaying a map below</p>
        </section>

        {typeof window !== 'undefined' &&
            <LeafletMap
                position={[15,-0.7]}
                zoom={11}
                markerText={"A marker for the map"}
            />
        }

    </Layout>
)

export const Head = () => <Seo title="shapePage"/>
export default mapemb