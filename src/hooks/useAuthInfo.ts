import { reactive } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

interface IUserInformation {
    id: number
    name: string,
    permissions: Record<string, any>
}

/** 授权信息 */
const useAuthInfo = () => {
    const userInformation = reactive({} as IUserInformation);

    onMounted(async() => {
        console.log("尝试发生请求: ");
    })

    /** 是否已登录 */
    const hasAuth = (): boolean => {
        return getToken()?.trim() ? true : false;
    }

    /** 获取当前用户的token */
    const getToken = (): string|undefined => {
        return "xasdsa";
    }

    return {
        hasAuth,
        getToken
    }
}

export {
    useAuthInfo
};
