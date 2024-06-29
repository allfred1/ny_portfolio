"use client"; // компоненты `Error` должны быть клиентскими

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        // Отправляем ошибку в сервис обработки ошибок
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Что-то пошло не так</h2>
            <button
                onClick={
                    // Пытаемся восстановиться путем повторного рендеринга сегмента
                    () => reset()
                }
            >
                Попробовать снова
            </button>
        </div>
    );
}
