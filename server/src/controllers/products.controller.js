import { prisma } from "../../db/dbConfig.js";

export const getAllProducts = async (req, res) => {
  try {
    let data = await prisma.product.findMany();

    return res.status(200).json({
      success: true,
      message: "Products Fetched Successfully",
      data,
    });
  } catch (err) {
    console.error("GET Product Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};

export const getProductById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required!",
      });
    }

    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "404 Product Not Found!",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product Fetched Successfully!",
      data: product,
    });
  } catch (err) {
    console.error("GET Product Error", err);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    });
  }
};
