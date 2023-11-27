function urlSlug(title) {

     return title
    .toLowerCase()
    .trim()  //removeswhitespace from both ends of a string.
    .split(/\s+/)
    .join("-");

/*

return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();

*/

}

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");