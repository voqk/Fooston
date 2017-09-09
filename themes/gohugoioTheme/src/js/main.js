import styles from './../css/main.css';
import './anchorforid.js'
import './clipboardjs.js'
import './codeblocks.js'
import './docsearch.js'
//import './hljs.js'
import './lazysizes.js'
import './menutoggle.js'
import './scrolldir.js'
import './smoothscroll.js'

import './nojs.js'



// TO use Jquery, just call the modules you want
// var $ = require('jquery/src/core');
// require('jquery/src/core/init');
// require('jquery/src/manipulation');

// OR, use all of them
var $ = require('jquery/src/jquery');

// And write your code
// $('body').append('<p>Jquery is working</p>');

var ratings = $('#ratings');
if(ratings.length === 1) {
    // set ratings color
    $("table tr td:nth-child(4)").each(setRatingCellColor);
    $("table tr td:nth-child(7)").each(setRatingCellColor);
    // set Wks Off color
    $("table tr td:nth-child(8)").each(setWksOffColor);
    // set change color
    $("table tr td:nth-child(9)").each(setChangeColor);
    // set plusMinus color
    $("table tr td:nth-child(10)").each(setPlusMinus);
    // set percent color
    $("table tr td:nth-child(13)").each(setPercentColor);
}

function setPercentColor() {
    var cell = $(this);
    var text = cell.text();
    if(text) {
        var valueStr = text.substring(0, text.length - 1);
        var value = parseFloat(valueStr);
        if(value > 50.0) {
            cell.css({
                'background-color': '#002060',
                'color': '#ffffff'
            });
        } else if (value > 40.0) {
            cell.css({
                'background-color': '#DDEBF7'
            });
        }
    }
}

function setPlusMinus() {
    var cell = $(this);
    var value = parseInt(cell.text());
    if(parseInt(value) < 0) {
        cell.css({
            'color': 'red'
        });
    }
}

function setChangeColor() {
    var cell = $(this);
    var value = parseInt(cell.text());
    if (value > 0) {
        cell.css({
            'background-color': '#C6EFCE',
            'color': '#006100'
        });
    } else if (value < 0) {
        cell.css({
            'background-color': '#FBC9C1',
            'color': '#9C0006'
        });
    }
}

function setWksOffColor() {
    var cell = $(this);
    if(cell.text() === '-') {
        return;
    }
    var value = parseInt(cell.text());
    if (value >= 3) {
        cell.css('background-color', '#C65911');
    } else if (value >= 1) {
        cell.css('background-color', '#F4B084');
    }
}

function setRatingCellColor(){
    var cell = $(this);
    var value = parseInt(cell.text());
    if(value >= 1900) {
        cell.css({
            'background-color': '#532476',
            'color':  '#ffffff'
        });
    } else if (value >= 1400) {
        cell.css({
            'background-color': '#203764',
            'color': '#ffffff'
        });
    } else if (value >= 1200) {
        cell.css({
            'background-color': '#305496',
            'color': '#ffffff'
        });
    } else if (value >= 1000) {
        cell.css('background-color', '#DDEBF7');
    } 
}
//
