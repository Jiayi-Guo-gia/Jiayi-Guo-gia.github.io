# 更新 My Life

页面保留在 `/blog/`，导航名称是 My Life。模板文章被逐个排除，新文章仍会正常显示。

## 添加烘焙照片

将照片放到 `assets/img/life/`，建议使用简短的英文文件名和 JPG/WebP 格式。然后编辑 `_data/life.yml`：

```yaml
photos:
  - image: /assets/img/life/your-photo.jpg
    alt: 描述照片中的真实内容
    caption: 你想展示的照片说明
```

不要保留示例路径，必须先放入真实图片。图片会自动排成响应式相册，点击可查看原图。

## 写一篇生活博客

在 `_posts/` 新建 `YYYY-MM-DD-your-title.md`：

```markdown
---
layout: post
title: 你的文章标题
date: YYYY-MM-DD
description: 一句简介
tags: baking
categories: my-life
---

在这里写正文，可以加入自己的照片。
```

将 YYYY-MM-DD 替换为实际日期（不晚于发布当天）。可以添加 `thumbnail: /assets/img/life/your-photo.jpg` 作为文章封面。
