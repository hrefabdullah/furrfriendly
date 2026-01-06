export default function OrderSuccess({ params }) {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        ✅ Order Placed Successfully
      </h1>

      <p className="text-gray-700 mb-2">
        Order ID: <b>{params.orderId}</b>
      </p>

      <p className="text-gray-600 max-w-md">
        Thank you for your purchase!  
        You will receive order updates via:
      </p>

      <ul className="mt-3 text-gray-700">
        <li>📧 Email</li>
        <li>📱 WhatsApp</li>
      </ul>

      <a
        href="/store"
        className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg"
      >
        Continue Shopping
      </a>
    </div>
  );
}
