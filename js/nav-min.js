var mainHeader=document.querySelector(".page-header"),navToggle=document.querySelector(".main-nav__toggle");mainHeader.classList.remove("page-header--nav-nojs"),mainHeader.classList.remove("page-header--nav-opened"),mainHeader.classList.add("page-header--nav-closed"),navToggle.addEventListener("click",function(){mainHeader.classList.contains("page-header--nav-closed")?(mainHeader.classList.remove("page-header--nav-closed"),mainHeader.classList.add("page-header--nav-opened")):(mainHeader.classList.add("page-header--nav-closed"),mainHeader.classList.remove("page-header--nav-opened"))});