# 內容管理說明

本專案使用 YAML 檔案來管理遊戲存檔文章內容。

## 資料夾結構

```
content/
  game-saves/    # 遊戲存檔文章資料夾
    *.yaml       # 每個 YAML 檔案對應一篇遊戲存檔文章
```

## 遊戲存檔文章格式

在 `content/game-saves/` 資料夾中，每個 YAML 檔案對應一篇遊戲存檔文章。檔案名稱（不含副檔名）會自動成為該文章的 URL slug。

### YAML 檔案範例

```yaml
id: "1"
title: "薩爾達傳說：曠野之息"
platform: "Nintendo Switch"
playtime: "120 小時"
progress: 85
lastPlayed: "2024-11-05"
screenshotUrl: "/attached_assets/generated_images/Zelda_game_screenshot_94d59746.png"
content: |
  # 薩爾達傳說：曠野之息

  這是遊戲存檔文章內容，可以使用 Markdown 語法撰寫。

  ## 遊戲體驗

  - 重點一
  - 重點二

  ### 詳細說明

  這裡可以寫更詳細的內容...
```

### 欄位說明

- `id`: 遊戲存檔的唯一識別碼（字串）
- `title`: 遊戲標題
- `platform`: 遊戲平台（例如：Nintendo Switch、PC、PlayStation 等）
- `playtime`: 遊玩時數（字串）
- `progress`: 遊戲進度（數字，0-100）
- `lastPlayed`: 最後遊玩日期（格式：YYYY-MM-DD）
- `screenshotUrl`: 遊戲截圖 URL（必須以 `/attached_assets/` 開頭）
- `content`: 遊戲存檔文章內容（支援 Markdown 語法）

### 重要注意事項

1. **檔案名稱 = URL slug**：YAML 檔案的名稱（不含 `.yaml` 或 `.yml`）會自動成為該文章的 URL slug。例如：`薩爾達傳說-曠野之息.yaml` 的 URL 會是 `/game-save/薩爾達傳說-曠野之息`。

2. **Markdown 支援**：`content` 欄位支援完整的 Markdown 語法，包括：
   - 標題（#、##、###）
   - 列表（有序和無序）
   - 程式碼區塊（```）
   - 粗體、斜體
   - 連結
   - 等等

3. **圖片路徑**：`screenshotUrl` 必須以 `/attached_assets/` 開頭，圖片檔案應放在 `client/public/attached_assets/` 資料夾中。

## 生成內容

在開發或建置前，需要先執行內容生成腳本：

```bash
npm run content:generate
```

這個腳本會：
1. 讀取 `content/game-saves/` 資料夾中的所有 YAML 檔案
2. 為每個遊戲存檔自動生成 `slug`（基於檔案名稱）
3. 驗證截圖 URL 是否正確
4. 將所有遊戲存檔合併成一個 JSON 檔案（`client/src/data/content.json`）
5. 按最後遊玩日期排序（最新的在前）

## 開發流程

1. 在 `content/game-saves/` 資料夾中新增或編輯 YAML 檔案
2. 執行 `npm run content:generate` 生成內容
3. 執行 `npm run dev` 啟動開發伺服器
4. 在瀏覽器中查看遊戲存檔文章

## 建置流程

執行 `npm run build` 時會自動執行內容生成，無需手動執行。

