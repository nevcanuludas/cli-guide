var command = document.getElementById("cmd_line");
var commandArry = [];
var video = document.createElement("iframe");
video.setAttribute("width", "100%");
video.setAttribute("height", 300);
video.setAttribute("frameborder", 0);
var textarea = document.querySelector('textarea');
textarea.addEventListener('keydown', autosize);  

// YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
};

/////////////////////////////////////////////////////
//////////////////  FINDING CMD /////////////////////
/////////////////////////////////////////////////////

function runCode() {
  var command_value = command.value.replace(/(\r\n|\n|\r)/gm,"");
  var code = document.createElement("p");
  
  if ( command_value == "exit" || command_value == "logout" ) {
    exit();
  } 
  else if ( command_value == "clear" || command_value == "clr" ) {
    clear();
  } 
  else {
    code.className = "cmd";
    code.innerHTML = command_value + '<span class="comment"> ↵</span>';
    document.getElementById("terminal_screen").appendChild(code);
    
    if ( command_value == "--help" || command_value == "help" ) {
      help();
    } else if (command_value == "whoami" || command_value == "who am i") {
      whoami();
    } else if (command_value == "author" || command_value == "who is your daddy") {
      author();
    } else if (command_value == "video --help") {
      video_help();
    } else if (command_value == "video categories") {
      video_categories();
    } else if (command_value == "video pause") {
      video_pause();
    } else if (command_value == "video resume") {
      video_resume();
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
    alert("github.com does not allow window.close() function");
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
      <!--
      <li>whoami <span class="comment">.......................................... [ Shows who am i ]</span></li>
      <li>exit <span class="comment">or logout .................................. [ Close current browser window ]</span></li>
      -->
      <li>help <span class="comment">or --help ................................... [ Lists all commands ]</span></li>
      <li>&lsaquo;cmd&rsaquo; --help <span class="comment">..................................... [ Lists all commands of specified command ]</span></li>
      <li>video list <span class="comment">or -l ................................. [ Lists all categories and videos ]</span></li>
      <li>video play &lsaquo;category_key&rsaquo; &lsaquo;video_id&rsaquo; <span class="comment">or -p ....... [ Plays selected video ]</span></li>
      <li>video close <span class="comment">...................................... [ Closes video window ]</span></li>
      <li>clear <span class="comment">or clr ..................................... [ Clear screen ]</span></li>      
      </ul>
      `;
      document.getElementById("terminal_screen").appendChild(code);
    }

    function video_help() {
      code = document.createElement("div");
      code.innerHTML = `
      <p class="warning"><i class="fa fa-question-circle" aria-hidden="true"></i> These are common commands used in video section:</p>
      <br>
      <ul class="list">
      <li>video list <span class="comment">or -l ................................. [ Lists all categories and videos ]</span></li>
      <li>video categories <span class="comment">................................. [ Lists all categories ]</span></li>
      <li>video list &lsaquo;video_category&rsaquo; <span class="comment">...................... [ Lists all categories ]</span></li>
      <li>video play &lsaquo;category_key&rsaquo; &lsaquo;video_id&rsaquo; <span class="comment">or -p ....... [ Plays selected video ]</span></li>
      <li>video pause <span class="comment">...................................... [ Pauses video ]</span></li>
      <li>video resume <span class="comment">..................................... [ Resumes video ]</span></li>
      <li>video close <span class="comment">...................................... [ Closes video window ]</span></li>
    </ul>
  `;
  document.getElementById("terminal_screen").appendChild(code);
}

function whoami() {
  code = document.createElement("p");
  code.innerHTML = "nevcanuludas";
  document.getElementById("terminal_screen").appendChild(code);
}

function author() {
  code = document.createElement("p");
  code.innerHTML = `
    Nevcan Uludaş <span class='comment'>@nevcanuludas</span><br>
    • Front-end Architect <span class='comment'>@dogusteknoloji</span><br>
    • Owner & Instructor <span class='comment'>@neptunsualti</span><br>
    • Underwater Explorer <span class='comment'>@guehq</span><br>
    <br>
    <a href='https://github.com/nevcanuludas' target='_blank'>GitHub</a>
    <a href='https://codepen.io/nevcanuludas/' target='_blank'>Codepen.io</a>
    <a href='https://twitter.com/nevcanuludas' target='_blank'>Twitter</a>
    <br>
    <br>
    `;
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
