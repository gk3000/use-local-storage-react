import { useState } from 'react';

function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(`Ошибка при извлечении ключа ${key} из localStorage:`, error);
            return initialValue;
        }
    })

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(`Ошибка при сохранении ключа ${key} в localStorage:`, error);
        }
    }

    const clear =()=>{
        try {
            window.localStorage.removeItem(key);
            setStoredValue(initialValue);
        } catch (error) {
            console.error(`Ошибка при удалении ключа ${key} в localStorage:`, error);
        }
    }

    return [storedValue, setValue, clear];

}

export default useLocalStorage;