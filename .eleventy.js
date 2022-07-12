const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/dist');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/netlify');

    eleventyConfig.addFilter("postDate", (dateObj) =>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
 
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}