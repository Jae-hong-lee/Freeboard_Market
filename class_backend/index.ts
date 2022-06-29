// 1. API(함수) 만들기!
// 2. DB에 접속하기! - Board 테이블 만들기 orm(typeorm)을 설치해서 DB에 연결해보자.
console.log("TS 실행!");

import { DataSource } from "typeorm";
import { Board } from "./Board-postgres";
import { ApolloServer, gql } from "apollo-server";

// 서버를 만든다. 아폴로서버를 통해서.
// 크게 두가지를 입력해줘야한다. API(함수) = resolvers, 그리고 그 함수에 타입(typeDefs)을 입력해줘야한다.
// 1. 타입 - typeDefs
const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String
    title: String
    contents: String
  }

  # 우리가 타입을 만들 수 있다.
  type Board {
    number: Int
    writer: String
    title: String
    contents: String
  }

  type Query {
    fetchBoards: [Board]
    # 하나의 배열로 들어가니까 []로 감싸
  }

  type Mutation {
    # createBoard(writer: String, title: String, contents: String): String! # 연습용(example)
    createBoard(createBoardInput: CreateBoardInput): String # 실무용(backend07)
  }
`;
// 2. 함수(API) - resolvers
const myResolvers = {
  Query: {
    fetchBoards: async () => {
      // result 변수에 담음 : DB에서 받아오는 것이기 때문에 데이터 받아오는것을 기다려줘야한다(async. await)
      const result = await Board.find();
      // insert -> DB에 등록
      // find -> DB 찾아오기 (목록 조회하기)
      // findOne -> DB 한개 찾아오기
      return result;
    },
  },
  // 데이터 등록되는 것도 기다려줘야해서 (async.await)
  Mutation: {
    createBoard: async (_: any, args: any) => {
      args.writer;
      args.title;
      args.contents;
      await Board.insert({
        ...args.createBoardInput,
        // example
        // writer: args.writer,
        // title: args.title,
        // contents: args.contents,
        // 백
        // writer: args.createBoardInput.writer,
        // title: args.createBoardInput.title,
        // contents: args.createBoardInput.contents,
      });
      return "게시물 등록 성공!!!";
    },
  },
};
// 이 서버는 24시간동안 켜져있어야한다. 상대방의 접속을 기다리는 애(서버프로그램)
// 서버프로그램이 실행되는 컴퓨터(서버컴퓨터)
const server = new ApolloServer({
  // 서버에 적용
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
  cors: true, // cors를 풀어주는 방법!
});

// 접속정보를 작성하는 곳
const AppDataSource = new DataSource({
  type: "postgres",
  host: "34.64.124.242",
  port: 5013,
  username: "postgres",
  password: "postgres2022",
  database: "postgres",
  // 테이블 넣는 곳 entities
  entities: [Board],
  synchronize: true,
  logging: true,
});
// 접속시켜줘. then: 성공했을때, catch 실패했을때
AppDataSource.initialize()
  .then(() => {
    console.log("연결성공");
    // yarn dev 와 같은 기능을 하는 것
    // 백엔드 API를 리슨(24시간동안 접속가능하게 대기상태로 만들어주기)
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
