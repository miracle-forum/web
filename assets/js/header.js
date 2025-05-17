// header.js
document.addEventListener("DOMContentLoaded", function () {
    const headerHTML = `
    <header class="header-area header-sticky">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <nav class="main-nav">
                      <!-- ***** Logo Start ***** -->
                      <a href="index.html" class="logo">
                          <img src="assets/images/logo.png" alt="">
                      </a>
                      <!-- ***** Logo End ***** -->
                      <!-- ***** Search Start ***** -->
                      
                      <!-- ***** Search End ***** -->
                      <!-- ***** Menu Start ***** -->
                      <ul class="nav">
                          <li><a href="index.html" class="active">Home</a></li>
                          <!-- <li><a href="browse.html">Browse</a></li> -->
                          <!-- <li><a href="details.html">Details</a></li> -->
                          <!-- <li><a href="streams.html">Streams</a></li> -->
                          <!-- <li><a href="profile.html">Faucet <img src="assets/images/profile-header.jpg" alt=""></a></li> -->
                      </ul>   
                      <a class='menu-trigger'>
                          <span>Menu</span>
                      </a>
                      <!-- ***** Menu End ***** -->
                  </nav>
              </div>
          </div>
      </div>
    </header>
    `;
  
    document.getElementById("header-placeholder").innerHTML = headerHTML;
  });
  