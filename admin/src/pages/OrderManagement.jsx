import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [detailsOpen, setDetailsOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:4000/api/order/all', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setOrders(response.data);
    } catch (error) {
      toast.error('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      await axios.put(`http://localhost:4000/api/order/${orderId}/status`, 
        { status: newStatus },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }}
      );
      toast.success('Order status updated successfully');
      fetchOrders();
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
    setDetailsOpen(true);
  };

  const columns = [
    { field: '_id', headerName: 'Order ID', width: 220 },
    { 
      field: 'user', 
      headerName: 'Customer', 
      width: 200,
      valueGetter: (params) => params.row.user.name
    },
    { 
      field: 'totalAmount', 
      headerName: 'Amount', 
      width: 130,
      valueGetter: (params) => `₹${params.row.totalAmount}`
    },
    { field: 'status', headerName: 'Status', width: 130 },
    { 
      field: 'createdAt', 
      headerName: 'Order Date', 
      width: 200,
      valueGetter: (params) => new Date(params.row.createdAt).toLocaleString()
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 300,
      renderCell: (params) => (
        <div className="space-x-2">
          <Button 
            variant="outlined" 
            size="small"
            onClick={() => handleViewDetails(params.row)}
          >
            View Details
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            disabled={params.row.status === 'Delivered'}
            onClick={() => handleStatusChange(params.row._id, 'Processing')}
          >
            Mark Processing
          </Button>
          <Button
            variant="contained"
            size="small"
            color="success"
            disabled={params.row.status === 'Delivered'}
            onClick={() => handleStatusChange(params.row._id, 'Delivered')}
          >
            Mark Delivered
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Order Management</h1>
        <Button variant="contained" onClick={fetchOrders} disabled={loading}>
          Refresh Orders
        </Button>
      </div>

      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={orders}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          disableSelectionOnClick
          getRowId={(row) => row._id}
          loading={loading}
        />
      </div>

      <Dialog open={detailsOpen} onClose={() => setDetailsOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <>
              <DialogContentText>
                <strong>Order ID:</strong> {selectedOrder._id}<br />
                <strong>Customer:</strong> {selectedOrder.user.name}<br />
                <strong>Email:</strong> {selectedOrder.user.email}<br />
                <strong>Status:</strong> {selectedOrder.status}<br />
                <strong>Date:</strong> {new Date(selectedOrder.createdAt).toLocaleString()}<br />
                <strong>Total Amount:</strong> ₹{selectedOrder.totalAmount}
              </DialogContentText>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Shipping Address</h3>
                <p>
                  {selectedOrder.shippingAddress.street}<br />
                  {selectedOrder.shippingAddress.city}<br />
                  {selectedOrder.shippingAddress.state} - {selectedOrder.shippingAddress.pincode}
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Order Items</h3>
                <div className="space-y-4">
                  {selectedOrder.items.map((item) => (
                    <div key={item._id} className="flex items-center space-x-4">
                      <img
                        src={item.product.image[0]}
                        alt={item.product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{item.product.name}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity} × ₹{item.product.price} = ₹{item.quantity * item.product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold mb-2">Payment Information</h3>
                <p>
                  <strong>Payment ID:</strong> {selectedOrder.paymentId}<br />
                  <strong>Payment Status:</strong> {selectedOrder.paymentStatus}
                </p>
              </div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDetailsOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderManagement;
