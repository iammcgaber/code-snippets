//Remove NYT subscription blocker
javascript:(function(){let els = Array.from(document.getElementsByClassName("nytc---modal-window---windowContainer"));els.map(el => el.parentElement.remove(el));let body = Array.from(document.getElementsByClassName("nytc---modal-window---noScroll"));body.map(el => {el.classList.remove("nytc---modal-window---noScroll");el.classList.remove("logged-out");})})();

