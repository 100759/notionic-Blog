// 定义一个名为 BLOG 的常量，用于存储博客的配置信息
const BLOG = {
  // 博客的标题
  title: 'FuHeng’BLOG',
  // 博客的作者
  author: '付恒',
  // 作者的电子邮件
  email: '2827162018@qq.com',
  // 博客的链接
  link: 'https://fuheng.icu',
  // 博客的时事通讯频率
  newsletter: 'Weekly',
  // 博客的描述
  description: '一个完美主义者',
  // 博客的语言
  lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  // 博客的时区
  timezone: 'Asia/Shanghai', // 参考 https://en.wikipedia.org/wiki/List_of_tz_database_time_zones 获取所有选项
  // 博客的外观模式
  appearance: 'auto', // ['light', 'dark', 'auto']
  // 博客的字体
  font: 'sans-serif', // ['sans-serif', 'serif']
  // 浅色背景颜色
  lightBackground: '#F6F8FA', // 使用十六进制值，不要忘记 '#'，例如 #fffefc
  // 深色背景颜色
  darkBackground: '#212936', // 使用十六进制值，不要忘记 '#'
  // 博客的路径，如果部署在子目录下，请填写路径，否则留空
  path: '',
  // 博客开始的年份，如果留空，将使用当前年份
  since: 2022,
  // 每页显示的文章数量
  postsPerPage: 10,
  // 是否按日期排序文章
  sortByDate: true,
  // 显示的页面
  pagesShow: {
    // 是否显示时事通讯页面
    newsletter: true,
    // 是否显示笔记页面
    notes: false,
    // 是否显示项目页面
    projects: true,
    // 是否显示联系页面
    contact: false,
    // 是否显示书籍页面
    books: true,
    // 是否显示朋友页面
    friends: true
  },
  // 是否显示微信支付二维码
  showWeChatPay: false,
  // 是否启用预览图片功能
  previewImagesEnabled: true,
  // 是否自动折叠导航栏
  autoCollapsedNavBar: false,
  // 生成 OG 图像的主机名
  ogImageGenerateHost: 'og-zl.vercel.app', // 生成 OG 图像的链接，不要以斜杠结尾
  // 默认封面图片
  defaultCover: '/cover.jpg',
  // 社交媒体链接
  socialLink: {
    // Twitter 链接
    twitter: 'https://twitter.com/',
    // GitHub 链接
    github: 'https://github.com/',
    // Telegram 链接
    telegram: 'https://t.me/'
  },
  // SEO 相关设置
  seo: {
    // 关键词
    keywords: ['FuHeng', 'FuHeng Blog', '付恒的个人博客'],
    // Google 网站验证代码
    googleSiteVerification: '' // 移除该值或替换为您自己的 Google 网站验证代码
  },
  // Notion 页面 ID，不要更改！在.env 文件中编辑！
  notionPageId: process.env.NOTION_PAGE_ID,
  // Notion 空间 ID，不要更改！在.env 文件中编辑！
  notionSpacesId: process.env.NOTION_SPACES_ID,
  // Notion 访问令牌，如果您不希望公开数据库，可以使用此令牌
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN,
  // Notion 域名
  notionDomain: 'fuheng-blog.notion.site',
  // Telegram 机器人令牌，在.env 文件中编辑！
  telegramToken: process.env.TELEGRAM_TOKEN,
  // Telegram 聊天 ID
  telegramChatId: '7219834397',
  // Telegram 频道链接
  telegramChannelUrl: 'https://t.me/+N2njYRUc1-gxYWU1',
  // Telegram 频道名称
  telegramChannelName: '08-BLOG',
  // Craft 配置分享链接
  craftConfigShareUrl: 'https://www.craft.do/s/kQtcWqkv98cHhB',
  // 分析工具配置
  analytics: {
    // 分析工具提供商，目前支持 Google Analytics、Ackee、Umami 和 Cloudflare Insights，请填写 'ga'、'ackee'、'umami' 或 'cf'，留空则禁用
    provider: '',
    // Ackee 配置
    ackeeConfig: {
      // 追踪器脚本的链接，例如 'https://ackee.example.com/tracker.js'
      tracker: '',
      // Ackee 服务器的数据链接，例如 https://ackee.example.com，不要以斜杠结尾
      dataAckeeServer: '',
      // 域名 ID，例如 '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
      domainId: ''
    },
    // Cloudflare Insights 配置
    cfConfig: {
      // 默认脚本链接为 'https://static.cloudflareinsights.com/beacon.min.js'
      scriptUrl: 'https://static.cloudflareinsights.com/beacon.min.js',
      // 令牌，格式为 '{"token": "xxxxxxxxxxxxxxxxxx"}'
      token: ''
    },
    // Google Analytics 配置
    gaConfig: {
      // 测量 ID，例如 G-XXXXXXXXXX
      measurementId: ''
    },
    // Umami 配置
    umamiConfig: {
      // Umami 脚本的链接
      scriptUrl: '',
      // Umami 实例的网站 ID
      websiteId: ''
    }
  },
  // 评论插件配置
  comment: {
    // 支持的评论插件：utterances, supacomments
    provider: '', // 如果不需要评论插件，请留空
    // SupaComments 配置
    supaCommentsConfig: {
      // Supabase 实例的链接
      supabaseUrl: '',
      // Supabase 实例的匿名密钥
      supabaseAnonKey: ''
    },
    // Utterances 配置
    utterancesConfig: {
      // 仓库名称
      repo: ''
    }
  },
  // 是否为生产环境，根据 Vercel 的环境变量判断
  isProd: process.env.VERCEL_ENV === 'production'
}
// 导出 BLOG 配置
module.exports = BLOG
