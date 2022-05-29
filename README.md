# doc
> 一个关于vuepress@next项目的创建过程

#### 快速上手
```
# 步骤1: 创建并进入一个新目录
mkdir doc && cd doc

# 步骤2: 初始化项目
git init && yarn init

# 步骤3: 将 VuePress 安装为本地依赖
yarn add -D vuepress@next

# 步骤4: 在 package.json 中添加一些 scripts
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}

# 步骤5: 将默认的临时目录和缓存目录添加到 .gitignore 文件中
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore

# 步骤6: 创建你的第一篇文档
mkdir docs
echo '# Hello VuePress' > docs/README.md

# 步骤7: 在本地启动服务器来开发你的文档网站
yarn docs:dev
```

#### 手册