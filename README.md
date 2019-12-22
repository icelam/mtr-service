# 港鐵車務狀況 | MTR Service Status #

檢查港鐵列車服務是否正常。

## 截圖 ##
列車服務正常：
![列車服務正常](docs/screenshot-normal.png)

列車服務受阻／延誤：
![列車服務受阻／延誤](docs/screenshot-disruption.png)

## 免責聲明 ##
```
閣下明確同意使用本網站（港鐵車務狀況）的風險是由閣下個人承擔。資料僅供參考，本網站並未為所載資料的完整性、準確性及時間性作出保證。
本網站對於閣下使用任何相關資料而作出的任何行程決定、延誤及其它損失均不承擔任何責任。請在使用所有資料前作出核實。
```

## 研發中的功能 ##
* 最後更新時間
* 倒數計時功能
* i18n

---

# Development Notes #
CORS issue is solved by using [CORS Anywhere](https://github.com/Rob--W/cors-anywhere) temporary. This should be replaced by self hosted reverse proxy later.

## Tech Stack ##
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [styled-components](https://www.styled-components.com/)
* [axios](https://www.npmjs.com/package/axios)
* [xml-js](https://www.npmjs.com/package/xml-js)
* [CORS Anywhere](https://github.com/Rob--W/cors-anywhere)

## Node version ##
This project is developed using Node.js 10.

## Install packages need for the project ##
Install npm packages in project root folder first using `npm install`.

## To start the project ##
Run `npm start` in project root folder.

## To build production ##
Run `npm run build` in project root folder.

