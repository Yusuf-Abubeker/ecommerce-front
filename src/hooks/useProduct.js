import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';

const useProduct = (id) =>
  useQuery({
    queryKey: ['products', id],
    queryFn: () => apiClient.get('products/'+id),
  });

export default useProduct;
