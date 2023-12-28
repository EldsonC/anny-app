import { BrowserRouter as Router } from "react-router-dom"
import { Routers } from "./routes/routes"
import { AuthProvider } from "./context/context"
import { ThemeProvider } from "styled-components"
import Global from "./assets/styles/global"
import { stateTheme } from "./redux/features/theme"
import { useSelector } from "react-redux"
import { useEffect } from "react";
import io from 'socket.io-client';
import { api } from "./services/api"

import notificationSound from "./assets/sounds/IPHONE NOTIFICATION SOUND EFFECT (PING_DING)(MP3_160K).mp3"

export const lightTheme = {
  bgColorDark: "#EBEBEB",
  bgDarkBlur: "rgba(235, 235, 235, 0.51)",
  colorText: "#141414",
  colorDestaque: "#4CAF50",
  colorBgDark: "#FFFFFF",
  destaqueDark: "#BDBDBD",
  colorBorderDark: "#DDDDDD",

  colorBtnBg: "#EDEDED",
  searchSideBg: "#CCCCCC",
  isActiveColor: "#191919"
}

export const darkTheme = {
  bgColorDark: "#111111",
  bgDarkBlur: "rgba(13, 13, 13, 0.65)",
  colorText: "#F2F2F2",
  colorDestaque: "#33996B",
  colorBgDark: "#1A1A1A",
  destaqueDark: "#141414",
  colorBorderDark: "#292929",

  colorBtnBg: "#010101",
  searchSideBg: "#121212",
  isActiveColor: "#F2F2F2"

}

function App() {
  const themeState = useSelector(stateTheme);
  const serverUrl = 'http://192.168.43.127:3001';

  useEffect(() => {
    // Conecte-se ao servidor Socket.IO
    const socket = io(serverUrl, {
      withCredentials: true,
    });

    const roomName = 'sala0';

    socket.emit('join', { roomName });

    socket.on("connect", () => {
      api.post("/join", {
        socketId: socket.id,
        roomName: roomName,
        userName: "Eldson"
      })
    })

    // Adicione um ouvinte para o evento "nueva-conexion"
    socket.on('nueva-conexion', (data: { message: string }) => {
      console.log('Notificação de nova conexão:', data.message);
      // Aqui você pode atualizar o estado do componente, exibir uma notificação, etc.
    });
    
    socket.on('visit', (data:string) => {
      console.log('Notificação de nova conexão:', data);
      // Aqui você pode atualizar o estado do componente, exibir uma notificação, etc.
      const sound = document.querySelector("#sound") as HTMLAudioElement;
      sound.play()
      alert(`New user: ${data}`)
    });

    // Lembre-se de desconectar o socket quando o componente for desmontado
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={themeState === "dark" ? darkTheme : lightTheme}>
      <audio src={notificationSound} id="sound"/>
      <AuthProvider>
        <Router>
          <Global />
          <Routers />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
