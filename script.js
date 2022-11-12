const observer = new MutationObserver((mutations) => {
  const popup_xpath = "//*[contains(@class,'ytd-popup-container')]"
  const popup_element = document.evaluate(popup_xpath, document, null, XPathResult.BOOLEAN_TYPE, null )
  if (popup_element.booleanValue == true){
    console.log('#### find popup element' + Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
    document.getElementsByClassName('yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action')[1].click()
    console.log('#### OK button clicked' + Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  }

  const target_xpath = "//*[contains(text(), '視聴を続けていますか')]"
  const target_element = document.evaluate(target_xpath, document, null, XPathResult.BOOLEAN_TYPE, null )
  if (target_element.booleanValue == true){
    console.log('#### 視聴中？ ' + Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
    document.getElementsByClassName('yt-spec-button-shape-next yt-spec-button-shape-next--text yt-spec-button-shape-next--call-to-action')[1].click()
    console.log('#### OK button clicked' + Date().toLocaleString({ timeZone: 'Asia/Tokyo' }));
  }
});

console.log('######### script running #########')
// 明確に書き換わっている事がわかる動画自体のclassをを指定して監視する
const span_el = document.getElementsByClassName("video-stream")[0];

observer.observe(span_el, {
  attributes: true, childList: true, subtree: true
});
