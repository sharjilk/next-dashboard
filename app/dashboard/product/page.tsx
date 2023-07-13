import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListPlus, GalleryThumbnails } from 'lucide-react';

import { Product, columns } from './columns';
import DataTable from './data-table';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

async function getData(): Promise<Product[]> {
  // Fetch data from your API here.
  return [
    {
      id: '1',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/i/n/international-filmfestival-ver2.jpg',
      name: 'Smart Phone',
      type: 'Configurable',
      sku: 'SKU-123',
      qty: 10,
      status: 'Enabled',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '2',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/m/o/movie_nitght.jpg',
      name: 'Webcam for laptop',
      type: 'Simple',
      sku: 'SKU-456',
      qty: 5,
      status: 'Enabled',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '3',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/6/4/64aad6286b4e2.jpg',
      name: 'Wireless Headphones',
      type: 'Simple',
      sku: 'SKU-789',
      qty: 15,
      status: 'Enabled',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '4',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-01.jpg',
      name: 'Travel Charger',
      type: 'Configurable',
      sku: 'SKU-101',
      qty: 20,
      status: 'Enabled',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '5',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-3m-01.jpg',
      name: 'Smart Phone',
      type: 'Virtual',
      sku: 'SKU-123',
      qty: 10,
      status: 'Disabled',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '6',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/i/n/international-filmfestival-ver2.jpg',
      name: 'Webcam for laptop',
      type: 'Simple',
      sku: 'SKU-456',
      qty: 5,
      status: 'Enabled',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '7',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/m/o/movie_nitght.jpg',
      name: 'Wireless Headphones',
      type: 'Simple',
      sku: 'SKU-789',
      qty: 15,
      status: 'Enabled',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '8',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/6/4/64aad6286b4e2.jpg',
      name: 'Travel Charger',
      type: 'Configurable',
      sku: 'SKU-101',
      qty: 20,
      status: 'Disabled',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '9',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-01.jpg',
      name: 'Smart Phone',
      type: 'Virtual',
      sku: 'SKU-123',
      qty: 10,
      status: 'Disabled',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '10',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-3m-01.jpg',
      name: 'Webcam for laptop',
      type: 'Simple',
      sku: 'SKU-456',
      qty: 5,
      status: 'Enabled',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '11',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/i/n/international-filmfestival-ver2.jpg',
      name: 'Wireless Headphones',
      type: 'Simple',
      sku: 'SKU-789',
      qty: 15,
      status: 'Enabled',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '12',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/m/o/movie_nitght.jpg',
      name: 'Travel Charger',
      type: 'Configurable',
      sku: 'SKU-101',
      qty: 20,
      status: 'Disabled',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '13',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/6/4/64aad6286b4e2.jpg',
      name: 'Smart Phone',
      type: 'Virtual',
      sku: 'SKU-123',
      qty: 10,
      status: 'Enabled',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '14',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-01.jpg',
      name: 'Webcam for laptop',
      type: 'Simple',
      sku: 'SKU-456',
      qty: 5,
      status: 'Disabled',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '15',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/y/o/yoga-product-3m-01.jpg',
      name: 'Wireless Headphones',
      type: 'Simple',
      sku: 'SKU-789',
      qty: 15,
      status: 'Enabled',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '16',
      thumbnail:
        'https://alrajhi-urpay-demo.vaimo.net/media/catalog/product/cache/8a0eaabe2684cddf5d8989e303eb15ba/i/n/international-filmfestival-ver2.jpg',
      name: 'Travel Charger',
      type: 'Configurable',
      sku: 'SKU-101',
      qty: 20,
      status: 'Enabled',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
  ];
}

const Product = async () => {
  const data = await getData();

  return (
    <>
      <div className="flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Products</h2>
            <div className="flex items-center">
              <Button>
                <ListPlus className="mr-2 h-4 w-4" /> Add New Product
              </Button>
            </div>
          </div>
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
};

export default Product;
