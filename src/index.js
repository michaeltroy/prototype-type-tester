import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory, Router, Route, Link, History } from 'react-router'

/* import NotFound from './ui/404'
import TypeTester from './ui/type-tester' */

/*
 - responsive slider
 - load in fonts
 - style
 */


/**
 * Slider
 */

var startFontSize = (44 + 'px');

var slider = document.querySelector('.font_slider');
document.querySelector('.font_size').value = startFontSize;

slider.addEventListener('input', function() {
  document.querySelector('.font_sample-text').style.fontSize = (this.value + 'px');
  document.querySelector('.font_size').value = (this.value + 'px');
}, false)


/**
 *
 * Style selector
 */

var fontSelectStyle = document.querySelector('.font_select-style');
var selectIndex = fontSelectStyle.selectedIndex;
var selectVal = fontSelectStyle.options[selectIndex].value;
var sampleText = document.querySelector('.font_sample-text');

sampleText.style.fontSize = startFontSize;

function setFont() {
  var selectIndex = fontSelectStyle.selectedIndex;
  var selectVal = fontSelectStyle.options[selectIndex].value;
  var setFontWeight = sampleText.style.fontWeight = selectVal.toString();

  return setFontWeight;
}

fontSelectStyle.addEventListener('change', function() {
  setFont();
})


/**
 * Easter egg
 */

var easterEgg = document.querySelector('.font_sample-text');

easterEgg.addEventListener('change', function() {
  console.log('easter time');
  if (easterEgg.value === 'hello') {
    document.body.style.backgroundColor = 'goldenrod';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});
