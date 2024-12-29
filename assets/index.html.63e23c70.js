import{_ as d,r,o as p,c as u,e as a,a as l,b as t,d as n,w as s}from"./app.6178658a.js";const h={},c={href:"https://sideloadly.io/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.apple.com/itunes/download/win64",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/alfiecg24/TrollInstallerX/releases/latest/download/TrollInstallerX.ipa",target:"_blank",rel:"noopener noreferrer"},m={href:"https://nathan4s.lol/nathanlr/nathanlr.tipa",target:"_blank",rel:"noopener noreferrer"};function y(b,e){const i=r("router-link"),o=r("ExternalLinkIcon");return p(),u("div",null,[e[16]||(e[16]=a('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Before continuing, please <strong>read the following information below in full</strong>.</p><p>nathanlr is what is considered a <strong>semi</strong>-jailbreak, and is <strong>not</strong> a full-fledged, proper jailbreak.</p><p><em>Semi</em>-jailbreaks - while allowing you to use a decent percentage of tweaks - do not have the same compatibility or capabilities as a full-fledged jailbreak. You will probably run into a fair number tweaks (such as some that inject into daemons) that do not fully work as intended.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>If you have previously used Serotonin and/or Bootstrap, you will need to remove them fully before proceeding.</p><p>If you don&#39;t know what Bootstrap or Serotonin are, you can ignore this notice and proceed.</p></div>',2)),l("p",null,[e[1]||(e[1]=t("nathanlr is a ")),n(i,{to:"/types-of-jailbreak/#semi-untethered-jailbreaks"},{default:s(()=>e[0]||(e[0]=[t("semi-untethered semi-jailbreak")])),_:1}),e[2]||(e[2]=t(", meaning it requires an app to re-apply the exploit after a reboot."))]),e[17]||(e[17]=a('<p>The tool is capable of semi-jailbreaking A12 and later devices on iOS/iPadOS versions 16.5.1 to 16.6.1.</p><p>We will first use Sideloadly to sideload TrollInstallerX, then use TrollInstallerX to install TrollStore, and then install nathanlr from there.</p><h2 id="installing-trollstore" tabindex="-1"><a class="header-anchor" href="#installing-trollstore" aria-hidden="true">#</a> Installing TrollStore</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you already have TrollStore installed, you can skip this section.</p></div><h3 id="requirements" tabindex="-1"><a class="header-anchor" href="#requirements" aria-hidden="true">#</a> Requirements</h3><div class="custom-container tip" id="ifJailbreaksAppSigned"><p> TrollInstallerX is currently signed at <a href="https://jailbreaks.app/" target="_blank">jailbreaks.app</a> for easy installation without a computer. </p></div>',6)),l("ul",null,[l("li",null,[e[4]||(e[4]=t("The latest version of ")),l("a",c,[e[3]||(e[3]=t("Sideloadly")),n(o)])]),l("li",null,[e[6]||(e[6]=t("The latest version of ")),l("a",g,[e[5]||(e[5]=t("iTunes")),n(o)]),e[7]||(e[7]=t(" if on Windows."))]),l("li",null,[e[9]||(e[9]=t("The latest version of ")),l("a",f,[e[8]||(e[8]=t("TrollInstallerX")),n(o)])])]),e[18]||(e[18]=a('<h3 id="installing-the-application" tabindex="-1"><a class="header-anchor" href="#installing-the-application" aria-hidden="true">#</a> Installing the application</h3><ol><li>Open Sideloadly</li><li>Plug your iOS device into your computer <ul><li>Make sure your computer is trusted and allowed to view the contents of your device</li></ul></li><li>Drag and drop the TrollInstallerX <code>.ipa</code> file into Sideloadly</li><li>Enter in your Apple ID</li><li>Enter in your password</li></ol><p>The app will now install to your iOS device.</p><h3 id="trusting-the-application" tabindex="-1"><a class="header-anchor" href="#trusting-the-application" aria-hidden="true">#</a> Trusting the application</h3><ol><li>Go to <code>Settings</code> -&gt; <code>General</code> -&gt; <code>Device Management</code> -&gt; <code>&lt;Your Apple ID&gt;</code><ul><li>Depending on your usage, <code>Device Management</code> may be labeled <code>Profiles and Device Management</code></li></ul></li><li>Tap <code>Trust &quot;&lt;Your Apple ID&gt;&quot;</code></li></ol><p>The TrollInstallerX application can now be opened from home screen.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Unless you used jailbreaks.app to install TrollInstallerX, you&#39;ll also need to enable Developer Mode.</p><p>To do so, go into <code>Settings</code> -&gt; <code>Privacy &amp; Security</code> and then scroll down until you see <code>Developer Mode</code>, tap that option, toggle Developer Mode on, and follow the on-screen instructions</p></div><h3 id="running-trollinstallerx" tabindex="-1"><a class="header-anchor" href="#running-trollinstallerx" aria-hidden="true">#</a> Running TrollInstallerX</h3><ol><li>Open TrollInstallerX</li><li>Tap <code>Install TrollStore</code><ul><li>If your device is stuck on &quot;Exploiting Kernel&quot;, reboot your device</li></ul></li><li>When prompted to select an app to install the persistence helper into, select an app you care about <strong>the least</strong><ul><li>If you don&#39;t know what app to select, select <code>Tips</code></li><li>If your device reboots <em>before</em> getting to this step, try again</li></ul></li></ol><p>The persistence helper should now be installed into the app you selected.</p><h3 id="installing-trollstore-1" tabindex="-1"><a class="header-anchor" href="#installing-trollstore-1" aria-hidden="true">#</a> Installing TrollStore</h3><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>If the persistence helper is not installed into the app you selected, shut down your device normally, turn your device back on, open the app you want as your persistence helper, then close the app (<strong>from the app switcher</strong>) and run TrollInstallerX again.</p></div><ol><li>Open the app you selected as your persistence helper from your home screen</li><li>Press <code>Install TrollStore</code>.</li></ol><p>TrollStore will now be installed to your device.</p><h2 id="installing-nathanlr" tabindex="-1"><a class="header-anchor" href="#installing-nathanlr" aria-hidden="true">#</a> Installing nathanlr</h2><h3 id="downloads" tabindex="-1"><a class="header-anchor" href="#downloads" aria-hidden="true">#</a> Downloads</h3>',16)),l("ul",null,[l("li",null,[e[11]||(e[11]=t("The latest version of ")),l("a",m,[e[10]||(e[10]=t("nathanlr")),n(o)]),e[12]||(e[12]=l("ul",null,[l("li",null,[t("Make sure to download the nathanlr "),l("code",null,".tipa"),t(" file "),l("strong",null,"onto your iOS device")])],-1))])]),e[19]||(e[19]=a('<h3 id="installing-nathanlr-1" tabindex="-1"><a class="header-anchor" href="#installing-nathanlr-1" aria-hidden="true">#</a> Installing nathanlr</h3><ol><li>Open <code>TrollStore</code></li><li>Press the <code>+</code> on the top right</li><li>Go to where you saved the nathanlr <code>.tipa</code> file</li><li>Tap on the nathanlr <code>.tipa</code> file</li><li>Tap <code>Install</code></li></ol><p>The nathanlr app will now be installed onto your device.</p><h2 id="running-nathanlr" tabindex="-1"><a class="header-anchor" href="#running-nathanlr" aria-hidden="true">#</a> Running nathanlr</h2><ol><li>Reboot your phone <ul><li>This is not necessary but recommended</li></ul></li><li>Open the nathanlr application from your home screen immediately afterwards</li><li>Tap &quot;Bootstrap&quot;, then tap &quot;Jailbreak&quot;</li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If the app or your device crashes/restarts unexpectedly and nathanlr isn&#39;t installed, simply try rebooting and running the exploit again until it does work.</p></div>',6)),l("p",null,[e[14]||(e[14]=t("You should now be semi-jailbroken with Sileo installed on your home screen. You can use Sileo to install ")),n(i,{to:"/faq/#what-are-tweaks"},{default:s(()=>e[13]||(e[13]=[t("tweaks")])),_:1}),e[15]||(e[15]=t(", themes and more."))]),e[20]||(e[20]=l("h2",{id:"updating-packages",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#updating-packages","aria-hidden":"true"},"#"),t(" Updating packages")],-1)),e[21]||(e[21]=l("ol",null,[l("li",null,"Open the Sileo application"),l("li",null,'Tap on the "Packages" tab'),l("li",null,'Tap "Upgrade All"'),l("li",null,'Tap "Confirm"')],-1))])}var v=d(h,[["render",y],["__file","index.html.vue"]]);export{v as default};
