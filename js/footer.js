function triggerFooterColumnSection(id){
    const elementToExpand = document.getElementById(id);
    const parentElement = elementToExpand.closest('.globalfooter-column-section');
    parentElement.classList.toggle('expanded');
}