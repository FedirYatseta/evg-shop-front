export interface ProductState {

    product: []
    shop: string
    showButton: boolean
    selectedSort: string | number | boolean
    buyProduct: []
    searchQuery: string
    confShop: []
    selectedProduct: []
    sortOptions: SortOption[],
    point: []

}

export interface SortOption {
    value: string;
    name: string;
}