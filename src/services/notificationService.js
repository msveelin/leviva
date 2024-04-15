import {useToast} from "vue-toastification";

const toast = useToast()

export const notifySuccess = async (message) => {
    toast.success(message, {
        icon: "fas fa-check-circle",

    })
}

export const notifyWarning = async (message) => {
    toast.warning(message, {
        icon: "fas fa-warning-circle",
    })
}

export const notifyError = async (message) => {
    toast.error(message, {
        icon: "fas fa-exclamation-circle",
    })
}