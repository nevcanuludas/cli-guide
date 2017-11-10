function video_list() {
  code = document.createElement("div");
  code.innerHTML = `
    <p class="warning">
      <i class="fa fa-play-circle" aria-hidden="true"></i>
      All tutorials list is below:
    </p>
    <br>
    <ul class="list">
      <p><i class="fa fa-cube"></i> VUE Tutorials <span class="comment">use '<span class="category">vue</span>' command for select this category</span></p>
      <li>
        <span class="v_id">1</span>
        <span class="v_name">THE VUE CLI AND .VUE FILES | VueJS 2 | Learning the Basics</span> 
        <span class="comment">
          <span class="v_channel">Academind</span> 
          <span class="v_date">03.12.2016</span>
        </span>  
      </li>
    </ul>
    <ul class="list">
      <p><i class="fa fa-cube"></i> Angular 2 Tutorials <span class="comment">use '<span class="category">ng2</span>' command for select this category</span></p>
      <li>
        <span class="v_id">1</span>
        <span class="v_name">Angular 2 Tutorial - Complete Introduction - Angular 2 CLI Setup, Components, Databinding</span> 
        <span class="comment">
          <span class="v_channel">Academind</span> 
          <span class="v_date">21.07.2016</span>
        </span>  
      </li>
      <li>
        <span class="v_id">2</span>
        <span class="v_name">SETUP & CLI - Angular 2.0 Final - Getting Started</span> 
        <span class="comment">
          <span class="v_channel">Academind</span> 
          <span class="v_date">10.10.2016</span>
        </span>  
      </li>
      <li>
        <span class="v_id">3</span>
        <span class="v_name">ROUTING - Angular 2.0 Final - Getting Started</span> 
        <span class="comment">
          <span class="v_channel">Academind</span> 
          <span class="v_date">28.10.2016</span>
        </span>  
      </li>
    </ul>
    <p class="info">
      <i class="fa fa-info-circle"></i>
      Use 'video play  <span class="comment">&lsaquo;<span class="category">video_category</span>&rsaquo; &lsaquo;<span class="id">video_id</span>&rsaquo;</span>' command for watching the tutorial...
    </p>
  `;
  document.getElementById("terminal_screen").appendChild(code);
}

function video_categories() {
  code = document.createElement("div");
  code.innerHTML = `
    <p class="warning">
      <i class="fa fa-list" aria-hidden="true"></i>
      All tutorial categories list is below:
    </p>
    <br>
    <ul class="list">
      <li>VUE <span class="comment">[ 1 video ]</span></li>
      <li>Angular 2 <span class="comment">[ 3 videos ]</span></li>
    </ul>
    <p class="info">
      <i class="fa fa-info-circle"></i>
      Use 'video list &lsaquo;video_category&rsaquo;</span>' command for listing the category tutorials...
    </p>
  `;
  document.getElementById("terminal_screen").appendChild(code);
}

function video_play(x) {
  code = document.createElement("p");
  if ( x == 'vue 1' ) {
    code.innerHTML = '<span class="info">"THE VUE CLI AND .VUE FILES | VueJS 2 | Learning the Basics"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/6noJ0dlG7jM?rel=0showinfo=0&autoplay=1&controls=1&version=3&enablejsapi=1");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'ng2 1' ) {
    code.innerHTML = '<span class="info">"Angular 2 Tutorial - Complete Introduction - Angular 2 CLI Setup, Components, Databinding"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/DBjPIabiRNg?rel=0showinfo=0&autoplay=1&controls=1&version=3&enablejsapi=1");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'ng2 2' ) {
    code.innerHTML = '<span class="info">"SETUP & CLI - Angular 2.0 Final - Getting Started"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/nvD2Dvzj8_E?rel=0&showinfo=0&autoplay=1&controls=1&version=3&enablejsapi=1");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'ng2 3' ) {
    code.innerHTML = '<span class="info">"ROUTING - Angular 2.0 Final - Getting Started"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/BHtVJbJpnNU?rel=0&showinfo=0&autoplay=1&controls=1&version=3&enablejsapi=1");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else {
    code = document.createElement("p");
    code.className = "error";
    code.innerHTML = 'Ops! "' + x + '" could not be found! <pre class="warning"> ¯\\_(ツ)_/¯ </pre>';
    document.getElementById("terminal_screen").appendChild(code);
  }
}

function video_close() {
  document.getElementById("video_player").className = "";
  code = document.createElement("p");
  code.innerHTML = 'Video has been closed';
  document.getElementById("terminal_screen").appendChild(code);
  setFocus();
}

function video_pause() {
  code = document.createElement("p");
  code.innerHTML = 'This function is not working right now :(';
  // code.innerHTML = 'Video has been paused';
  document.getElementById("terminal_screen").appendChild(code);
}

function video_resume() {
  code = document.createElement("p");
  code.innerHTML = 'This function is not working right now :(';
  // code.innerHTML = 'Video has been resumed';
  document.getElementById("terminal_screen").appendChild(code);
}
