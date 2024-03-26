// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

export function removeUrlAnchor(url) {
  const anchorIndex = url.indexOf('#');
  return anchorIndex !== -1 ? url.slice(0, anchorIndex) : url;
}

// split을 사용한 방법
// function removeUrlAnchor(url){
//   return url.split('#')[0];
// }
