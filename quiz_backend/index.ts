console.log("TS 실행!");

import { DataSource } from "typeorm";
import { Product } from "./Product-postgres";
import { ApolloServer, gql } from "apollo-server";

const myTypeDefs = gql`
  input createProduct {
    seller: String
  }
  input CreateProductInput {
    name: String
    detail: String
    price: Int
  }
  type Mutation {
    createProduct(
      seller: String
      createProductInput: CreateProductInput!
    ): String
  }

  type Product {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Products {
    _id: ID
    seller: String
    name: String
    detail: String
    price: Int
  }

  type Query {
    fetchProduct: Product
  }
  type Query {
    fetchProducts: [Products]
  }
  input updateProduct {
    productId: ID
  }
  input UpdateProductInput {
    name: String
    detail: String
    price: Int
  }
  type Mutation {
    updateProduct(
      productId: String
      updateProductInput: UpdateProductInput!
    ): String
  }
`;

const myResolvers = {
  Query: {
    fetchProduct: async (_: any, args: any) => {
      const result = await Product.findOne({ where: { _id: args._id } });
      return result;
    },
    fetchProducts: async () => {
      const result = await Product.find();
      return result;
    },
  },

  Mutation: {
    createProduct: async (_: any, args: any) => {
      await Product.insert({
        seller: args.seller,
        ...args.createProductInput,
      });
      return "게시물 등록 성공!!!";
    },
    updateProduct: async (_: any, args: any) => {
      await Product.update(
        {
          name: args.name,
        },
        { name: "das" }
      );
      return "게시물 등록 성공!!!";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true,
});

const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  port: 5013,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",

  entities: [Product],
  synchronize: true,
  logging: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");

    server
      .listen(4000)
      .then(() => {
        console.log("서버실행성공");
      })
      .catch(() => {
        console.log("서버실행싪패");
      });
  })
  .catch(() => {
    console.log("연결실패!!");
  });
