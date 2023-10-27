export interface ProductState {
    showModal: boolean;
    product: []
    shop: string
    selectedSort: string
    searchQuery: string
    selectedProduct: []
    sortOptions: SortOption[]
}

export interface SortOption {
    value: string;
    name: string;
}