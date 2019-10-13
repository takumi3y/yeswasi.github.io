//プロパティとか
var WebContents = new Object();
//定義
var ua = window.navigator.userAgent;
    WebContents.UserAgent = window.navigator.userAgent;
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
    WebContents.isSmooz = false,
    WebContents.isPSP = false,
    WebContents.isPS2 = false,
    WebContents.isPS3 = false,
    WebContents.isPS4 = false;
function BrowserName() {
   if (ua.indexOf("Sleipnir") > -1){
      bname = "Sleipnir";
      WebContents.isSleipnir = true;
   } else if (ua.indexOf("Smooz") > -1){
      bname = "Smooz";
      WebContents.isSmooz = true;
   } else if (ua.indexOf("PSP") > -1) {
      bname = WebContents.UseModel = "PSP";
      WebContents.isPSP = true;
   } else if (ua.indexOf("PS2") > -1){
      bname = WebContents.UseModel = "Play Station 2";
      WebContents.isPS2 = true;
   } else if (ua.indexOf("PLAYSTATION 3") > -1){
      bname = WebContents.UseModel = "Play Station 3";
      WebContents.isPS3 = true;
   } else if (ua.indexOf("PlayStation 4") > -1){
      bname = WebContents.UseModel = "Play Station 4";
      WebContents.isPS4 = true;
   } else if (ua.indexOf("Googlebot") > -1){
      bname = "Googlebot";
      WebContents.isGooglebot = true;
   } else if (ua.indexOf("Nintendo Wii") > -1){
      bname = WebContents.UseModel = "Nintendo Wii";
      WebContents.isWii = true;
   } else if (ua.indexOf("Nintendo DSi") > -1){
      bname = WebContents.UseModel = "Nintendo DSi";
      WebContents.isDSi = true;
   } else if (ua.indexOf("New Nintendo 3DS") > -1){
      bname = WebContents.UseModel = "New Nintendo 3DS";
      WebContents.isNew3DS = true;
   } else if (ua.indexOf("Nintendo 3DS") > -1){
      bname = WebContents.UseModel = "Nintendo 3DS";
      WebContents.is3DS = true;
   } else if (ua.indexOf("Nintendo WiiU") > -1){
      bname = WebContents.UseModel = "Nintendo WiiU"
      WebContents.isWiiU = true;
   } else if (ua.indexOf("Edge") > -1){
      bname = "Edge";
      WebContents.isEdge = true;
   } else if (ua.indexOf("Chrome") > -1)   
   {
      bname = "Chrome";
      WebContents.isChrome = true;
   } else if (ua.indexOf("CriOS") > -1){
      bname = "Chrome(iOS)";
      WebContents.isiOSChrome = true;
   } else if (ua.indexOf("FireFox") > -1){
      bname = "FireFox";
      WebContents.isFireFox = true;
   } else if (ua.indexOf("MSIE") > -1){ 
      bname = "Internet Explorer";
      WebContents.isMSIE = true;
   } else if (ua.indexOf("Trident") > -1){
      bname = "Internet Explorer 11";
      WebContents.isMSIE = true;
      WebContents.isMSIE11 = true;
   } else if (ua.indexOf("Safari") > -1)     
   {
      bname = "Safari";
      WebContents.isSafari = true;
   } else if (ua.indexOf("Opera") > -1){
      bname = "Opera";
      WebContents.isOpera = true;
   } else if (ua.indexOf("Darwin") > -1){
      bname = "iOS App";
      WebContents.isiOSApp = true;
   } else if (ua.indexOf("FB") > -1){
      bname = "Facebook";
      WebContents.isFacebook = true;
   } else if (ua.indexOf("Dalvik") > -1)
   {
      bname = "Android App";
      WebContents.isAndroidApp = true;
   } else {
      WebContents.isNotSure = true;
   }
   return bname;
}
   WebContents.BrowserName = BrowserName();
