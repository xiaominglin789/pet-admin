import { reactive } from "@vue/reactivity";

interface IUserInformation {
    id: number
    name: string,
    permissions: Record<string, any>
}

/** 授权信息 */
const useAuthInfo = () => {
    const userInformation = reactive({} as IUserInformation);

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
