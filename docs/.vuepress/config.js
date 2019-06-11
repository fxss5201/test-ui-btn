module.exports = {
  base: '/test-ui-btn/',
  title: '测试ui库',
  description: '测试ui库',
  markdown: {
    lineNumbers: true,
    toc: { includeLevel: [1, 2, 3] }
  },
  themeConfig: {
    repo: 'fxss5201/test-ui-btn',
    docsDir: 'docs',
    editLinks: true, 
    editLinkText: '帮助我们改进页面内容！',
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/component/' }
    ],
    sidebar: {
      '/component/': [
        {
          title: '组件',
          collapsable: false,
          children: [
            'testUiBtn'
          ]
        },
      ]
    },
    searchMaxSuggestions: 10,
    serviceWorker: {
      updatePopup: { 
        message: "有新内容", 
        buttonText: "更新" 
      }
    }
  }
}