/*iOSVer.
function iPodVer(){
var iPodversion = window.navigator.userAgent.toLowerCase().match(/ipod touch; cpu iphone os (.+?) like/)[1];
  return parseFloat(iPodversion.replace("_", ".");
}
function iPhoneVer(){
var iPhoneversion = window.navigator.userAgent.toLowerCase().match(/iphone; cpu iphone os (.+?) like/)[1];
  return parseFloat(iPhoneversion.replace("_", ".");
}
function iPadVer(){
  var iPadversion = window.navigator.userAgent.toLowerCase().match(/ipad; cpu os (.+?) like/)[1];
  return parseFloat(iPadversion.replace("_", ".");
}
↑不具合あり*/
//is...
   WebContents.isWindows = false,
   WebContents.isMac = false,
   WebContents.isChromeOS = false,
   WebContents.isUbuntu = false,
   WebContents.isiPhone = false,
   WebContents.isiPod = false,
   WebContents.isiPad = false,
   WebContents.isAndroid = false,
   WebContents.isLinux32 = false,
   WebContents.isLinux64 = false;
   WebContents.UseModel = "Not Sure";
//どのモデル？
function UseModel() {
   if (ua.indexOf("Windows NT") > -1){
      WebContents.isWindows = true;
      //Vesion
      if (ua.indexOf("NT 5.1") > -1){
         WebContents.UseModel = "Windows XP";
         } else if (ua.indexOf("NT 5.2") > -1){
         WebContents.UseModel = "Windows Server 2003";
         } else if (ua.indexOf("NT 6.0") > -1){
         WebContents.UseModel = "Windows Vista";
         } else if (ua.indexOf("NT 6.1") > -1){
         WebContents.UseModel = "Windows 7";
         } else if (ua.indexOf("NT 6.2") > -1){
         WebContents.UseModel = "Windows 8";
         } else if (ua.indexOf("NT 6.3") > -1){
         WebContents.UseModel = "Windows 8.1";
         } else if (ua.indexOf("NT 10.0") > -1){
         WebContents.UseModel = "Windows 10";
         }
   } else if (ua.indexOf("Mac OS X") > -1){
   WebContents.isMac = true;
      //Vesion
      if (ua.indexOf("X 10.5") > -1){
         WebContents.UseModel = "Macintosh Leopard";
         } else if (ua.indexOf("X 10.6") > -1){
         WebContents.UseModel = "Macintosh Snow Leopard";
         } else if (ua.indexOf("X 10.7") > -1){
         WebContents.UseModel = "Macintosh Lion";
         } else if (ua.indexOf("X 10.8") > -1){
         WebContents.UseModel = "Macintosh Mountain Lion";
         } else if (ua.indexOf("X 10.9") > -1){
         WebContents.UseModel = "Macintosh Mavericks";
         } else if (ua.indexOf("X 10.10") > -1){
         WebContents.UseModel = "Macintosh Yosemite";
         } else if (ua.indexOf("X 10.11") > -1){
         WebContents.UseModel = "Macintosh El Capitan";
         } else if (ua.indexOf("X 10.12") > -1){
         WebContents.UseModel = "Macintosh Sierra";
         } else if (ua.indexOf("X 10.13") > -1){
         WebContents.UseModel = "Macintosh High Sierra";
         } else if (ua.indexOf("X 10.14") > -1){
         WebContents.UseModel = "Macintosh Mojave";
         } else if (ua.indexOf("X 10.15") > -1){
         WebContents.UseModel = "Macintosh Catalina";
         }
   } else if (ua.indexOf("iPhone") > -1){
   WebContents.isiPhone = true;
   WebContents.UseModel = "iPhone";
   } else if (ua.indexOf("iPod ") > -1){
   WebContents.isiPod = true;
   WebContents.UseModel = "iPod touch";
   } else if (ua.indexOf("iPad") > -1){
   WebContents.isiPad = true;
   WebContents.UseModel = "iPad";
   } else if (ua.indexOf("x86_64") > -1){
   WebContents.isLinux64 = true;
   WebContents.UseModel = "Linux 64bit";
   } else if (ua.indexOf("i686") > -1){
   WebContents.isLinux32 = true;
   WebContents.UseModel = "Linux 32bit";
   } else if (ua.indexOf("Linux") > -1){
   WebContents.isAndroid = true;
   WebContents.UseModel = "Android";
   } else if (ua.indexOf("CrOS") > -1){
   WebContents.isChromeOS = true;
   WebContents.UseModel = "Chrome OS";
   } else if (ua.indexOf("Ubuntu") > -1){
   WebContents.isUbuntu = true;
   WebContents.UseModel = "Ubuntu";
   }
}
