---
date: 2024-07-11
category:
  - git
tag:
  - git
  - github
  - 仓库
archive: false
---
# Git常见命令

## 1. 安装 Git

确保已经安装了 Git。如果没有，请根据你的操作系统进行安装：

- **Windows**：下载并安装 [Git for Windows](https://gitforwindows.org/)。
- **macOS**：你可以通过 Homebrew 安装 Git，运行 `brew install git`。
- **Linux**：使用包管理器安装，比如在 Debian/Ubuntu 上运行 `sudo apt-get install git`。

## 2. 配置 Git

安装完成后，设置你的用户名和邮箱，这些信息将记录在你的提交历史中：

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## 3. 创建一个新目录

在终端或命令提示符中，导航到你想要创建 Git 仓库的目录，然后创建一个新目录并进入该目录：

```bash
mkdir myproject
cd myproject
```

## 4. 初始化 Git 仓库

在新目录中，运行以下命令来初始化一个新的 Git 仓库：

```bash
git init
```

此命令将创建一个名为 `.git` 的隐藏目录，这是 Git 用来跟踪你的项目历史的地方。

## 5. 添加文件并提交

创建或复制一些文件到这个目录，然后添加这些文件到 Git 仓库并提交：

```bash
git add README.md
git commit -m "Initial commit"
```

## 6. 检查仓库状态

你可以使用 `git status` 查看仓库的当前状态：

```bash
git status
```

到此，你已经成功在本地创建了一个 Git 仓库并进行了第一次提交。你可以继续添加文件、提交更改，并根据需要创建分支、合并等操作。

### 6.1额外操作：连接远程仓库

如果你需要将本地仓库推送到远程仓库（例如 GitHub、GitLab 等），可以使用以下命令：

```bash
git remote add origin https://github.com/username/repository.git
git push -u origin master
```

## 7. 创建新分支

使用 `git branch` 命令创建一个新分支。例如，要创建一个名为 `new-feature` 的分支，可以运行：

```bash
git branch new-feature
```

## 8. 切换到新分支

创建分支后，使用 `git checkout` 命令切换到该分支：

```bash
git checkout new-feature
```

## 9. `git switch` 命令来切换分支：

```bash
git switch new-feature
```

## 10. 创建并切换到新分支（简化命令）

 `git checkout -b` 命令来同时创建并切换到新分支：

```bash
git checkout -b new-feature
```

或者使用 `git switch -c` 命令：

```bash
git switch -c new-feature
```

### 10.1 示例

假设你在 `master` 分支上，并希望创建一个名为 `feature-branch` 的新分支并切换到该分支：

```bash
# 确认当前在master分支
git checkout master

# 创建并切换到feature-branch分支
git checkout -b feature-branch

# 或者
git switch -c feature-branch
```

这样你就创建并切换到了一个新的分支 `feature-branch`。你可以在这个分支上进行开发，而不影响 `master` 分支的代码。

## 11.打开终端或命令提示符

首先，打开你的终端（macOS 或 Linux）或命令提示符（Windows）。

## 12. 导航到你的本地仓库

使用 `cd` 命令导航到你要添加远程仓库的本地仓库目录。例如：

```bash
cd /path/to/your/local/repository
```

## 13. 添加远程仓库

使用 `git remote add` 命令添加远程仓库。你需要提供一个远程仓库的名称（通常是 `origin`）和远程仓库的 URL。例如，如果你有一个在 GitHub 上的仓库，你可以这样添加：

```bash
git remote add origin https://github.com/username/repository.git
```

## 14. 验证远程仓库

你可以使用 `git remote -v` 命令来验证远程仓库是否已经成功添加：

```bash
git remote -v
```

输出应该类似于：

```bash
origin  https://github.com/username/repository.git (fetch)
origin  https://github.com/username/repository.git (push)
```

### 14.1示例

假设你有一个 GitHub 仓库 `https://github.com/username/myproject.git`，并且想将它添加为远程仓库，步骤如下：

1. 打开终端或命令提示符。

2. 导航到你的本地仓库目录：

   ```bash
   cd /path/to/your/local/repository
   ```

3. 添加远程仓库：

   ```bash
   git remote add origin https://github.com/huchenghepang/huchenghepang.github.io.git
   ```

4. 验证远程仓库是否已添加：

   ```bash
   git remote -v
   ```

## 15.推送到远程仓库

添加远程仓库后，你可以使用 `git push` 命令将本地代码推送到远程仓库。例如，将代码推送到 `origin` 的 `master` 分支：

```bash
git push -u origin master
```

## 16.深入了解推送到远程仓库

 将master分支代码提交到main分支，VSCode写项目时默认分支为master，而github创建repository默认为main，如何将本地的master分支提交到远程main分支上。

### 16.1 方式1：通过修改本地分支名称

修改本地分支名称

```bash
git branch -m master main
```


拉取main分支代码

```bash
git pull origin main
```



如果报错
如果本地代码没有被提交过，尝试拉取远程main分支代码时，可能会报错refusing to merge unrelated histories，这通常是因为本地分支上的代码和远程分支上的代码没有共同祖先，也就是说他们之间没有关联。要强制合并两个不相关的历史记录

```bash
git pull origin main --allow-unrelated-histories
```

提交修改

```bash
git commit  "your commit message"
```

推送到远程main分支

```bash
git push
```



### 16.2 方式2：先将本地master分支代码提交到远程main分支后删除本地master分支

拉取远程分支上的代码
首先，在master分支拉取远程main分支的代码。

```bash
git pull origin main
```

如果报错
如果本地代码没有被提交过，尝试拉取远程main分支代码时，可能会报错refusing to merge unrelated histories，这通常是因为本地分支上的代码和远程分支上的代码没有共同祖先，也就是说他们之间没有关联。
要强制合并两个不相关的历史记录

```bash
git pull origin main --allow-unrelated-histories
# 提交修改
git commit  "your commit message"

# 推送到远程main分支
git push -u origin master:main

# 删除本地master分支
# 首先，切换到main分支

git checkout main 

# 拉取代码

git pull

 # 删除本地master分支

git branch -d master
```


这样就将本地master分支下的代码推送到了github Repository下的main分支，同时不会在远程创建master分支。
