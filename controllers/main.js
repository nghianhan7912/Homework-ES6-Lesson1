import API from "../models/callAPI.js";
const getElement = (selector) => document.querySelector(selector)
const getAPI = (id) => {
    let htmlTab = ""
    API.API().then((data) => {
        const {tabPanes } = data
        tabPanes.map((a)=>{
            const { type, name, imgSrc_jpg, imgSrc_png } = a;
                if(a.type === id){
                    htmlTab += `
                    <div class="col-2 item">
                        <img class="product-img" style="border-radius: 10px;margin-bottom: 20px; width:100%" src="${imgSrc_jpg}" alt="" />
                        <button class="btn" style=" background-color: antiquewhite;color: currentcolor;width:100%" onclick="wear('.${type}','${imgSrc_png}')">Thử đồ</button>
                    </div>
                    `
                }
        })
        getElement(".tab-content").innerHTML = htmlTab
    }).catch((err)=>{console.log(err)})
}
getElement("#background").onclick = () => getAPI('background')
getElement("#topclothes").onclick = () => getAPI('topclothes')
getElement("#botclothes").onclick = () => getAPI('botclothes')
getElement("#hairs").onclick = () => getAPI('hairstyle')
getElement("#handbags").onclick = () => getAPI('handbags')
getElement("#faces").onclick = () => getAPI('face')
getElement("#necklaces").onclick = () => getAPI('necklaces')
getElement("#shoes").onclick = () => getAPI('shoes')
window.wear = (type,link) => getElement(type).innerHTML = `<img class="product-img" width="100%" src="${link}" alt="" />`