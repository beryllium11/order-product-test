import i18next from "i18next";

i18next.init({
  interpolation: {
    escapeValue: false,
  },
  lng: "en",
  resources: {
    en: {
      translation: {
        orders: { label: "Orders" },
        products: { label: "Products" },
        remove: { label: "Remove" },
        order: { label: "order" },
        product: { label: "product" },
        groups: { label: "Groups" },
        users: { label: "Users" },
        settings: { label: "Settings" },
        removeQuestion: {
          label: "Are you sure you want to remove this order?",
        },
        close: { label: "Close" },
        new: { label: "new" },
        used: { label: "used" },
        allCondition: { label: "all conditions" },
        allTypes: { label: "All types" },
        ready: { label: "ready" },
        underRepair: { label: "under repair" },
      },
    },
    ru: {
      translation: {
        orders: { label: "Приходы" },
        products: { label: "Продукты" },
        remove: { label: "Удалить" },
        order: { label: "Приход" },
        product: { label: "Продукт" },
        groups: { label: "Группы" },
        users: { label: "Пользователи" },
        settings: { label: "Настройки" },
        removeQuestion: {
          label: "Вы уверены, что хотите удалить этот приход",
        },
        close: { label: "Закрыть" },
        new: { label: "Новые" },
        used: { label: "Б/у" },
        allCondition: { label: "Все состояния" },
        allTypes: { label: "Все типы" },
        ready: { label: "готов" },
        underRepair: { label: "в ремонте" },
      },
    },
  },
});

export default i18next;
