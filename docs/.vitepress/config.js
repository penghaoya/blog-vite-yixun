module.exports = {
  title: "逸轩",
  description: "一个记录学习笔记的博客",
  themeConfig: {
    // 网站loggo
    logo: "./logo.jpg",
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    outline: "deep",
    // 页脚
    footer: {
      message: "逸轩",
      copyright: "🔥Copyright ©逸轩的学习笔记 ",
    },
    returnToTopLabel: "返回顶部",
    outlineTitle: "导航栏",
    darkModeSwitchLabel: "外观",
    sidebarMenuLabel: "归档",
    nav: [
      { text: "💭 Python", link: "/start/" },
      {
        text: "🔥 专栏",
        items: [
          { text: "🔥 前端算法", link: "/" },
          { text: "🔥 设计模式", link: "/patterns/guide/" },
          { text: "📋 面试大全", link: "/interview/" },
        ],
      },
      {
        text: "编程",
        items: [
          { text: "⭐ 资源导航", link: "/favorites" },
          { text: "💻 编程学习", link: "/program/" },
          { text: "🔧 编程工具", link: "/tool/" },
        ],
      },
    ],
    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      "/start/": [
        {
          text: "学习笔记",
          items: [
            { text: "笔记", link: "/start/xy" },
            { text: "Index", link: "/start/" },
            { text: "One", link: "/start/vue/" },
            { text: "Two", link: "/start/two/" },
          ],
        },
      ],
    },
  },
};
