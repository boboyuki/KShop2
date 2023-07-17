import axios from '@/plugins/axios';
type GetProductsParams = {
  page: number;
}
export default {
  getAllProducts: () => axios.get('/products/all'),
  getProduct: (id: string) => axios.get(`/products/${id}`),
  getProducts: (params: GetProductsParams) => axios.get('/products', { params }),
}