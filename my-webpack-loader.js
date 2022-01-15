module.exports = function myWebpackLoader(content) {
  // console.log("js 파일마다 loader 동작");
  console.log("content : ", content);
  return content.replace("console.log(", "alert(");
};
