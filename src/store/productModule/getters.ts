import GetterTree from 'vuex'

export const getters: GetterTree<any, any> = {
    sortedProducts(state: any) {


        return [...state.product].sort((a, b) => {
            const valueA = a[state.selectedSort];
            const valueB = b[state.selectedSort];

            // Handle different data types
            if (typeof valueA === 'string' && typeof valueB === 'string') {
                return valueA.localeCompare(valueB);
            } else if (typeof valueA === 'number' && typeof valueB === 'number') {
                return valueA - valueB;
            } else if (typeof valueA === 'boolean' && typeof valueB === 'boolean') {
                // Спочатку сортуємо `true`, потім `false`
                if (valueA === valueB) {
                    return 0;
                }
                return valueA ? -1 : 1; // `true` перед `false`
            }
            return 0;
        });
    },
    sortedAndSearchProducts(state: any, get: any) {
        return get.sortedProducts.filter((prod: any) => prod.title.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
    }

}