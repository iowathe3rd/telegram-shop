import { ref, onMounted } from 'vue';

export function useTelegram() {
    const tg = window.Telegram.WebApp;
    const onClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };

    // При использовании Composition API, мы можем использовать ref для реактивных переменных
    const user = ref(tg.initDataUnsafe?.user);
    const queryId = ref(tg.initDataUnsafe?.query_id);

    onMounted(() => {
        tg.ready();
    });

    // Возвращаем все необходимые значения
    return {
        onClose,
        onToggleButton,
        tg,
        user,
        queryId,
    };
}
