import { useEffect, useState } from "react";
import FormFilter from "./components/FormFilter";
import CartItem, { ICardItemProps } from "./components/cartItem";
import productApi from "./services/productService";
import useDidMount from "./hooks/useDidMount";
import { Col, Pagination, Row, Spin } from "antd";
import * as Styled from "./styles";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
export interface IMeta {
  _limit: number;
  _totalRows: number;
  _page: number;
}

export interface IResponse<T> {
  data: T[];
  pagination: IMeta;
}

function App() {
  const [products, setProduct] = useState<ICardItemProps[]>([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [meta, setMeta] = useState<IMeta>({
    _limit: parseInt(searchParams.get("_limit") || "8"),
    _totalRows:
      parseInt(searchParams.get("_limit") || "8") *
      parseInt(searchParams.get("_page") || "1"),
    _page: parseInt(searchParams.get("_page") || "1"),
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getProduct(metaProps?: IMeta) {
    try {
      setIsLoading(true);
      const res = await productApi.getAll(metaProps || meta);

      console.log(res.pagination);

      setProduct(res.data);
      setMeta(res.pagination);
    } catch (error) {
      alert("error");
    } finally {
      setIsLoading(false);
    }
  }

  useDidMount(() => {
    getProduct();
  });

  useEffect(() => {
    searchParams.set("_limit", meta._limit + "");
    searchParams.set("_page", meta._page + "");
    navigate("?" + searchParams.toString(), { replace: true });
  }, [searchParams, meta, navigate]);

  return (
    <div className="container">
      <>
        <FormFilter getProduct={() => getProduct()} />

        {isLoading ? (
          <Styled.LoadingWrapper>
            <Spin />
          </Styled.LoadingWrapper>
        ) : (
          <Row gutter={12}>
            {products.map((product) => (
              <Col key={product.title} xs={6}>
                <CartItem title={product.title} image={product?.image} />
              </Col>
            ))}
          </Row>
        )}
        {products.length > 0 && !isLoading && (
          <Pagination
            defaultPageSize={meta._limit}
            total={meta._totalRows}
            onChange={(page) =>
              getProduct({
                ...meta,
                _page: page,
              })
            }
            defaultCurrent={meta._page}
          />
        )}
      </>
    </div>
  );
}

export default App;
