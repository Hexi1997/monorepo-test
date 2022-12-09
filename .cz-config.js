module.exports = {
    types: [
      {
        value: "feat",
        name: "✨  feat:     一个新的特性",
      },
      {
        value: "fix",
        name: "🐞  fix:      修复一个Bug",
      },
      {
        value: "style",
        name: "💅  style:    不影响代码含义的改动(空格、格式、分号等)",
      },
      {
        value: "refactor",
        name: "🛠   refactor: 代码重构，注意和特性、修复区分开",
      },
      {
        value: "revert",
        name: "⏪  revert:   代码回滚",
      },
      {
        value: "chore",
        name: "🗯   chore:    开发工具变动(构建、脚手架工具等)",
      },
      {
        value: "docs",
        name: "📚  docs:     文档变更",
      },
      {
        value: "perf",
        name: "⚡️  perf:     提高性能的代码更改",
      },
      {
        value: "test",
        name: "🏁  test:     测试模块修改",
      },
    ],
    scopes: [
      {
        name: "h5-frontend",
      },
      {
        name: "admin-frontend",
      },
      {
        name: "global",
      },
    ],
    messages: {
      type: "选择一种你的提交类型:",
      scope: "\n 选择一个scope:",
      // used if allowCustomScopes is true
      customScope: "Denote the custom scope:",
      subject: "短说明:\n",
      body: '长说明，使用"|"换行(可选):\n',
      breaking: "非兼容性说明 (可选):\n",
      footer: "关联关闭的issue,例如:#31, #34(可选):\n",
      confirmCommit: "确定提交说明?",
    },
    allowCustomScopes: true,
  };
