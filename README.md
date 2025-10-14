# 育创湾平台前端 (Vue 3 + Vite + TypeScript)

统一背景首页，突出“科技创新”与成果转化全流程。实现多轮迭代：主题白+科技蓝、背景融合、字体与数字对齐、可读性与间距平衡。

## 1. 已实现特性
- 单一 unified section：标题 / 副文案 / 统计 / 核心服务卡共用 `background.jpg`
- 视觉层：多层线性+径向渐变、半透明玻璃卡片、动画科技栅格 (CSS 动画)
- 指令交互：
  - `v-reveal` 进入视口渐显
  - `v-countup` 数字平滑计数
  - `v-tilt` 卡片轻度 3D 倾斜
- 字体统一：`--font-base` / 数字 `tabular-nums` 对齐，消除跳动
- 多轮文本可读性增强：加大对比 / 减透明度 / 文本阴影 / 背景滤镜
- 响应式：统计与核心服务网格在多断点下优雅重排
- 间距策略：最终采用“中等”密度，兼顾信息密度与留白

## 2. 目录关键文件
- `public/images/hero/background.jpg` 统一背景
- `src/pages/Home.vue` 统一首页结构与局部样式（不再重复字体变量）
- `src/styles.css` 全局主题、颜色、字体、容器宽度变量
- `src/plugins/countup.ts` | `src/plugins/tilt.ts` | `src/reveal.ts` 自定义指令

## 3. 样式与变量
在 `src/styles.css :root`：
```css
--primary: #2e7dff;
--primary-2: #6ab9ff;
--font-base: 'IBM Plex Sans','Segoe UI','PingFang SC','HarmonyOS Sans','Helvetica Neue',Arial,'Noto Sans SC',sans-serif;
```
`Home.vue` 仅使用，不再重复声明。数字使用 `font-variant-numeric: tabular-nums;` + `font-feature-settings` 确保对齐。

## 4. 本地开发
```powershell
npm install
npm run dev
```

## 5. 生产构建
```powershell
npm run build
```
输出到 `dist/`（已在 `.gitignore` 中忽略）。

## 6. Git 处理
初次提交包含了 `node_modules`（应忽略）。修复步骤：
```powershell
git rm -r --cached node_modules
# 可选：同时清理锁文件重装
# npm ci

git add .gitignore
git commit -m "chore: remove node_modules from repo"
```
之后添加远程并推送：
```powershell
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 7. 可选下一步改进
- 抽象 spacing 变量：`--space-sm/md/lg` 统一全站垂直节距
- 增加 Lighthouse / a11y 脚本，保证对比度 >= WCAG AA
- 主题暗色模式切换（使用 `data-theme` + CSS 变量覆写）
- 添加简单单元测试（指令数字动画节流 / 倾斜防抖）

## 8. 资源替换提示
- 背景：替换 `public/images/hero/background.jpg`
- Logo：`public/images/brand/`
- 文案：直接编辑 `Home.vue` 或相关组件

---
原基础说明（保留）：

> 运行
> ```powershell
> cd vue-site
> npm install
> npm run dev
> ```
> 资源替换：图片放入 `public/images/`，主题色在 `src/styles.css`。
