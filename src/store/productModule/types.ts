export interface ProductState {
    showModal: boolean;
    product: []
    shop: string
    showModalBuy: boolean
    selectedSort: string | number | boolean
    buyProduct: []
    searchQuery: string
    confShop: []
    selectedProduct: []
    sortOptions: SortOption[]
    sortOptions2: SortOption[]
}

export interface SortOption {
    value: string;
    name: string;
}