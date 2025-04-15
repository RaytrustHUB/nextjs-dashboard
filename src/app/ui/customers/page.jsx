import { fetchCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import dotenv from 'dotenv';

// import { lusitana } from '@/app/ui/fonts';

dotenv.config();
export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
