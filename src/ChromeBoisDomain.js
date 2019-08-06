import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'
import { runInThisContext } from 'vm';


export default class ChromeBoisDomain extends Component {
  
  


  handleMouseMove = (event) => {
    /* TODO: This method should capture the `x` and `y` coordinates of the mouse
     * from the event and use them to invoke the `drawChromeBoiAtCoords`
     * function that has been provided and is already imported
     * (`drawChromeBoiAtCoords` expects two arguments, an x and a y coordinate)
     */
    const xPosition = event.clientX
    const yPosition = event.clientY 
    drawChromeBoiAtCoords(xPosition, yPosition) 
    
  }

 
  
  /* TODO: Create an event handler which, when fired, invokes the provided
   * `toggleCycling` function with no arguments. Don't forget the click event
   * listener that should fire it!
   *
   *  /
   
  /* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */

  keyDown = (event) => {
    if (event.key === 's') {
      resize('-')
    } else {
      resize('+')
    }
  }

 
  
  render() {
    return (
      <canvas id='canvas'
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        onKeyUp={this.keyDown}
        
         >
        width='900'
        height='600'
        tabIndex="0">
        
      </canvas>
    )
  }
}
