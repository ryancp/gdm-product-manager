<template>
  <b-modal
    ref="productItemModal"
    size="lg"
    :title="modalTitle"
    @hidden="onHidden"
    :no-close-on-esc="true"
    @ok="onSubmit">
    <em v-if="productItemLoading">
      Loading product...
      <font-awesome-icon icon="spinner" size="xs" spin />
    </em>
    <b-form v-else>
      <b-form-group id="productItemNameGroup"
          label="Name"
          label-for="productItemName">
        <b-form-input id="productItemName"
          type="text"
          v-model="Name"
          :class="{ 'is-invalid': submitted && !Name }"
          placeholder="Product Name">
        </b-form-input>
        <div v-show="submitted && !Name" class="invalid-feedback">
          Name is required
        </div>
      </b-form-group>
      <b-form-group id="productItemUrlGroup"
          label="URL"
          label-for="productItemUrl">
        <b-form-input id="productItemUrl"
          type="url"
          v-model="Url"
          required
          placeholder="https://">
        </b-form-input>
      </b-form-group>
      <b-form-group
        id="productItemCategoryGroup"
        label="Category"
        label-for="productItemCategory">
        <em v-if="categoryListLoading">
          Loading categories...
          <font-awesome-icon icon="spinner" size="xs" spin />
        </em>
        <multiselect
          v-if="!categoryListLoading"
          v-model="Categories"
          :options="categoryList"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder=" "
          label="Name"
          track-by="CategoryId">
        </multiselect>
      </b-form-group>
      <b-form-group id="productItemDescriptionGroup"
          label="Description"
          label-for="productItemDescription">
        <b-form-textarea id="productItemDescription"
          v-model="Description"
          :rows="3"
          :max-rows="6"
          placeholder="A brief description about your product.">
        </b-form-textarea>
      </b-form-group>
    </b-form>
  </b-modal>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  name: 'ProductItem',
  components: {
    Multiselect,
  },
  computed: {
    productItemLoading() {
      return this.$store.state.product.item.loading;
    },
    Url: {
      set(Url) {
        this.$store.commit('product/setItem', { Url });
      },
      get() {
        return this.$store.state.product.item.Url;
      },
    },
    Name: {
      set(Name) {
        this.$store.commit('product/setItem', { Name });
      },
      get() {
        return this.$store.state.product.item.Name;
      },
    },
    Description: {
      set(Description) {
        this.$store.commit('product/setItem', { Description });
      },
      get() {
        return this.$store.state.product.item.Description;
      },
    },
    Categories: {
      set(Categories) {
        this.$store.commit('product/setItem', { Categories });
      },
      get() {
        return this.$store.state.product.item.Categories;
      },
    },
    categoryListLoading() {
      return this.$store.state.category.list.loading;
    },
    categoryList() {
      return this.$store.state.category.list.items;
    },
    isUpdate() {
      if (this.$route.params.id !== 'new') {
        return true;
      }
      return false;
    },
    modalTitle() {
      if (this.isUpdate) {
        return 'Edit Product';
      }
      return 'Add Product';
    },
  },
  created() {
    if (this.isUpdate) {
      this.$store.dispatch('product/getItem', this.$route.params.id);
    }

    if (!this.isUpdate) {
      // reset product item state in store if this is a create operation so user can
      // start with a blank product
      this.$store.commit('product/resetItem');
    }
  },
  data() {
    return {
      submitted: false,
    };
  },
  mounted() {
    this.$refs.productItemModal.show();
  },
  methods: {
    onSubmit(evt) {
      this.submitted = true;
      let operationType = 'create';

      if (this.isUpdate) {
        operationType = 'update';
      }

      if (this.Name) {
        // set CategoryIds array as needed by Products POST/PUT endpoints
        this.$store.commit('product/setItem', { CategoryIds: this.$store.getters['product/getCategoryIds'] });

        // based on if this is a create or update operation, perform the correct store action
        this.$store.dispatch(`product/${operationType}Item`, this.$store.getters['product/getProductForCreateUpdate']);
      } else {
        evt.preventDefault();
      }
    },
    onHidden(evt) {
      evt.preventDefault();
      this.submitted = false;
      if (!this.isUpdate) {
        // reset product item state in store if this is a create operation
        this.$store.commit('product/resetItem');
      }
      this.$router.push({ name: 'products.index' });
    },
  },
};
</script>
