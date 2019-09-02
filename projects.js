import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

toggleCategories() {
  if(this.state.activeTab === 0){
    return(
      <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background:'url(https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png) center/ cover'}} >React Project #1</CardTitle>
        <CardText>

        </CardText>
        <CardActions border>
          <Button colored>GitHub</Button>
          <Button colored>CodePen</Button>
          <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style ={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
      </Card>
    )
    if(this.state.activeTab === 0) {
    return(
      <div><h1>This is React</h1></div>
    )
  } else if (this.state.activeTab === 1) {
    return (
      <div><h1>This Is React Native</h1></div>
    )
    } else if (this.state.activeTab === 2) {
      return (
        <dir><h1>This Is JavaScript</h1></dir>
      )
    } else if (this.state.activeTab === 3) {
        return (
          <dir><h1>This Is Python</h1></dir>
      )
  }
  }



  render() {
    return(
      <div className="category-tabs">
        <Tabs activeTabs={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>React Native</Tab>
          <Tab>JavaScript</Tab>
          <Tab>Python</Tab>
        </Tabs>

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>

    )
  }
}

 export default Projects;
