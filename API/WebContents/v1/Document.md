# WebContentsAPI
## 取得可能なもの(WebContents.js)
* WebContents.UserAgent
UserAgentを取得
* WebContents.BrowserName  
ブラウザの名前
   * WebContents.is...でtrue,falseも取得可能
* WebContents.UseModel (開発中)
使用機種
   * 恒例のis...
### 対応範囲(WebContents.BrowserName)(is... の ...の名前)
* Chrome
* iOSChrome (iOS版Chrome)
* Edge
* Firefox
* MSIE (Internet Explorer (11も)
* MSIE11 (Internet Explorer 11のみ)
* Safari
* Opera
* Sileipnir
* Wii※
* DSi※
* 3DS※
* New3DS※
* WiiU※
* iOSApp(App内Safari)
* AndroidApp
* Facebook
* Googlebot
* Smooz  
* PSP※  
* PS2※
* PS3※  
* PS4※  
###### 注意  
検出されなかった場合はisNotSureがtrueになります。
### WebContents.UseModel
* Windows
* Mac
* iPhone(開発中)
* iPad
* iPod
* Android
* Linux64  (64bit)
* Linux32  (32bit)
* Ubuntu  
###### And More...  
WebContents.BrowserNameの名前の後ろに※が付いているものも対応しています
### URL
https://github.com/yeswasi/yeswasi.github.io/blob/master/API/WebContents/v1/Document.md
