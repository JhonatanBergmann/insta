<h1 align="center">
  <img src="android/app/src/main/res/drawable/iconsplash.png" width="200" height="200" alt="icon" >
  <br>
  Insta
</h1>

<p align="center">
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/JhonatanBergmann/Insta" />
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/JhonatanBergmann/Insta" />
  <img alt="GitHub Package.json Version" src="https://img.shields.io/github/package-json/v/JhonatanBergmann/Insta" />
  <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/JhonatanBergmann/Insta" />
</p>

<p align="center">Rede social para compartilhamento de fotos</p>

<p align="center">
  <img src="forREADME/Feed.gif" alt="Demo">
</p>
<p align="center">
  <img src="forREADME/Login.gif" alt="Demo" width="350" height="580">
  <img src="forREADME/Register.gif" alt="Demo" width="350" height="580">
</p>
<p align="center">
  <img src="forREADME/ScreenshotErr4541.png" alt="err" width="200" height="350">
  <img src="forREADME/ScreenshotErr2455.png" alt="err" width="200" height="350">
   <img src="forREADME/ScreenshotErr354.png" alt="err" width="200" height="350">
</p>


## 📅 Sobre

O App Insta é uma rede social online de compartilhamento de fotos entre usuários.

## 🛠 Tecnologias
- [React Native](https://facebook.github.io/react-native/)
- [Javascript](https://devdocs.io/javascript/)
- [Node](https://nodejs.org/en/)
- [firebase](https://firebase.google.com/?hl=pt-br)
- [Redux](https://redux.js.org/)
- [Axios](https://github.com/axios/axios)
- [Axios](https://github.com/react-native-image-picker/react-native-image-picker)
- [React Native Image Picker](https://www.npmjs.com/package/react-native-responsive-screen)
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
- [@react-navigation/native](https://reactnavigation.org/)
- [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)
- [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/tab-based-navigation/)

## 📱 Executando 

Para executar o projeto é necessário que você tenha o ambiente React Native configurado, você pode seguir esse [GUIA](https://reactnative.dev/docs/environment-setup) para tal.

Depois de configurar o ambiente, basta fazer o clone do projeto:

```sh
git clone https://github.com/JhonatanBergmann/Insta.git
```

Entre na pasta do projeto e execute o comando para instalar as dependências do projeto:

```sh
yarn install
```
ou
```sh
npm install
```

Em seguida execute o comando referente a plataforma ao qual deseja executar:

Android:

```sh
react-native run-android
```

## 🛢  Firebase 

em funcions\index.js :
```sh
const storage = new Storage({
    projectId: 'id-aqui'
    keyFilename: 'key-aqui.json'
})
try {
  const bucket = storage.bucket('bucket-aqui.com')
```
Chave de API da Web:
```sh
src\store\actions\user.js
const API_KEY = 'API_KEY'
```

Gerar chaves secretas do banco de dados
```sh
funcions\arquivo-chaves.js
```

## 📝 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p align="center">
 Feito com 💜 by Jhonatan Bergmann
</p>
