export interface ProductState {
    showModal: boolean;
    product: []
    shop: string
    showModalBuy: boolean
    selectedSort: string
    buyProduct: []
    searchQuery: string
    selectedProduct: []
    sortOptions: SortOption[]
}

export interface SortOption {
    value: string;
    name: string;
}