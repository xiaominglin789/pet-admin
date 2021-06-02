import { reactive } from "vue";

const usePerantStore = () => {
  const info = reactive({
    name: "爷爷",
    money: 123456,
    skill: "党员"
  })

  const setMoney = (num = 10) => {
    info.money -= num;
  }
  
  return {
    info,
    setMoney
  }
}

export default usePerantStore;
