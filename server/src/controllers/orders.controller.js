import { prisma } from "../../db/dbConfig.js";

export const createOrder = async (req, res) => {
  try {
    const { name, email, address, products } = req.body;

    // Validating name, email and address
    if (!name || !email || !address) {
      return res.status(400).json({
        success: false,
        message: "Name, email and address are required!",
      });
    }

    // Validating Product
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Products array is required and cannot be empty!",
      });
    }

    // Validating product id and quantity
    for (const product of products) {
      if (!product.productId || !(product.quantity && product.quantity > 0)) {
        return res.status(400).json({
          success: false,
          message: "Each product must have valid productId and quantity",
        });
      }
    }

    // Extracting ProductId's
    const productListId = products.map((product) => product.productId);

    // Getting only the products from db which are is in the product list
    const productList = await prisma.product.findMany({
      where: {
        id: {
          in: productListId,
        },
      },
    });

    // Checking one of the products exist or not if not return
    if (productList.length !== products.length) {
      return res.status(404).json({
        success: false,
        message: "One or more products do not exist",
      });
    }

    // Storing Price with the productId to get easy access
    const priceMap = {};

    for (const product of productList) {
      priceMap[product.id] = product.price;
    }

    // getting total amount using (prevTotal + price * quantity)
    const totalAmount = products.reduce((acc, item) => {
      const price = priceMap[item.productId];
      return acc + price * item.quantity;
    }, 0);

    const order = await prisma.order.create({
      data: {
        name,
        email,
        address,
        totalAmount,
      },
    });

    if (!order) {
      return res.status(500).json({
        success: false,
        message: "Order failed something went wrong!",
      });
    }

    const orderItemList = [];

    products.forEach((item) => {
      let price = priceMap[item.productId];
      let subTotal = price * item.quantity;

      let data = {
        productId: item.productId,
        orderId: order.id,
        quantity: item.quantity,
        subTotal,
      };
      orderItemList.push(data);
    });

    let orderItems = await prisma.orderItem.createMany({
      data: orderItemList,
    });

    if (orderItems.count === 0) {
      return res.status(500).json({
        success: false,
        message: "Order failed something went wrong!",
      });
    }

    const mockLogistics = {
      trackingId: `MOB-${Math.random().toString(36).toUpperCase().substring(2, 10)}`,
      carrier: "Standard Delivery",
      status: "Shipped",
      estimatedArrival: "3-5 Business Days",
    };

    res.status(201).json({
      message: "Order placed successfully!",
      orderId: order.id,
      logistics: mockLogistics,
    });
    
  } catch (err) {
    console.error("POST Order Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
