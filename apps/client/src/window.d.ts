// window.d.ts

interface Window {
    Telegram: {
        WebApp: {
            // Здесь вы можете добавить типизацию для свойств WebApp
            MainButton: {
                isVisible: boolean;
                hide(): void;
                show(): void;
            };
            initDataUnsafe?: {
                user: string;
                query_id: string;
                // Другие свойства, если они известны
            };
            ready(): void;
            close(): void;
            // Другие свойства и методы, если они известны
        };
        // Другие свойства и методы Telegram, если они известны
    };
}
