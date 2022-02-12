class HeaderEffects {
    constructor(mobileMenu, navList, navLinks, header) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.header = document.querySelector(header);
      this.activeClass = "active";
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.mobileMenu.classList.toggle(this.activeClass);
      this.navList.classList.toggle(this.activeClass);
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
      this.navLinks.forEach((link) => {
        link.addEventListener("click", this.handleClick);
      });
    }
    sticky() {
      window.addEventListener("scroll", () => {
        this.header.classList.toggle("sticky", window.scrollY > 200);
      });
    }
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  const headerEfffect = new HeaderEffects(
    ".mobileMenu",
    ".navListMenu",
    ".navList li",
    "header"
  );
  headerEfffect.init();
  headerEfffect.sticky();