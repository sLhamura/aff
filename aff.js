
  const hashMap = {
    "#datajumbo": "https://www.datajumbo.co/?via=danny",
    "#betterpic": "https://www.betterpic.io?via=danny",
  "#qrcodeveloper": "https://qrcodeveloper.com/?via=danny",
    "#helloprenup": "https://helloprenup.com?via=danny",
    "#tickernerd": "https://tickernerd.com/?via=danny-bayuardi",
    "#notifier": "http://notifier.so?via=danny",
    "#headshotpro": "https://www.headshotpro.com?via=danny-bayuardi",
    "#pallyy": "https://pallyy.com/?via=danny",
    "#repper": "https://repper.app?via=danny",
    "#agenticflow": "https://agenticflow.ai/?via=danny",
    "#heygen": "https://www.heygen.com/?sid=rewardful&via=danny-bayuardi",
    "#goheather": "https://www.goheather.io/?via=danny",
    "#contactbutton": "https://contactbutton.com?via=danny",
    "#keygen": "https://keygen.sh?via=danny",
    "#omakase": "https://www.omakase.ai/?via=danny",
    "#boldsign": "https://boldsign.com?via=danny",
    "#aiproductshot": "https://aiproductshot.com?via=danny",
    "#wpsoffice":"https://checkout.wps.com/checkout/728/1?entry=web_buy_page&platform=web&lang=en-US&irclickid=S3cSwyUFKxycUY80Q-Spo2T4UkpzcQRXDUgwWk0&MediaId=1234031&SharedId=r01ppK&utm_source=affiliate&utm_medium=firstpromoter&utm_campaign=31092&campaign_id=31092&fpr=j9ecoi",
    "#foodshot": "https://foodshot.ai/?via=danny",
    "#chaizcom":"https://lnk.do/fgJ7fPn"
  };

  function checkHash() {
    const targetUrl = hashMap[window.location.hash];
    if (targetUrl) {
      window.location.href = targetUrl;
    }
  }

  // Run on load
  window.addEventListener("load", checkHash);

  // Run if hash changes
  window.addEventListener("hashchange", checkHash);
