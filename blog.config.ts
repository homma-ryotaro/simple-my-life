// Purpose: This file is used to configure the blog, including the author, title, description, and other settings.

import Intro from "./components/intro.mdx"; // introduction or about me

const siteData: any = {
  author: "h-ryotaro", // author name
  logo: {
    // how to change the favicon of the website?
    // change the app/favicon.ico file directly，or refer to the document below
    // https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons

    // you can use image or text as the logo, you can choose both, but the image will be displayed first
    image: "/logo.png", //  the file path of the logo in the public directory
    text: "SimpleMyLife", // null || text

    // whether the logo is a link to the home page
    isHomeLink: true, // true | false
  },

  // website title
  title: "SimpleMyLife",

  // website description
  description: "",

  // light | dark
  theme: "light",

  // your blog repo || your github repo || null
  githubRepo: "https://github.com/homma-ryotaro/simple-my-life",

  // routes
  routes: [
    {
      name: "Blog",
      value: "/blog",
    },
    {
      name: "Tags",
      value: "/tags",
    },
    {
      name: "Projects",
      value: "/project",
    },
    {
      name: "Dev",
      value: "/dev",
    },
  ],

  // home page config
  home: {
    title: "SimpleMyLife",
    description: "丁寧な暮らしをしたいエンジニアのブログ",

    // introduction or about me
    intro: Intro, // file path of the introduction

    socials: {
      github: "https://github.com/homma-ryotaro",
      twitter: "https://twitter.com",
      instagram: "",
      youtube: "",
    },
  },

  // blog page config
  blog: {
    title: "日常ブログ",
    description:
      "購入品や、読んだ本、観た映画など、日常の中で感じたことを書いています。",
    pagination: {
      enabled: true,
      pageSize: 10,
      engine: "loadMore", // default:pagination button | loadMore:loading more button
    },
  },
  // DevBlog page config
  dev: {
    title: "DevBlog",
    description: "プログラミングに関することを書いています。",
    pagination: {
      enabled: true,
      pageSize: 10,
      engine: "loadMore", // default:pagination button | loadMore:loading more button
    },
  },

  // tags page config
  tags: {
    title: "Tags",
    description: "ブログタグ一覧",
  },

  // project page config
  project: {
    title: "作品集",
    description: "私が作成した作品集です。",

    // status color and text
    getStatus: (status: string) => {
      // you can customize the status color and text！

      // dev: Under development or planning.
      // active: Currently focused on this project.
      // filed: Not upgrading will only fix bugs.
      // offline: Going offline soon.
      // none: Keep running.
      if (!status) return {};

      switch (status) {
        case "active":
          return {
            variant: "default",
            text: "ACTIVE",
          };
        case "dev":
          return {
            variant: "secondary",
            text: "DEV",
          };
        case "filed":
          return {
            variant: "outline",
            text: "FILED",
          };
        case "offline":
          return {
            variant: "destructive",
            text: "OFFLINE",
          };
      }
    },

    // name, description, href are required
    // github: username/repo
    // status: getStatus return value
    // and so on
    // you can add more fields according to your needs ,but you need to modify the code in the project/page.tsx file
    projects: [
      //   {
      //     name: "NextBlog",
      //     description:
      //       "A minimalist blog created with Next.js ,Shadcn-ui and Tailwind.css",
      //     href: "https://next-blog.imyuanli.cn",
      //     github: "imyuanli/next-blog",
      //     status: "active",
      //   },
      //   {
      //     name: "AllDone",
      //     description: "One stop project management platform",
      //     status: "dev",
      //   },
      //   {
      //     name: "Slash Editor",
      //     description: "A simple rich text editor",
      //     href: "https://slash.imyuanli.cn",
      //     github: "imyuanli/slash-editor",
      //   },
      //   {
      //     name: "RMX",
      //     description:
      //       "Readme is an online editor that can help developers quickly create README.md for their projects, while also meeting some templates for Github personal pages",
      //     href: "https://readme.imyuanli.cn/",
      //     github: "imyuanli/readme",
      //     status: "filed",
      //   },
      //   {
      //     name: "Resume",
      //     description: "A simple resume template",
      //     href: "https://resume.imyuanli.cn/",
      //     github: "imyuanli/resume",
      //     status: "offline",
      //   },
    ],
  },

  // footer config
  footer: {
    isShow: true,
    // whether to display the "Powered by NextBlog" in the footer，you can set it to false，but I hope you can keep it，thank you！
    isShowPoweredBy: true,
  },
};

export default siteData;
