import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '*': {
    'boxSizing': 'border-box'
  },
  // Slideshow container
  'slideshow-container': {
    'maxWidth': [{ 'unit': '%H', 'value': 0.6 }],
    'position': 'relative',
    'margin': [{ 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'string', 'value': 'auto' }]
  },
  'mySlides': {
    'display': 'block'
  },
  // Next & previous buttons
  'prev': {
    'cursor': 'pointer',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': -22 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'color': 'white',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'transition': '0.6s ease',
    'borderRadius': '0 3px 3px 0'
  },
  'next': {
    'cursor': 'pointer',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'width': [{ 'unit': 'string', 'value': 'auto' }],
    'marginTop': [{ 'unit': 'px', 'value': -22 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 16 }],
    'color': 'white',
    'fontWeight': 'bold',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'transition': '0.6s ease',
    'borderRadius': '0 3px 3px 0'
  },
  // Position the "next button" to the right
  'next': {
    'right': [{ 'unit': 'px', 'value': 0 }],
    'borderRadius': '3px 0 0 3px'
  },
  // On hover, add a black background color with a little bit see-through
  'prev:hover': {
    'backgroundColor': 'rgba(0,0,0,0.8)'
  },
  'next:hover': {
    'backgroundColor': 'rgba(0,0,0,0.8)'
  },
  // Caption text
  'text': {
    'color': '#f2f2f2',
    'fontSize': [{ 'unit': 'px', 'value': 15 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'position': 'absolute',
    'bottom': [{ 'unit': 'px', 'value': 8 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center'
  },
  // Number text (1/3 etc)
  'numbertext': {
    'color': '#f2f2f2',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'padding': [{ 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 12 }],
    'position': 'absolute',
    'top': [{ 'unit': 'px', 'value': 0 }]
  },
  // The dots/bullets/indicators
  'dot': {
    'cursor': 'pointer',
    'height': [{ 'unit': 'px', 'value': 13 }],
    'width': [{ 'unit': 'px', 'value': 13 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }],
    'backgroundColor': '#bbb',
    'borderRadius': '50%',
    'display': 'inline-block',
    'transition': 'background-color 0.6s ease'
  },
  'active': {
    'backgroundColor': '#717171'
  },
  'dot:hover': {
    'backgroundColor': '#717171'
  },
  // Fading animation
  'fade': {
    'WebkitAnimationName': 'fade',
    'WebkitAnimationDuration': '3s',
    'animationName': 'fade',
    'animationDuration': '3s'
  }
});
