const HEADER_COMMENT = `/*
* Pyramid CSS
* v0.0.1
* @2023
*/
`;

const SASS_PATH = ['sass/*.scss', 'sass/**/*.scss'];

const BASE_NAME = "pyramid";

const OUTPUT_FOLDER = "dist/";
const OUTPUT_FILE_PATH = OUTPUT_FOLDER + BASE_NAME;
const OUTPUT_FILE_FULL_NAME = `${OUTPUT_FILE_PATH}.css`

const ALL_CSS_PATH = OUTPUT_FOLDER + "*.css";

module.exports = {
    HEADER_COMMENT,
    SASS_PATH,
    OUTPUT_FOLDER,
    OUTPUT_FILE_FULL_NAME,
    BASE_NAME,
    ALL_CSS_PATH
};