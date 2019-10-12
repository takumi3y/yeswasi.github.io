//プロパティとか
var WebContents = new Object();
//定義
    WebContents.UserAgent = navigator.useragent;
var bname = "Not Sure";
    WebContents.isChrome = false,
    WebContents.isiOSChrome = false,
    WebContents.isEdge = false,
    WebContents.isFirefox = false,
    WebContents.isMSIE = false,
    WebContents.isMSIE11 = false,
    WebContents.isSafari = false,
    WebContents.isOpera = false,
    WebContents.isSleipnir = false,
    WebContents.isNotSure = false,
    WebContents.isWii = false,
    WebContents.isDSi = false,
    WebContents.is3DS = false,
    WebContents.isNew3DS = false,
    WebContents.isWiiU = false,
    WebContents.isiOSApp = false,
    WebContents.isFacebook = false,
    WebContents.isAndroidApp = false,
    WebContents.isGooglebot = false,
    WebContents.isSmooz = false;
function BrowserName() {
   if (ua.indexOf(Sleipnir) > -1){
      bname = "Sleipnir";
      WebContents.isSleipnir = true;
   } else if (ua.indexOf(Smooz) > -1){
      bname = "Smooz";
      WebContents.isSmooz = true;
   } else if (ua.indexOf(Googlebot) > -1){
      bname = "Googlebot";
      WebContents.isGooglebot = true;
   } else if (ua.indexOf(Nintendo Wii) > -1){
      bname = "Nintendo Wii";
      WebContents.isWii = true;
   } else if (ua.indexOf(Nintendo DSi) > -1){
      bname = "Nintendo DSi";
      WebContents.isDSi = true;
   } else if (ua.indexOf(New Nintendo 3DS) > -1){
      bname = "New Nintendo 3DS";
      WebContents.isNew3DS = true;
   } else if (ua.indexOf(Nintendo 3DS) > -1){
      bname = "Nintendo 3DS";
      WebContents.is3DS = true;
   } else if (ua.indexOf(Nintendo WiiU) > -1){
      bname = "Nintendo WiiU"
      WebContents.isWiiU = true;
   } else if (ua.indexOf(Edge) > -1){
      bname = "Edge";
      WebContents.isEdge = true;
   } else if (ua.indexOf(Chrome) > -1)   
   {
      bname = "Chrome";
      WebContents.isChrome = true;
   } else if (ua.indexOf(CriOS) > -1){
      bname = "Chrome(iOS)";
      WebContents.isiOSChrome = true;
   } else if (ua.indexOf(FireFox) > -1){
      bname = "FireFox";
      WebContents.isFireFox = true;
   } else if (ua.indexOf(MSIE) > -1){ 
      bname = "Internet Explorer";
      WebContents.isMSIE = true;
   } else if (ua.indexOf(Trident) > -1){
      bname = "Internet Explorer 11";
      isMSIE = true;
      WebContents.isMSIE11 = true;
   } else if (ua.indexOf(Safari) > -1)     
   {
      bname = "Safari";
      WebContents.isSafari = true;
   } else if (ua.indexOf(Opera) > -1){
      bname = "Opera";
      WebContents.isOpera = true;
   } else if (ua.indexOf(Darwin) > -1)                     
   {
      bname = "iOS App";
      WebContents.isiOSApp = true;
   } else if (ua.indexOf(FB) > -1){
      bname = "Facebook";
      WebContents.isFacebook = true;
   } else if (ua.indexOf(Dalvik) > -1)
   {
      bname = "Android App";
      WebContents.isAndroidApp = true;
   } else {
      WebContents.isNotSure = true;
   }
   return bname;
}
WebContents.BrowserName = bname;
