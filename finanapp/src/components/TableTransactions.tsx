export function TableTransactions() {
  return (
    <table className="w-full text-left">
      <thead className="text-gray-100 font-bold">
        <tr>
          <th className="">Name</th>
          <th>Date</th>
          <th>Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody className="text-gray-400">
        <tr className="">
          <td className="">Mercado</td>
          <td>20/10/2022</td>
          <td>Supermercado</td>
          <td>R$ -32,45</td>
        </tr>
      </tbody>
    </table>
  );
}
