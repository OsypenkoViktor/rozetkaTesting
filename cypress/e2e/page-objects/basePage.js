import HeaderComponent from "./components/HeaderComponent";

export default class BasePage extends HeaderComponent {

    navigationSidebar = ".sidebar_type_main";

    menuCategoriesLinks = [
        "Ноутбуки та комп’ютери",
        "Смартфони, ТВ і електроніка",
        "Товари для геймерів",
        "Побутова техніка",
        "Товари для дому",
        "Інструменти та автотовари",
        "Сантехніка та ремонт",
        "Дача, сад і город",
        "Спорт і захоплення",
        "Одяг, взуття та прикраси",
        "Краса та здоров’я",
        "Дитячі товари",
        "Зоотовари",
        "Офіс, школа, книги",
        "Алкогольні напої та продукти",
        "Побутова хімія"
    ];

    openMainPage() {
        cy.visit("/");
    }

    openNotebooksCategoryPage() {
        cy.visit("/notebooks/c80004/");
    }

}
