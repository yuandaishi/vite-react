//为了防止css污染，vue使用scoped，简单友好
//react css文件命名xx.module.css形式或者使用webpack配置
import { observer } from "mobx-react-lite";
import State from './state';
import styles from './option2.module.css'
import { useEffect } from "react";
import { Button } from "antd";

// let {startWs,getData,send,number1,number2,change} = State;这样子相当于重新赋值，因为这些值都是基本类型，所以不能监听
const Option3 = observer(() => {
  useEffect(()=>{
    //发起请求测试
    State.startWs();
    State.getData();
  },[])
  return (
    <>
      <p className={styles.pDom}>这里是option3页面</p>
      <p className={styles['p-dom']}>这里是option3页面p-dom</p>
      <Button onClick={State.send}>触发websocket的send事件</Button>
      <p>number1:{State.number1}</p>
    </>
  );
});

export default Option3;
