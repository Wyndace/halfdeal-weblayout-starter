// === HTML Task ===================================================================================================================================================================================================================================================

// ==== Plugins ====================================================================================================================================================================================================================================================

import gulp from "gulp";
import fileInclude from "gulp-file-include";
import htmlMin from "gulp-htmlmin";
import size from "gulp-size"
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import webpHtml from "gulp-html-img-wrapper";
import realFavicon from "gulp-real-favicon";

import fs from "fs";

// =================================================================================================================================================================================================================================================================

// ==== Configs ====================================================================================================================================================================================================================================================

import path from "../config/path.js"
import settings from "../config/settings.js"

// =================================================================================================================================================================================================================================================================


// ==== HTML processing ============================================================================================================================================================================================================================================

const htmlTask = () => {
    return gulp.src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML TASK",
                message: error
            }))
        }))
        .pipe(fileInclude(settings.htmlFileInclude))
        .pipe(webpHtml(settings.webpHtml))
        .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(path.favicon.dataFile)).favicon.html_code))
        .pipe(size({
            title: '[HTML TASK] Before minify'
        }))
        .pipe(htmlMin(settings.htmlMin))
        .pipe(size({
            title: '[HTML TASK] After minify'
        }))
        .pipe(gulp.dest(path.html.dest))
};

// =================================================================================================================================================================================================================================================================

// ==== Exporting Task =============================================================================================================================================================================================================================================

export default htmlTask;

// =================================================================================================================================================================================================================================================================

// =================================================================================================================================================================================================================================================================