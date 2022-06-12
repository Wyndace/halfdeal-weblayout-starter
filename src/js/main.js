// === JS for index.html =========================================================================================================================================

fileInclude.include("./components/ex.js");

// ==== Button Tap animation ======================================================================================================================================

document.addEventListener('click', (e) => {
    if (e.target.closest(".btn")) {
        tapAnimation(e.target.closest(".btn"));
    }
});

// ========================================================================================================================================================================


// ====================================================================================================================================================================
