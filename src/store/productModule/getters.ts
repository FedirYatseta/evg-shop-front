import GetterTree from 'vuex'

export const getters: GetterTree<any, any> = {

    sortedProducts(state: any) {
        console.log('sorted', state)

        return [...state.product].sort((a, b) => {
            const valueA = a[state.selectedSort];
            const valueB = b[state.selectedSort];

            // Handle different data types
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return valueA.localeCompare(valueB);
            } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                return valueA - valueB;
            }
            return 0;
        });
    },
    sortedAndSearchProducts(state: any, get: any) {
        console.log('Search', get)
        return get.sortedProducts.filter((prod: any) => prod.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    }

}