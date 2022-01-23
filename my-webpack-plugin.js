// Custom 화 한 plugin

class MyWebpackPlugin {
  apply(compiler) {
    // plugin 이 종료되면 2번째 인자로 준 Callback 함수가 실행된다.
    // compiler.hooks.done.tap("My Plugin", (stats) => {
    //   console.log("MyPlugin: done");
    // });

    // compiler.plugin() 함수로 후처리한다
    compiler.plugin("emit", (compilation, callback) => {
      // Compliation 을 통해서 Webpack 이 번들링 한 결과물에 대한 접근을 할 수 있다.
      const source = compilation.assets["main.js"].source();
      // 번들링 된 main.js 파일 상단에 banner 문자열이 추가되도록 하는 소스
      compilation.assets["main.js"].source = () => {
        const banner = [
          "/**",
          " * 이것은 BannerPlugin이 처리한 결과입니다.",
          " * Build Date: 2022-01-19",
          " */",
        ].join("\n");
        return banner + "\n" + source;
      };
      callback();
    });
  }
}

module.exports = MyWebpackPlugin;
