<template>
  <b-card
    header-tag="header"
    footer-tag="footer">
    <div slot="header">
      <strong>Products</strong>
      <b-button
        :to="{ name: 'products.item', params: { id: 'new' } }"
        class="float-right" variant="primary" size="sm">
        <font-awesome-icon icon="plus" /> Add Product
      </b-button>
    </div>
    <div>
      <em v-if="productList.loading">
        Loading products...
        <font-awesome-icon icon="spinner" size="xs" spin />
      </em>

      <template v-else>
        <p v-if="productList.items.length === 0">
          No products exist yet. Please add one to get started.
        </p>

        <ul v-if="productList.items.length > 0">
          <b-table striped hover :items="productList.items" :fields="productListTableFields">
            <template slot="Name" slot-scope="data">
              <router-link
                :to="{ name: 'products.item', params: { id: data.item.ProductId } }">
                {{data.value}}
              </router-link>
            </template>
          </b-table>
        </ul>
      </template>
    </div>
    <router-view/>
  </b-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductList',
  data() {
    return {
      productListTableFields: [
        {
          key: 'Name',
          sortable: true,
        },
        {
          key: 'Description',
          sortable: false,
        },
      ],
    };
  },
  computed: mapState({
    productList: state => state.product.list,
  }),
  created() {
    // only get category list from api if not already in the store.
    // get categories here in product list parent component so it's available
    // in product item child view
    if (this.$store.state.category.list.items.length === 0) {
      this.$store.dispatch('category/getList');
    }

    this.$store.dispatch('product/getList');
  },
};
</script>
