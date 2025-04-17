import { fetchCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';

// import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  const customers = await fetchCustomers();
  return (
    <div>
      <CustomersTable customers={customers} />
    </div>
  );
}
