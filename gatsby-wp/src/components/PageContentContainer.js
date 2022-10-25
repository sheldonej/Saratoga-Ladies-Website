import * as React from "react"
import '../index.css'


 class PageContentContainer extends React.Component {
    constructor() {
        super();
        this.state = { 
            contentStyle: {
                height: 'auto'
            },
            shadowType: 'none',
        }
      
    }

    updateStyles = () => {
        let shadowTypeValue = 'none'
        if(this.props.insetShadow){
            shadowTypeValue= "inset"
        } else if ( this.props.dropShadow ) { shadowTypeValue = "drop" }

        this.setState({ 
            contentStyle: { 
                ...this.state.contentStyle,
                height: this.props.height ? this.props.height : 'auto',
            },
            shadowType: shadowTypeValue 
        })
    }

    componentDidMount(){ this.updateStyles() }
    componentDidUpdate(prevProps, prevState) { 
        if(JSON.stringify(this.props) != JSON.stringify(prevProps)){
            this.updateStyles()
        } 
    }

    render() {
      return (
        <React.Fragment>
          <div className={`content-wrapper content-shadow-${this.state.shadowType}`} style={this.state.contentStyle}>
            <div className="content-inner-wrapper">
                { this.props.children }
            </div>
          </div>
        </React.Fragment>
      )
    }
}


export default PageContentContainer