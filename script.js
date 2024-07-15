//document is html doc, addEventListener attaches event handler to specific event, arg1 = type of event 
//--> DOMContentLoaded is when html doc is loaded, arg2 = event handler (what happens when event happens)
//--> () => {...} is a shorthand for writing functions (in-line), console.log prints message to console 
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready!');
});