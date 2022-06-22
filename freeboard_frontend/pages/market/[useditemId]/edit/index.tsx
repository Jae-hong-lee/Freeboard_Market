import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketWriteContainer from "../../../../src/components/units/market/new/Market.Write.container";

export const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      createdAt
      pickedCount
      images
      seller {
        _id
        name
        email
      }
      useditemAddress {
        address
        zipcode
      }
    }
  }
`;

export default function MarketEditPage() {
  const router = useRouter();
  const { data, loading } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });

  return loading ? "" : <MarketWriteContainer isEdit={true} data={data} />;
}
