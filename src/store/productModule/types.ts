export interface ProductState {

    product: []
    shop: string
    selectedSort: string | number | boolean
    buyProduct: []
    searchQuery: string
    confShop: []
    selectedProduct: []
    sortOptions: SortOption[]

}

export interface SortOption {
    value: string;
    name: string;
}