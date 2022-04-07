import { makeAutoObservable } from "mobx";
import axios from "axios";

class State {
  constructor() {
    makeAutoObservable(this);
  }
  socket;
  number1=0;
  number2=0;
  startWs = () => {
    this.socket = new WebSocket("ws://localhost:3002");

    // 打开
    this.socket.addEventListener("open", (event) => {
      //   this.socket.send("Hello Server!");
    });

    //收到服务器端返回的消息的时候触发
    this.socket.addEventListener("message", async (event) => {
      //   console.log("Message from server ", event.data);
    //   console.log(event.data)//是一个blob数据类型
    //   const number = await event.data.text();
    //   console.log(number)
      this.number1=event.data;
    });
  };

  getData = async () => {
    let res = await axios.get("/ws");
    //console.log(res);
  };

  send = () => {
    this.socket.send(Math.random());
  };
}

export default new State();
