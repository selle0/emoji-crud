import 'dotenv/config';
export default{
  "expo": {
    "name": "emoji-crud",
    "slug": "emoji-crud",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    extra: {
      apiKey: "AIzaSyAUbMzI6LEDmPFSKJqPAJIAe3RGVurJUfA",
      authDomain: "emoji-crud-27aae.firebaseapp.com",
      projectId: "emoji-crud-27aae",
      storageBucket: "emoji-crud-27aae.appspot.com",
      messagingSenderId: "295423601791",
      appId: "1:295423601791:web:883ac32f24eef3a143a34a"
    }
  }
}
