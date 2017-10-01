function video_list() {
  code = document.createElement("div");
  code.innerHTML = `
    <p class="warning">
      <i class="fa fa-play-circle" aria-hidden="true"></i>
      All tutorials list is below:
    </p>
    <br>
    <ul class="list">
      <p><i class="fa fa-cube"></i> VUE Tutorials <span class="comment">use 'vue' command for select this category</span></p>
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
      <p><i class="fa fa-cube"></i> Angular2 Tutorials <span class="comment">use 'angular2' command for select this category</span></p>
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
      Use 'video play  &lsaquo;video_category&rsaquo; &lsaquo;video_id&rsaquo;' command for watching the tutorial...
    </p>
    <br>
  `;
  document.getElementById("terminal_screen").appendChild(code);
}

function video_play(x) {
  code = document.createElement("p");
  if ( x == 'vue 1' ) {
    code.innerHTML = '<span class="info">"THE VUE CLI AND .VUE FILES | VueJS 2 | Learning the Basics"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/6noJ0dlG7jM");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'angular2 1' ) {
    code.innerHTML = '<span class="info">"Angular 2 Tutorial - Complete Introduction - Angular 2 CLI Setup, Components, Databinding"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/h_D3VFfhvs4");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'angular2 2' ) {
    code.innerHTML = '<span class="info">"SETUP & CLI - Angular 2.0 Final - Getting Started"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/nvD2Dvzj8_E");
    document.getElementById("video_player").className = "active";
    document.getElementById("terminal_screen").appendChild(code);
    document.getElementById("video_player").appendChild(video);
  } else if ( x == 'angular2 3' ) {
    code.innerHTML = '<span class="info">"ROUTING - Angular 2.0 Final - Getting Started"</span> is starting...';
    video.setAttribute("src", "https://www.youtube.com/embed/BHtVJbJpnNU");
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
}
