import mainLogo from "../assests/logos/500_icon-removebg.png"


export default function Navbar() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand me-2" href="/">
        <img
          src={mainLogo}
          height={40} 
          width={40}
          alt="MDB Logo"
          loading="lazy"
          style={{marginTtop: "-1px;"}}
        />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarButtonsExample">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
    </nav>
    </>
  );
}