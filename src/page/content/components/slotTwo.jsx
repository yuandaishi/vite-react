import { Progress } from "antd";

const SlotTwo = () => {
    console.log('slotTwo执行')
  return (
    <>
      <Progress percent={60} status="active" />
    </>
  );
};

export default SlotTwo;