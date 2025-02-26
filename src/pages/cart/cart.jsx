import React, { useState, useEffect } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/user/cart", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch cart items");
        }

        const data = await response.json();
        if (data.success) {
          setCartItems(data.cartItems);
        } else {
          throw new Error("Error fetching cart items");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const openDialog = (productId) => {
    setSelectedProductId(productId);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setSelectedProductId(null);
    setIsDialogOpen(false);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await fetch("http://localhost:3001/user/cart/remove", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId: selectedProductId }),
      });

      if (!response.ok) {
        throw new Error("Failed to delete item from cart");
      }

      // Update cart items after successful deletion
      setCartItems((prevItems) =>
        prevItems.filter((item) => item._id !== selectedProductId)
      );
      closeDialog();
    } catch (err) {
      alert(`Error: ${err.message}`);
      closeDialog();
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const discountedPrice = item.discount
        ? item.price - item.discount
        : item.price;
      return total + discountedPrice * item.quantity;
    }, 0);
  };

  if (loading) return <p>Loading cart items...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-gray-100 py-12 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-xl">Your cart is empty.</p>
      ) : (
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
          <div
            className="overflow-y-auto min-h-screen w-full  p-6"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "gray lightgray",
            }}
          >
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border-b border-gray-200 py-6 hover:bg-gray-50 transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  <div className="h-32 w-32 bg-gray-100 flex items-center justify-center rounded-lg">
                    {item.image ? (
                      <img
                        src={`data:image/png;base64,${item.image}`}
                        alt={item.name}
                        className="h-full w-full object-contain rounded-lg"
                      />
                    ) : (
                      <p className="text-gray-800 font-bold text-sm">No Image</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="text-teal-600 text-xl font-bold">
                        Rs: {item.discount
                          ? (item.price - item.discount).toFixed(2)
                          : item.price.toFixed(2)}
                      </div>
                      {item.discount > 0 && (
                        <div className="line-through text-gray-500 text-sm">
                          Rs: {item.price.toFixed(2)}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mt-2">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-center gap-4">
                  
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-200"
                    onClick={() => openDialog(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-6 text-right">
            <h2 className="text-2xl font-semibold text-gray-800">
             
            </h2>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {isDialogOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800">
              Are you sure you want to delete this item?
            </h3>
            <div className="mt-4 flex gap-4 justify-end">
              <button
                className="bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition-all duration-200"
                onClick={closeDialog}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-all duration-200"
                onClick={handleDeleteConfirm}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
