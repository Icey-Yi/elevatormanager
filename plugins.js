export default (api, opts) => {
    api.addHTMLHeadScripts(() =>
      [
        {
          type: "text/javascript",
          src: 'http://api.map.baidu.com/api?v=3.0&ak=ZcxPxR66RzutRGhIDXeR3tpOjrzifNn1',
        }, {
          type: "text/javascript",
          src: "http://api.map.baidu.com/library/TextIconOverlay/1.2/src/TextIconOverlay_min.js",
        },
        {
          type: "text/javascript",
          src: "http://api.map.baidu.com/library/MarkerClusterer/1.2/src/MarkerClusterer_min.js",
        },
        {
          type:"text/javascript",
          src:"http://api.map.baidu.com/api?type=subway&v=1.0&ak=ZcxPxR66RzutRGhIDXeR3tpOjrzifNn1",
        }
      ]
    );
    api.addHTMLMetas(() => {
      return [
        {
          name: "viewport",
          content:"initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ];
    });
  }
  