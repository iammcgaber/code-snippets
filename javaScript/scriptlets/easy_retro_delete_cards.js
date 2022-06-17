//Delete all cards from an easyretro board.
javascript:(function() {let cards = document.getElementsByClassName("ri-more-2-fill"); for(let card of cards) { card.click(); let dropDowns = document.getElementsByClassName("dropdown-menu-card"); for(let dropDown of dropDowns) { if (dropDown.children.length > 0) { Array.from(dropDown.children).slice(-1).pop().click(); document.getElementsByClassName("swal2-confirm")[0].click();}}}})();


function() {
    let cards = document.getElementsByClassName("ri-more-2-fill"); 
    for(let card of cards) { 
        card.click(); 
        let dropDowns = document.getElementsByClassName("dropdown-menu-card"); 
        for(let dropDown of dropDowns) {
            if (dropDown.children.length > 0) { 
                Array.from(dropDown.children).slice(-1).pop().click();
                document.getElementsByClassName("swal2-confirm")[0].click();
            }
        }
    }
})();