const star=new Proxy({src:"/assets/C6Pgfe3-.png",width:24,height:24,format:"png"},{get:(s,t,e)=>"clone"===t?structuredClone(s):"fsPath"===t?"/root/code/tmd_astro/src/assets/images/star.png":(void 0!==s[t]&&globalThis.astroAsset&&globalThis.astroAsset?.referencedImages.add("/root/code/tmd_astro/src/assets/images/star.png"),s[t])});export{star as default};