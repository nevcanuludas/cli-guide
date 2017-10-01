var command = document.getElementById("cmd_line");
var commandArry = [];
var video = document.createElement("iframe");
video.setAttribute("width", "100%");
video.setAttribute("height", 300);
video.setAttribute("frameborder", 0);
video.setAttribute("allowfullscreen", 1);
video.setAttribute("autoplay", 1);
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);  

/////////////////////////////////////////////////////
///////////////  KEYBOARD EVENTS ////////////////////
/////////////////////////////////////////////////////

var elem = document.getElementById("cmd_line");
elem.onkeyup = function(e) { // ESC
  if (e.keyCode == 13){
    var command_value = command.value.replace(/(\r\n|\n|\r)/gm,"");
    if (command_value === "") {
      document.getElementById("cmd_line").value = "";
      document.getElementById("cmd_line").focus();
    } else {
      commandArry.push(command_value);
      i = commandArry.length;
      runCode();
      document.getElementById("cmd_line").scrollIntoView();
    }
  }
  else if (e.keyCode == 38) { // UP
    console.log(commandArry);
    console.log(i);
    if (i > 0) {
      i--; 
      document.getElementById("cmd_line").value = commandArry[i];
    } else {
      document.getElementById("cmd_line").value = "";
    }
  }
  else if (e.keyCode == 40) { // DOWN
    console.log(commandArry);
    console.log(i);
    if (i < commandArry.length) { 
      document.getElementById("cmd_line").value = commandArry[i];
      i++;
    } else {
      document.getElementById("cmd_line").value = "";
    }
  }
}

/////////////////////////////////////////////////////
//////////////////  FINDING CMD /////////////////////
/////////////////////////////////////////////////////

function runCode() {
  var command_value = command.value.replace(/(\r\n|\n|\r)/gm,"");
  var code = document.createElement("p");
  
  if ( command_value == "exit" ) {
    exit();
  } 
  else if ( command_value == "clear" ) {
    clear();
  } 
  else {
    code.className = "cmd";
    code.innerHTML = command_value + '<span class="comment"> ↵</span>';
    document.getElementById("terminal_screen").appendChild(code);
    
    if ( command_value == "--help" || command_value == "help" ) {
      help();
    } else if (command_value == "whoami") {
      whoami();
    } else if (command_value == "video -l" || command_value == "video list") {
      video_list();
    } else if (command_value == "video close") {
      video_close();
    } else if (command_value.split(' ').slice(0,2).join(' ') == "video -p" || command_value.split(' ').slice(0,2).join(' ') == "video play") {
      video_play(command_value.split(' ').slice(2).join(' '));
    } else {  
      code = document.createElement("p");
      code.className = "error";
      code.innerHTML = '"' + command_value + '" is not defined! <pre class="warning"> ¯\\_(ツ)_/¯ </pre>';
      document.getElementById("terminal_screen").appendChild(code);
    }
  }
  cmd_clear();
}

/////////////////////////////////////////////////////
/////////////////  CMD FUNCTIONS ////////////////////
/////////////////////////////////////////////////////

function exit() {
  var window_close = confirm("Do you want to close this page?");
  if ( window_close === true ) {
    window.close();
    alert("github.com does not allow window.close() function")
  }
}

function clear() {
  var ps = document.getElementById("terminal_screen").querySelectorAll("*");
  var ps_length = ps.length;
  var i;
  for(i = ps_length - 1; i >= 0; i--) {
    ps[i].remove();
  }
}

function help() {
  code = document.createElement("div");
  code.innerHTML = `
    <p class="warning"><i class="fa fa-question-circle" aria-hidden="true"></i> These are common commands used in various situations:</p>
    <br>
    <ul class="list">
      <li>whoami <span class="comment"> ............................ [Shows who am i]</span></li>
      <li>video list <span class="comment">or -l .................. [Lists all videos]</span></li>
      <li>video play &lsaquo;video_name&rsaquo; <span class="comment">or -p ..... [Plays selected video]</span></li>
      <li>clear <span class="comment"> ............................. [Clear screen]</span></li>      
      <li>exit <span class="comment"> .............................. [Close current browser window]</span></li>
    </ul>
    `;
  document.getElementById("terminal_screen").appendChild(code);
}

function whoami() {
  code = document.createElement("p");
  code.innerHTML = "nevcanuludas";
  document.getElementById("terminal_screen").appendChild(code);
}

function cmd_clear() {
  command.value = "";
}

/////////////////////////////////////////////////////

function autosize() {
  var el = this;
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  }, 0);
}

function setFocus() {
  document.getElementById("cmd_line").focus();
}
