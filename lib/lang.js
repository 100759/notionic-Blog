/**
 * 定义了一个包含多种语言文本的对象，用于国际化支持。
 * 该对象包含了导航、分页、布局、搜索、英雄部分、联系、页脚和错误信息等多个部分的文本。
 * 每种语言都有对应的文本映射。
 */
export const lang = {
  // 中文语言文本
  zh: {
    // 导航部分
    NAV: {
      // 首页
      INDEX: '首页',
      // 搜索
      SEARCH: '搜索',
      // 关于
      ABOUT: '关于',
      // 友链
      FRINEDS: '友链',
      // 项目
      PROJECTS: '项目',
      // 笔记
      NOTES: '笔记',
      // 周刊
      NEWSLETTER: '周刊',
      // 书架
      BOOKS: '书架',
      // 私信
      CONTACT: '私信'
    },
    // 分页部分
    PAGINATION: {
      // 上一页
      PREV: '上一页',
      // 下一页
      NEXT: '下一页'
    },
    // 布局部分
    LAYOUT: {
      // 通知文本
      NOTICE_TEXT: '对于本文内容有任何疑问, 可与我联系.',
      // 支付按钮
      PAY_BUTTON: '微信赞赏',
      // 通知按钮
      NOTICE_BUTTON: '一键私信',
      // 评论标题
      COMMENT_TITLE: '评论区'
    },
    // 搜索部分
    SEARCH: {
      // 只搜索标签
      ONLY_SEARCH: '只搜索标签',
      // 占位符
      PLACEHOLDER: '搜索文章',
      // 未找到
      NOT_FOUND: '没有找到有关文章'
    },
    // 英雄部分
    HERO: {
      // 首页部分
      HOME: {
        // 联系按钮
        CONTACT_BUTTON: '我的项目',
        // 联系按钮描述
        CONTACT_BUTTON_DES: '查看我的全部项目',
        // RSS 按钮
        RSS_BUTTON: '订阅博客'
      },
      // 周刊部分
      NEWSLETTER: {
        // 订阅渠道标题
        SUBSCRIPTION_HEAD: '订阅渠道',
        // Telegram 频道
        TG_CHANNEL: 'Telegram 频道',
        // RSS 按钮
        RSS_BUTTON: '订阅 Newsletter'
      },
      // 笔记部分
      NOTES: {
        // 文本页脚
        TEXT_FOOTER: '本页面根据 Craft.do 文档自动生成'
      },
      // RSS 按钮描述
      RSS_BUTTON_DES: '任意 RSS 阅读器',
      // RSS 按钮已复制
      RSS_BUTTON_COPIED: '已复制',
      // RSS 按钮描述已复制
      RSS_BUTTON_DES_COPIED: '已复制 RSS 链接'
    },
    // 联系部分
    CONTACT: {
      // 标题
      TITLE: '一键私信',
      // 描述
      DESCRIPTION: '如有疑问或建议需与我联系, 请填写下面表单.',
      // Telegram 描述
      TG_DESCRIPTION: '也可直接联系 Telegram: ',
      // 成功消息
      SUCCESS_MESSAGE: '消息已发送, 我会尽快回复到你的邮箱.',
      // 表单用户名
      FORM_USERNAME: '你的昵称',
      // 表单邮箱
      FORM_EMAIL: '你的邮箱*',
      // 表单内容
      FORM_CONTENT: '消息内容',
      // 发送按钮
      SEND_BUTTON: '发送',
      // 表单邮箱必填
      FORM_EMAIL_REQUIRED: '*可以填写其他有效联系方式',
      // 失败消息
      FAILED_MESSAGE: '抱歉, 发送失败, 请直接联系我的 Telegram 吧.'
    },
    // 页脚部分
    FOOTER: {
      // 版权开始
      COPYRIGHT_START: '本站原创内容基于 ',
      // 版权名称
      COPYRIGHT_NAME: 'CC BY-SA 4.0',
      // 版权链接
      COPYRIGHT_LINK: 'https://creativecommons.org/licenses/by-sa/4.0/',
      // 版权结束
      COPYRIGHT_END: ' 共享, 转载注明出处.'
    },
    // 错误部分
    ERROR: {
      // 消息
      MESSAGE: '一些错误使我们在此相遇',
      // 标题
      TITLE: '页面无法找到',
      // 帮助文本
      HELP_TEXT: '请尝试刷新页面, 或返回首页搜索, 若有疑问请联系我.',
      // 返回首页
      BACK_TO_HOME: '返回首页',
      // Craft.do 错误
      CRAFTDOCS_ERROR: '当你看到这行字的时候, 说明你的配置页面格式有误, 请检查你的 Craft.do 配置文档.',
      // 加载中
      LOADING: '正在加载....',
      // 超时文本
      TIMEOUT_TEXT: '加载时间太长? 点击直接访问 Notion 页面.'
    }
  },
  // 英文语言文本
  en: {
    // 导航部分
    NAV: {
      // 首页
      INDEX: 'Home',
      // 搜索
      SEARCH: 'Search',
      // 关于
      ABOUT: 'About',
      // 友链
      FRINEDS: 'Friends',
      // 项目
      PROJECTS: 'Projects',
      // 笔记
      NOTES: 'Notes',
      // 周刊
      NEWSLETTER: 'Newsletter',
      // 书架
      BOOKS: 'Books',
      // 私信
      CONTACT: 'Contact'
    },
    // 分页部分
    PAGINATION: {
      // 上一页
      PREV: 'Prev',
      // 下一页
      NEXT: 'Next'
    },
    // 布局部分
    LAYOUT: {
      // 通知文本
      NOTICE_TEXT: 'If you have any questions, please contact me.',
      // 支付按钮
      PAY_BUTTON: 'Sponsor',
      // 通知按钮
      NOTICE_BUTTON: 'Contact',
      // 评论标题
      COMMENT_TITLE: 'Comments'
    },
    // 搜索部分
    SEARCH: {
      // 只搜索标签
      ONLY_SEARCH: 'Only search tags',
      // 占位符
      PLACEHOLDER: 'Search Posts',
      // 未找到
      NOT_FOUND: 'No Posts Found'
    },
    // 英雄部分
    HERO: {
      // 首页部分
      HOME: {
        // 联系按钮
        CONTACT_BUTTON: 'projects',
        // 联系按钮描述
        CONTACT_BUTTON_DES: 'All projects',
        // RSS 按钮
        RSS_BUTTON: 'Subscribe'
      },
      // 周刊部分
      NEWSLETTER: {
        // 订阅渠道标题
        SUBSCRIPTION_HEAD: 'Subscription Channels',
        // Telegram 频道
        TG_CHANNEL: 'Telegram Channel',
        // RSS 按钮
        RSS_BUTTON: 'Subscribe RSS'
      },
      // 笔记部分
      NOTES: {
        // 文本页脚
        TEXT_FOOTER: 'Automatically generated from the Craft.do page'
      },
      // RSS 按钮描述
      RSS_BUTTON_DES: 'RSS Reader',
      // RSS 按钮已复制
      RSS_BUTTON_COPIED: 'Copied',
      // RSS 按钮描述已复制
      RSS_BUTTON_DES_COPIED: 'Copied RSS URL'
    },
    // 联系部分
    CONTACT: {
      // 标题
      TITLE: 'Contact',
      // 描述
      DESCRIPTION: 'If you have any questions or suggestions, please contact me.',
      // Telegram 描述
      TG_DESCRIPTION: 'Or you can contact me via Telegram: ',
      // 成功消息
      SUCCESS_MESSAGE: 'Message sent, I will reply to you as soon as possible.',
      // 表单用户名
      FORM_USERNAME: 'Your Name',
      // 表单邮箱
      FORM_EMAIL: 'Your Email*',
      // 表单内容
      FORM_CONTENT: 'Message',
      // 发送按钮
      SEND_BUTTON: 'Send',
      // 表单邮箱必填
      FORM_EMAIL_REQUIRED: '*You can fill in other valid contact methods',
      // 失败消息
      FAILED_MESSAGE: 'Sorry, sending failed, please contact me directly on Telegram.'
    },
    // 页脚部分
    FOOTER: {
      // 版权开始
      COPYRIGHT_START: 'This site is licensed under the ',
      // 版权名称
      COPYRIGHT_NAME: 'CC BY-SA 4.0',
      COPYRIGHT_LINK: 'https://creativecommons.org/licenses/by-sa/4.0/',
      COPYRIGHT_END: '.'
    },
     /**
     * 定义了错误信息的文本内容
     */
    ERROR: {
      /**
       * 错误发生时的通用消息
       */
      MESSAGE: 'Some errors have occurred',
      /**
       * 当页面未找到时显示的标题
       */
      TITLE: 'Page Not Found',
      /**
       * 提供给用户的帮助文本，指导他们在遇到问题时该怎么做
       */
      HELP_TEXT: 'Please try to refresh the page, or return to the home page and search, if you have any questions, contact me.',
      /**
       * 引导用户返回主页的按钮或链接文本
       */
      BACK_TO_HOME: 'Back to Home',
      /**
       * 当 Craft.do 配置页面格式错误时显示的错误消息
       */
      CRAFTDOCS_ERROR: 'If you see this line, it means your Craft.do configuration page format is wrong.',
      /**
       * 页面加载时显示的文本
       */
      LOADING: 'Loading....',
      /**
       * 当页面加载时间过长时显示的文本，提示用户可以点击直接访问 Notion 页面
       */
      TIMEOUT_TEXT: 'Waiting too long? Click to visit the Notion page directly.'
    }
  },
  /**
   * 定义了日语语言的文本内容，当前为空，等待填充
   */
  ja: {},
  /**
   * 定义了西班牙语语言的文本内容，当前为空，等待填充
   */
  es: {}
}
