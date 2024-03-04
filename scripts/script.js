const headerSearchInput = document.querySelector(".notes__search-icon-label");
const searchElement = document.querySelector(".notes__searchField-wrapper");
const searchInputLabel = document.querySelector(".notes__header-searchLabel");

const toggleHeaderSearch = () => {

    let element = parseInt(window.getComputedStyle(searchElement).height);
    
    if (element > 0) {

        searchElement.style.cssText = "height: 0; padding: 0;"
        searchInputLabel.style.display = "none";
        
    } else if (element === 0) {

        searchElement.style.height = "45px";
        searchInputLabel.style.display = "flex";
    }
}

headerSearchInput.addEventListener("click", toggleHeaderSearch);
