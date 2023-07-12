import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ListPlus } from 'lucide-react';

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
      name: 'Smart Phone',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '2',
      name: 'Webcam for laptop',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '3',
      name: 'Wireless Headphones',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '4',
      name: 'Travel Charger',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '5',
      name: 'Smart Phone',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '6',
      name: 'Webcam for laptop',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '7',
      name: 'Wireless Headphones',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '8',
      name: 'Travel Charger',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '9',
      name: 'Smart Phone',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '10',
      name: 'Webcam for laptop',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '11',
      name: 'Wireless Headphones',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '12',
      name: 'Travel Charger',
      description: 'Universal travel charger for laptop and phone',
      price: 200.1,
    },
    {
      id: '13',
      name: 'Smart Phone',
      description: 'Smart phone to use for work',
      price: 350.4,
    },
    {
      id: '14',
      name: 'Webcam for laptop',
      description: 'Full HD webcam for laptop',
      price: 50.0,
    },
    {
      id: '15',
      name: 'Wireless Headphones',
      description: 'Wireless headphones for listening to music',
      price: 120.0,
    },
    {
      id: '16',
      name: 'Travel Charger',
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
          {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTable columns={columns} data={data} />
              </CardContent>
            </Card>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Product;
